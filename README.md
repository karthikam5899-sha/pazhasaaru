# Pazha Saaru

A responsive juice and smoothie storefront built with React, Vite, and Tailwind CSS. Browse the menu, filter by drink type, view product details, and explore offers tailored to the selected category.

## Features

- Responsive layouts for phones, tablets, laptops, and desktop screens
- Branded intro animation with a skip control and reduced-motion support
- Sticky navigation with a mobile menu
- Light and dark themes; the selected theme is saved in `localStorage` under `juice-theme`
- Product categories for Fresh Juice, Smoothies, and Detox, plus an All filter
- Category-specific special offers
- Product detail view opened from each menu item's Add button
- Automatically scrolling customer testimonials
- Contact form with client-side validation and a confirmation message

## Requirements

- Node.js and npm

## Run Locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in the terminal. If the default port is in use, Vite selects another available port.

## Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
```

## Project Structure

```text
public/
  images/              Brand logo and product photos
src/
  components/           Page sections and reusable UI
  data/products.js      Product catalog and categories
  App.jsx               Theme, category, and selected-product state
  index.css             Tailwind theme and custom animations
  main.jsx              React entry point
index.html              Document metadata and app root
```

Edit `src/data/products.js` to update product names, categories, descriptions, prices, ratings, or image paths. Put local image files in `public/images/` and reference them with paths such as `/images/Watermelon-Juice.jpg`.

## Images and Network Use

The Pazha Saaru logo and product catalog photos are stored locally in `public/images/`. The hero, About section, and testimonial profile photos use Unsplash URLs and require an internet connection to load.

## Notes

The contact form currently shows a confirmation in the browser; it does not send messages to a server. The product detail view displays item information but is not connected to a shopping cart or checkout service.

## Production Build

Run `npm run build` and deploy the generated `dist/` directory. For Vercel, Netlify, or similar static hosting, use `npm run build` as the build command and `dist` as the output directory.