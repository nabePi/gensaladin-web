# Deployment Guide

## Dockploy Deployment

### 1. Push to Git Repository

```bash
git push origin main
```

### 2. Configure Dockploy

1. Create new project in Dockploy
2. Connect your Git repository
3. Select Docker deployment

### 3. Environment Variables

Configure these environment variables in Dockploy:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
AUTH_SECRET=your-auth-secret
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MIDTRANS_SERVER_KEY=your-midtrans-server-key
MIDTRANS_CLIENT_KEY=your-midtrans-client-key
RESEND_API_KEY=your-resend-api-key
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 4. Deploy

Click "Deploy" in Dockploy interface.

### 5. Post-Deployment

- Configure custom domain
- Set up SSL certificate
- Test all features

## Local Docker Testing

```bash
# Build and run
docker-compose up --build

# Or manually
docker build -t gensaladin .
docker run -p 3000:3000 --env-file .env gensaladin
```
