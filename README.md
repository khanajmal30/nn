# Modern Notepad App

A modern notepad web application built with Next.js, SQLite3, and Prisma. Features a beautiful UI with animations powered by Framer Motion.

## Features

- Create, read, and delete notes
- Modern and responsive design
- Smooth animations
- SQLite database for data persistence
- TypeScript support
- Tailwind CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This application can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add the following environment variables:
   - `DATABASE_URL`: Your SQLite database URL
5. Deploy!

## Technologies Used

- Next.js 14
- TypeScript
- SQLite3
- Prisma
- Framer Motion
- Tailwind CSS
- React Icons

## License

MIT
