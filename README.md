# Intellix

Next.js 15 - @supabase/ssr

## About

This is a Starter Template

Every line of code is open source, offering a collaborative learning experience. Join us on this coding journey and contribute to the future of web development!

## File Structure
/src
  /app
    /(auth) - Public routes
      /login
      /register
      /email-verify
    /(main) - Protected routes
      /(home)
      /profile
  /components
    /ui - Reusable UI components
    /navbar - Navigation bar
    /footer - Page footer
  /utils
    /supabase - Supabase client and server utilities
    /cn - Utility function for Tailwind CSS
    /theme-provider - Theme provider for dark, light and system color mode
    

# Features

- Nextjs 15 (latest)
- App router
- Supabase
- Supabase with Authentication
- Dark, Light and System - Color theme mode
- SEO Optimized
- Styled using **Tailwind CSS**
- UI Components built using **Shadcn UI (Radix UI)**
- Validations using **Zod**
- Written in **TypeScript**

## Getting Started

1. Install dependencies using pnpm:

```bash
npm install
# or
yarn install
# or
pnpm install
```

<br />

2. Copy `.env.example` to `.env.local` and update the environment variables.

<br />

3. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

<br />

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(main)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel


# nextjs-supabase-auth
