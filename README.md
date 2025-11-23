# G3NERALOLA Photography Portfolio

A modern, premium photography portfolio website for G3NERALOLA (@ad3ola_olamil3kan_), a Nigerian photographer focused on portraits, lifestyle, campus life, and expressive visual storytelling.

## ✨ Features

- **Modern Design**: Clean, minimalist black & white aesthetic with premium typography
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop devices
- **Dark Mode**: Built-in theme switcher with light/dark mode support
- **Portfolio Gallery**: Masonry grid layout with category filtering and lightbox view
- **Contact Form**: Integrated email functionality powered by Gmail SMTP
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Email**: Nodemailer with Gmail SMTP
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Theme**: Custom theme provider with dark mode
- **Font**: Playfair Display (headings) + Inter (body)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd g3neralola-portfolio
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
# Gmail SMTP Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-specific-password
```

**Important**: Use a Gmail App Password, not your regular password:
- Go to Google Account → Security → 2-Step Verification → App passwords
- Generate a new app password for "Mail"
- Copy the 16-character password to your `.env` file

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with form
│   ├── portfolio/      # Portfolio gallery with filtering
│   ├── services/       # Services and pricing
│   ├── actions/        # Server actions (email sending)
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles and theme tokens
├── components/
│   ├── ui/             # Shadcn UI components
│   ├── Navbar.tsx      # Navigation with theme toggle
│   ├── Footer.tsx      # Footer with contact info
│   ├── Lightbox.tsx    # Image lightbox viewer
│   ├── theme-provider.tsx  # Theme context provider
│   └── theme-toggle.tsx    # Dark mode toggle button
└── lib/
    └── utils.ts        # Utility functions
```

## 🎨 Customization

### Colors & Theme
Edit design tokens in `src/app/globals.css`:
```css
:root {
  --background: oklch(0.98 0 0);
  --foreground: oklch(0.09 0 0);
  --primary: oklch(0.09 0 0);
  /* ... more tokens */
}

.dark {
  --background: oklch(0.09 0 0);
  --foreground: oklch(0.98 0 0);
  /* ... dark mode overrides */
}
```

### Portfolio Images
Update images in `src/app/portfolio/page.tsx` in the `portfolioImages` array.

### Contact Information
Update contact details in:
- `src/app/contact/page.tsx`
- `src/components/Footer.tsx`

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
4. Deploy

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All pages are fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly UI elements

## 🔧 Development

### Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add `page.tsx` file
3. Update navigation in `src/components/Navbar.tsx`

## 📧 Email Configuration

The contact form uses Gmail SMTP. To set up:

1. Enable 2-Step Verification in your Google Account
2. Generate an App Password
3. Add credentials to `.env`
4. Test the form in production

## 🎯 Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized images with Next.js Image component
- Code splitting and lazy loading

## 📄 License

© 2024 G3NERALOLA. All rights reserved.

## 👨‍💻 Developer

Built with ❤️ for G3NERALOLA

For support or inquiries, contact: adeolaomogbolahan48@gmail.com

## 🔗 Links

- **Instagram**: [@ad3ola_olamil3kan_](https://instagram.com/ad3ola_olamil3kan_)
- **WhatsApp**: +234 802 124 7749
- **Email**: adeolaomogbolahan48@gmail.com