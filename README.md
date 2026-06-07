# Executive Portfolio – Mr. Shivanantham Sritharan

Premium enterprise-grade educational leadership portfolio built with React 19, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, and React Three Fiber.

## Tech Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4** – Design system with glassmorphism tokens
- **Framer Motion** – Page & section animations
- **GSAP + ScrollTrigger** – Scroll-driven timeline animations
- **Lenis** – Smooth scroll
- **React Three Fiber** – 3D hero orb
- **Lucide Icons** – Iconography
- **Radix UI** – Accessible form primitives

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── effects/      # Global visual effects & loading screen
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # All page sections
│   ├── shared/       # Reusable UI (GlassCard, MagneticButton, etc.)
│   └── ui/           # Shadcn-style primitives
├── data/
│   └── content.ts    # All portfolio content
├── hooks/            # Custom hooks (count-up, magnetic, parallax)
└── lib/
    └── utils.ts      # Utility functions
```

## Sections

Hero · About · Experience Timeline · Education · Qualifications · Research · Publications · Conferences · ICT Innovations · Awards · Skills · Training · Gallery · Testimonials · Contact

## Customization

Edit `src/data/content.ts` to update portfolio content, statistics, and section data.

Replace the hero portrait placeholder in `src/components/sections/Hero.tsx` with an actual professional photo.

## License

Private – Executive Portfolio
