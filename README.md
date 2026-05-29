# The USA Publishers - Professional Book Publishing Services

A modern, production-ready Next.js application for professional book publishing and writing services, including an admin dashboard for managing books, leads, and operations.

## 🚀 Features

- **Landing Page** with hero section, services showcase, portfolio gallery, and lead capture
- **Dynamic Service Pages** with detailed information about each publishing service
- **Portfolio Gallery** displaying published books fetched from database
- **Lead Management System** with form submissions and admin dashboard
- **Admin Dashboard** for managing books, leads, and services
- **API Routes** for CRUD operations on books and leads
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Database Integration** with PostgreSQL and Prisma ORM
- **Optimized Images** with Next.js Image component for performance
- **Vercel Ready** with deployment configuration

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel
- **Email**: Resend (optional) or Nodemailer

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database
- Git

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd ebook
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/theusapublishers_dev

# Email Service
RESEND_API_KEY=your_resend_api_key_here

# App Configuration
NEXT_PUBLIC_APP_NAME=The USA Publishers
NEXT_PUBLIC_PHONE=+1 213 267 4279
NEXT_PUBLIC_EMAIL=support@theusapublishers.com
```

### 4. Set up the database
```bash
# Push schema to database
npm run db:push

# (Optional) Open Prisma Studio for data management
npm run studio
```

### 5. Run the development server
```bash
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📦 Project Structure

```
ebook/
├── app/
│   ├── page.tsx                 # Home page
│   ├── contact/                 # Contact page
│   ├── portfolio/               # Portfolio gallery
│   ├── services/                # Service detail pages
│   ├── admin/                   # Admin dashboard
│   ├── api/                     # API routes
│   ├── actions/                 # Server actions
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── forms/                   # Form components
│   └── sections/                # Page section components
├── lib/
│   └── prisma.ts                # Prisma client
├── prisma/
│   └── schema.prisma            # Database schema
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

## 🗄️ Database Schema

### Book Model
- `id`: Unique identifier
- `title`: Book title
- `author`: Author name
- `description`: Book description
- `imageUrl`: URL to book cover image
- `category`: Book category
- `featured`: Featured status for homepage display
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Lead Model
- `id`: Unique identifier
- `name`: Contact name
- `email`: Contact email
- `phone`: Contact phone
- `service`: Interested service
- `status`: Lead status (new, contacted, converted)
- `message`: Optional message
- `createdAt`: Submission timestamp
- `updatedAt`: Last update timestamp

## 🔌 API Endpoints

### Leads
- `POST /api/leads` - Submit a new lead
- `GET /api/leads` - Get all leads

### Books
- `GET /api/books` - Get all books
- `POST /api/books` - Create a new book
- `GET /api/books/[id]` - Get a specific book
- `PUT /api/books/[id]` - Update a book
- `DELETE /api/books/[id]` - Delete a book

## 🎨 Branding & Colors

- **Primary**: Deep Navy Blue (`#0A192F`)
- **Accent**: Crimson Red (`#D32F2F`)
- **Background**: White (`#FFFFFF`) and Slate (`#F8FAFC`)
- **Typography**: Inter and Montserrat

## 📝 Pages & Routes

- `/` - Home page with all sections
- `/contact` - Contact form page
- `/portfolio` - Full portfolio gallery
- `/services/ghostwriting` - Service detail page example
- `/admin` - Admin dashboard
- `/admin/books` - Manage books
- `/admin/leads` - Manage leads

## 🚀 Deployment to Vercel

### Recommended Steps:

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables

3. **Set Up Database**
   - Use Vercel Postgres or connect your PostgreSQL instance
   - Add `DATABASE_URL` to Vercel environment variables

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

## 🛠️ Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Push database schema changes
npm run db:push

# Open Prisma Studio
npm run studio

# Run migrations
npm run db:migrate
```

## 📧 Email Configuration

### Using Resend (Recommended)
```bash
npm install @resend/node
```

### Using Nodemailer
```bash
npm install nodemailer
```

Update environment variables accordingly.

## 🔐 Environment Variables Checklist

- [ ] DATABASE_URL set to your PostgreSQL instance
- [ ] NEXT_PUBLIC_PHONE updated with your phone number
- [ ] NEXT_PUBLIC_EMAIL updated with your email
- [ ] NEXT_PUBLIC_APP_NAME updated with your business name
- [ ] RESEND_API_KEY (if using Resend)
- [ ] Email configuration variables (if using Nodemailer)

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)

## ♿ Accessibility

Built with accessibility best practices:
- Semantic HTML
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Verify DATABASE_URL is correct
# Check PostgreSQL is running
# Try: npm run db:push
```

### Build Errors
```bash
# Clear .next folder
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

## 📞 Support & Next Steps

1. **Customize Content**: Update text in components with your specific services
2. **Add Book Covers**: Upload images to Vercel Blob or use Cloudinary
3. **Configure Email**: Set up email notifications for new leads
4. **Add Admin Auth**: Implement authentication for admin dashboard
5. **Analytics**: Integrate Google Analytics or similar

## 📄 License

This project is proprietary to The USA Publishers.

## 🎯 Roadmap

- [ ] Admin authentication system
- [ ] Email notifications for new leads
- [ ] Book image upload functionality
- [ ] Advanced lead filtering in admin
- [ ] Payment integration for services
- [ ] Client testimonials management
- [ ] Newsletter signup
- [ ] SEO optimization

---

**Ready to launch?** Deploy to Vercel and start accepting leads!
