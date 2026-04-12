# Gensaladin Web

Next.js 14 App Router web app for Gensaladin.

## Run on local

### 1) Prerequisites
- Node.js 20+
- npm (project uses `package-lock.json`)

### 2) Install dependencies
```bash
npm ci
```

### 3) Create local environment file
Create `.env.local` in project root and fill required values:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Supabase
NEXT_PUBLIC_SUPABASE_URL=""
NEXT_PUBLIC_SUPABASE_ANON_KEY=""
SUPABASE_SERVICE_ROLE_KEY=""

# Auth
AUTH_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Payment (optional for non-donation flows)
MIDTRANS_SERVER_KEY=""
MIDTRANS_CLIENT_KEY=""

# Email (optional for non-email flows)
RESEND_API_KEY=""
```

### 4) Start development server
```bash
npm run dev
```

Open `http://localhost:3000`.

## Local production run
```bash
npm run build
npm run start
```

## Docker run
```bash
docker compose up --build
```
App health check: `http://localhost:3099/api/health`

Stop container:
```bash
docker compose down
```

## Useful commands
```bash
npm run lint
npm run build
```

## Notes
- There is no test runner configured yet in this repository.
