# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, clean design with gradient effects
- 🌓 Dark mode support
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS
- 💪 Type-safe with TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. **Update your information** in `src/app/page.tsx`:

   - Change "Your Name" to your actual name
   - Update your title/role
   - Modify the about section

2. **Add your projects**:

   - Replace the placeholder project cards with your actual projects
   - Add project images, descriptions, and links

3. **Configure metadata** in `src/app/layout.tsx`:

   - Update the title and description
   - Add your name and site information

4. **Connect contact form**:
   - Add form handling logic (e.g., using Resend, SendGrid, or Formspree)
   - Or link to your email/social media

## Deployment

Deploy easily to Vercel:

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel for automatic deployments.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recommended)

## Next Steps

1. Add more sections (testimonials, blog, etc.)
2. Install Shadcn/ui for pre-built components
3. Add animations with Framer Motion
4. Implement contact form functionality
5. Add SEO optimizations
6. Create a blog with MDX

## License

MIT
