# Mielora — Artisan Bakery Home Page

A responsive, modern retail storefront Home Page built with **React (Vite)**, **Tailwind CSS**, and **DaisyUI** for **Mielora Artisan Bakery**. Designed with a sleek black aesthetic paired with warm golden-yellow gradient accents.

## Live Demo & Repository
- **Live Demo:** `[Add your Vercel / Netlify link here]`
- **GitHub Repository:** `[Add your GitHub repo link here]`

## Key Features
- **Responsive Navigation Bar:** Sticky header with brand identity, smooth-scrolling section links, live static search bar, and mobile drawer menu.
- **Hero Showcase:** High-contrast introduction banner with clear Call-To-Action (CTA) buttons and bakery highlights.
- **Interactive Product Grid:** Displays 10 artisan bakery items fetched from static JSON (`public/data.json`) with real-time search filtering and category tabs (`All`, `Pastries`, `Cakes`, `Cupcakes`, `Cookies`, `Breads`).
- **Our Story Section:** Highlights Mielora's baking philosophy, craftsmanship pillars, and heritage.
- **Structured Footer:** Quick navigation links, specialty categories, bakery hours, location details, and social links.
- **Subtle Motion & Smooth Scrolling:** CSS keyframe entrance transitions and smooth anchor navigation across mobile, tablet, and desktop breakpoints.

## Tech Stack
- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4 + DaisyUI v5
- **Icons:** Lucide React

## Project Structure
```text
├── public/
│   └── data.json              # Static mockup dataset (10 bakery items)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Responsive header & search input
│   │   ├── Hero.jsx           # Hero banner with CTAs
│   │   ├── MenuSection.jsx    # Category filter & product grid layout
│   │   ├── ProductCard.jsx    # Reusable atomic product card
│   │   ├── OurStory.jsx       # Bakery heritage & craft pillars
│   │   └── Footer.jsx         # Bottom navigation, hours & copyright
│   ├── App.jsx                # Root layout & search state management
│   ├── index.css              # Tailwind, DaisyUI & custom animations
│   └── main.jsx               # React entry point
└── README.md