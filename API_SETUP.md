# API Integration Setup Guide

## Overview
The demo booking form now integrates with a backend API that:
1. Stores submissions in a PostgreSQL database
2. Sends confirmation emails to users
3. Sends notification emails to admins

## Installation Steps

### 1. Install Dependencies
```bash
npm install @prisma/client nodemailer
npm install -D prisma @types/nodemailer
```

### 2. Database Setup

#### Option A: PostgreSQL (Recommended)
```bash
# Install PostgreSQL locally or use a cloud provider (e.g., Neon, Vercel Postgres)
# Create a new database and get your CONNECTION_URL
```

#### Option B: Quick Setup with Neon (PostgreSQL Serverless)
1. Go to https://neon.tech
2. Sign up and create a new project
3. Copy the connection string

### 3. Environment Configuration

Create a `.env.local` file in the root directory with your actual credentials:

```env
# Database
DATABASE_URL="postgresql://user:password@host:port/database_name"

# SMTP (Email) - Gmail Example
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_SECURE="false"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"  # Use Gmail App Password, NOT your regular password
SMTP_FROM="noreply@xpeer.ai"

# Admin Settings
ADMIN_EMAIL="info@xpeer.ai"

# Public Base URL
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 4. Email Setup (Gmail)
1. Enable 2-Step Verification on your Gmail account
2. Go to https://myaccount.google.com/apppasswords
3. Generate an App Password for "Mail" and "Windows"
4. Use this password in `SMTP_PASSWORD`

### 5. Initialize Prisma
```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# (Optional) View database in UI
npx prisma studio
```

### 6. Update Form Component

The form component (`components/landing/book-demo-section.tsx`) now:
- Submits to `/api/book-demo` endpoint
- Shows loading state while submitting
- Displays error messages if submission fails
- Shows success message after submission

### 7. API Endpoint

**Route:** `POST /api/book-demo`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Acme Corp",
  "website": "https://acme.com",
  "role": "QA Lead"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Demo request submitted successfully",
  "id": "clxxxxxxxxx"
}
```

**Response (Error):**
```json
{
  "error": "All fields are required"
}
```

## Testing

### 1. Development Testing
```bash
npm run dev
# Go to http://localhost:3000/book-demo
# Fill in the form and submit
```

### 2. Check Database
```bash
npx prisma studio
# View submitted demo requests in the DemoRequest table
```

### 3. Verify Emails
- Check your admin email for notifications
- Check user email for confirmation

## Alternative Email Providers

### SendGrid
```env
SENDGRID_API_KEY="your-api-key"
```

### Brevo (formerly Sendinblue)
```env
BREVO_API_KEY="your-api-key"
```

## Production Deployment

1. Set environment variables on your hosting platform (Vercel, Netlify, etc.)
2. Point `DATABASE_URL` to production database
3. Use production email credentials
4. Run migrations: `npx prisma migrate deploy`

## Troubleshooting

### Email not sending
- Verify SMTP credentials
- Check Gmail App Password (if using Gmail)
- Ensure firewall allows SMTP connections

### Database connection error
- Verify DATABASE_URL format
- Check if database server is running
- Test connection with: `npx prisma db execute --stdin`

### Prisma errors
- Regenerate client: `npx prisma generate`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

## Files Created/Modified

- `/app/api/book-demo/route.ts` - API endpoint
- `/prisma/schema.prisma` - Database schema
- `/components/landing/book-demo-section.tsx` - Updated form component
- `/.env.example` - Environment variables template
