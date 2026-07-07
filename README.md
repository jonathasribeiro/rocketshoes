# RocketShoes

> Sneaker e-commerce showcase — modern product grid with cart UX and shadcn-style components.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=flat-square&logo=docker&logoColor=white)](https://docker.com)

---

## Overview

E-commerce landing page for a sneaker store, rebuilt with **React**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **shadcn-inspired** UI primitives.

Originally a Rocketseat bootcamp project (Redux Saga), now a clean senior frontend portfolio piece focused on product cards, badges, and conversion-oriented layout.

---

## Features

- Product grid with pricing and tags (New drop, Best seller, Limited)
- Hero section with value props (free shipping, ratings)
- Cart CTA in header
- Responsive layout (mobile → desktop)
- Emerald accent design system
- Docker production deployment

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Icons | lucide-react |
| Components | CVA (Button, Card, Badge) |

---

## Quick Start

```bash
git clone https://github.com/jonathasribeiro/rocketshoes.git
cd rocketshoes
npm install
npm run dev
```

### Docker

```bash
docker build -t rocketshoes .
docker run -p 8080:80 rocketshoes
```

---

## Project Structure

```
src/
├── components/ui/     # Button, Card, Badge
├── lib/utils.ts
├── App.tsx            # Store layout + product grid
└── index.css
```

---

## Author

**Jonathas Ribeiro** — [LinkedIn](https://www.linkedin.com/in/jonathasribeiroreal) · [GitHub](https://github.com/jonathasribeiro)
