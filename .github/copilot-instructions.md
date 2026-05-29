# The USA Publishers - Next.js Clone Project

## Project Overview
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Prisma ORM
- **CMS:** Admin Dashboard
- **Deployment:** Vercel
- **Business:** The Usa Publishers

## Branding Specifications
- **Primary Color:** Deep Navy Blue (#0A192F) - `bg-slate-900`
- **Accent Color:** Crimson Red (#D32F2F) - `bg-red-600`
- **Typography:** Inter/Montserrat via next/font/google
- **Phone:** +1 213 267 4279
- **Email:** support@theusapublishers.com

## Completed Steps
- [x] Project scaffolding initialized
- [x] Database schema configured (Prisma models: Book, Lead, Service)
- [x] Environment variables template created (.env.example)
- [x] Frontend pages built (Home, Contact, Portfolio, Services)
- [x] Admin dashboard created (Books, Leads management)
- [x] API routes implemented (CRUD for books and leads)
- [x] Deployment configuration prepared (Vercel)
- [x] Documentation completed (README.md)

## Next Steps for Developer
1. Install dependencies: `npm install`
2. Set up local PostgreSQL database
3. Configure `.env.local` with database credentials
4. Run migrations: `npm run db:push`
5. Start dev server: `npm run dev`
6. Access admin at `/admin`
7. Deploy to Vercel when ready

## Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions and database client
- `prisma/` - Database schema and migrations
- `public/` - Static assets

## Key Features Implemented
- Responsive landing page with hero, services, portfolio sections
- Lead capture forms with Server Actions
- Admin dashboard for managing books and leads
- RESTful API endpoints for data operations
- Database-driven portfolio gallery
- Original, copyright-free content throughout
