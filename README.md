Movie App with Next.js
=======================

This project is built using Next.js and the TMDB (The Movie Database) API.

📦 Getting Started
------------------

To run the development server:

    npm run dev
    # or
    yarn dev

Then open your browser and go to:

    http://localhost:3000

🛠️ Project Structure
---------------------

- `app/page.tsx`         → Main homepage
- `app/film/[id]/[slug]` → Film detail pages
- `app/enYeniler`        → Recently added movies
- `components/`          → UI components like Navbar, MovieCard, etc.
- `libs/fetchMovies.ts`  → Movie fetching logic from TMDB API

🧠 Features
-----------

- Movie cards with poster, title, and release date
- Detailed movie page with full info
- "Watch Now" button linking to TMDB
- Categories and search functionality
- Responsive design with Tailwind CSS
- Hover effects for interactivity


🔗 Useful Links
---------------

- Next.js Documentation: https://nextjs.org/docs
- TMDB API Docs: https://developer.themoviedb.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

🎨 Fonts & Design
------------------

The app uses the Geist font via `next/font` optimization for clean UI.

---

Created with ❤️ using Next.js
