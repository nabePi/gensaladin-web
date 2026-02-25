export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string | null
          image: string | null
          role: 'admin' | 'member' | 'volunteer'
          created_at: string
        }
        Insert: {
          id: string
          email: string
          name?: string | null
          image?: string | null
          role?: 'admin' | 'member' | 'volunteer'
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          image?: string | null
          role?: 'admin' | 'member' | 'volunteer'
          created_at?: string
        }
      }
      events: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          date: string
          location: string
          type: 'kajian' | 'workshop' | 'rihlah' | 'camp' | 'seminar' | 'onedayclass' | null
          capacity: number
          registered_count: number
          status: 'draft' | 'published' | 'ongoing' | 'completed' | 'cancelled'
          image_url: string | null
          created_by: string | null
          created_at: string
          updated_at: string
        }
      }
      event_registrations: {
        Row: {
          id: string
          event_id: string
          user_id: string
          status: 'registered' | 'confirmed' | 'attended' | 'cancelled'
          registered_at: string
          attended_at: string | null
        }
      }
      campaigns: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          target_amount: number
          raised_amount: number
          start_date: string | null
          end_date: string | null
          status: 'draft' | 'active' | 'completed' | 'cancelled'
          created_at: string
        }
      }
      donations: {
        Row: {
          id: string
          order_id: string
          campaign_id: string | null
          user_id: string | null
          donor_name: string
          donor_email: string
          amount: number
          message: string | null
          payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
          payment_method: string | null
          payment_token: string | null
          paid_at: string | null
          created_at: string
        }
      }
      contents: {
        Row: {
          id: string
          title: string
          slug: string
          type: 'article' | 'vault_entry' | 'announcement' | null
          body: string | null
          excerpt: string | null
          image_url: string | null
          author_id: string | null
          status: 'draft' | 'published' | 'archived'
          published_at: string | null
          created_at: string
          updated_at: string
        }
      }
      learning_paths: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          level: number | null
          order_index: number | null
          status: 'draft' | 'published'
          created_at: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          path_id: string
          completed_lessons: number
          total_lessons: number
          status: 'not_started' | 'in_progress' | 'completed'
          started_at: string | null
          completed_at: string | null
        }
      }
    }
  }
}
