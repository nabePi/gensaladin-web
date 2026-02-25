-- Enable RLS
alter default privileges in schema public grant all on tables to postgres, anon, authenticated, service_role;

-- Users table (extends NextAuth)
create table users (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  name text,
  image text,
  role text default 'member' check (role in ('admin', 'member', 'volunteer')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Events table
create table events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  description text,
  date timestamp with time zone not null,
  location text not null,
  type text check (type in ('kajian', 'workshop', 'rihlah', 'camp', 'seminar', 'onedayclass')),
  capacity integer not null default 50,
  registered_count integer not null default 0,
  status text default 'draft' check (status in ('draft', 'published', 'ongoing', 'completed', 'cancelled')),
  image_url text,
  created_by uuid references users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Event registrations
create table event_registrations (
  id uuid default gen_random_uuid() primary key,
  event_id uuid references events(id) on delete cascade not null,
  user_id uuid references users(id) on delete cascade not null,
  status text default 'registered' check (status in ('registered', 'confirmed', 'attended', 'cancelled')),
  registered_at timestamp with time zone default timezone('utc'::text, now()) not null,
  attended_at timestamp with time zone,
  unique(event_id, user_id)
);

-- Campaigns for donations
create table campaigns (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  description text,
  target_amount bigint not null,
  raised_amount bigint not null default 0,
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  status text default 'active' check (status in ('draft', 'active', 'completed', 'cancelled')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Donations
create table donations (
  id uuid default gen_random_uuid() primary key,
  order_id text unique not null,
  campaign_id uuid references campaigns(id),
  user_id uuid references users(id),
  donor_name text not null,
  donor_email text not null,
  amount bigint not null,
  message text,
  payment_status text default 'pending' check (payment_status in ('pending', 'completed', 'failed', 'refunded')),
  payment_method text,
  payment_token text,
  paid_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Contents (articles, vault entries)
create table contents (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  type text check (type in ('article', 'vault_entry', 'announcement')),
  body text,
  excerpt text,
  image_url text,
  author_id uuid references users(id),
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Learning paths
create table learning_paths (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  description text,
  level integer check (level in (1, 2, 3)),
  order_index integer,
  status text default 'draft' check (status in ('draft', 'published')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- User progress on learning paths
create table user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references users(id) on delete cascade not null,
  path_id uuid references learning_paths(id) on delete cascade not null,
  completed_lessons integer default 0,
  total_lessons integer default 0,
  status text default 'not_started' check (status in ('not_started', 'in_progress', 'completed')),
  started_at timestamp with time zone,
  completed_at timestamp with time zone,
  unique(user_id, path_id)
);

-- Indexes for performance
create index idx_events_status on events(status);
create index idx_events_date on events(date);
create index idx_event_registrations_event on event_registrations(event_id);
create index idx_event_registrations_user on event_registrations(user_id);
create index idx_donations_status on donations(payment_status);
create index idx_contents_status on contents(status);
create index idx_contents_type on contents(type);

-- RLS Policies
alter table users enable row level security;
alter table events enable row level security;
alter table event_registrations enable row level security;
alter table campaigns enable row level security;
alter table donations enable row level security;
alter table contents enable row level security;
alter table learning_paths enable row level security;
alter table user_progress enable row level security;

-- Users policies
create policy "Users can view own profile"
  on users for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on users for update
  using (auth.uid() = id);

-- Events policies
create policy "Events are viewable by everyone"
  on events for select
  to anon, authenticated
  using (status = 'published');

create policy "Admins can manage events"
  on events for all
  to authenticated
  using (
    exists (
      select 1 from users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

-- Event registrations policies
create policy "Users can view own registrations"
  on event_registrations for select
  using (auth.uid() = user_id);

create policy "Users can create own registrations"
  on event_registrations for insert
  with check (auth.uid() = user_id);

create policy "Admins can view all registrations"
  on event_registrations for select
  using (
    exists (
      select 1 from users
      where users.id = auth.uid()
      and users.role = 'admin'
    )
  );

-- Function to atomically register for event
create or replace function register_for_event(
  p_event_id uuid,
  p_user_id uuid
) returns jsonb
language plpgsql
as $$
declare
  v_event events%rowtype;
  v_registration event_registrations%rowtype;
begin
  -- Lock event row
  select * into v_event
  from events
  where id = p_event_id
  for update;

  if not found then
    return jsonb_build_object('success', false, 'error', 'Event not found');
  end if;

  -- Check capacity
  if v_event.registered_count >= v_event.capacity then
    return jsonb_build_object('success', false, 'error', 'Event is full');
  end if;

  -- Check if already registered
  select * into v_registration
  from event_registrations
  where event_id = p_event_id and user_id = p_user_id;

  if found then
    return jsonb_build_object('success', false, 'error', 'Already registered');
  end if;

  -- Create registration
  insert into event_registrations (event_id, user_id, status)
  values (p_event_id, p_user_id, 'registered')
  returning * into v_registration;

  -- Increment count
  update events
  set registered_count = registered_count + 1
  where id = p_event_id;

  return jsonb_build_object(
    'success', true,
    'registration', v_registration,
    'remaining', v_event.capacity - v_event.registered_count - 1
  );
end;
$$;

-- Trigger to update timestamps
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

create trigger events_updated_at
  before update on events
  for each row execute function update_updated_at();

create trigger contents_updated_at
  before update on contents
  for each row execute function update_updated_at();
