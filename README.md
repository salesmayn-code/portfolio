This is the portfolio website for Muhammad Saleh Janjua, built with Next.js, TypeScript, Tailwind CSS, and Vercel Analytics.

## Getting started

Install dependencies and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Environment variables

Copy `.env.example` to `.env.local` and provide the values before deploying:

- `NEXT_PUBLIC_SITE_URL` — the Vercel production URL or custom domain.
- `RESEND_API_KEY` — enables contact email delivery.
- `RESEND_FROM_EMAIL` — a sender address verified in Resend.

Without `RESEND_API_KEY`, the contact endpoint returns a safe `503` response and the UI directs visitors to email directly.

## Deployment

Import this repository into Vercel as a Next.js project, then add the environment variables above in **Project Settings → Environment Variables**. Vercel Analytics activates automatically after deployment.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
