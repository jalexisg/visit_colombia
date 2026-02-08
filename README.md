# Visit Colombia 🇨🇴

A modern tourism website for Colombia, built with Next.js and Tailwind CSS, consuming the [API Colombia](https://api-colombia.com/).

## Features

- **Dynamic Content**: Fetches real data for Departments, Cities, and Natural Parks from API Colombia.
- **Modern UI**: Responsive design with Tailwind CSS, custom color palette, and glassmorphism effects.
- **Search**: Integrated search functionality (placeholder/client-side).
- **Monetization Ready**: Dedicated components for AdSense, Hotel affiliates, and Tour affiliates.
- **SEO Optimized**: Dynamic metadata implementation for better search engine visibility.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Source**: [API Colombia](https://api-colombia.com/)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (Hero, Navbar, Card, AdUnit, etc.).
- `lib/`: Utility functions and API client (`api.ts`).
- `types/`: TypeScript interfaces for the API data.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Push your code to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and configure the build settings.
4. Deploy!

## License

MIT
