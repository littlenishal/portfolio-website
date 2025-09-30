# Personal Website for Nishal Narechania

## Overview

This is a personal portfolio website for Nishal Narechania, a Senior Director of Product at Flex who specializes in 0-to-1 product development in fintech and proptech. The site showcases his work, experience, and availability for consulting projects. Built with a modern tech stack, the website emphasizes speed, bold design (neo-brutalist aesthetic), and clear value communication.

The application is a full-stack web application with a React frontend and Express backend, designed for fast loading and high conversion. It serves as both a professional portfolio and a lead generation tool for consulting opportunities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing:**
- React 18 with TypeScript for type safety
- Wouter for lightweight client-side routing (pages: Home, Work, About, 404)
- Vite as the build tool and development server

**UI & Styling:**
- Tailwind CSS with custom configuration for brutalist/neo-brutalist design system
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Custom CSS variables for theming with high contrast (black/white with electric blue accent #0066FF)
- Inter font family for modern typography
- Zero border radius (--radius: 0rem) for brutalist aesthetic

**State Management:**
- TanStack Query (React Query) v5 for server state and data fetching
- React Hook Form with Zod resolvers for form handling (if needed)
- Local component state using React hooks

**Design System:**
- Custom brutalist CSS classes (brutalist-border, brutalist-shadow, hero-text)
- Color scheme: Stark black (#000) and white (#FFF) with primary accent color
- Bold typography hierarchy (hero text: 72px mobile, 96px desktop)
- High contrast, scannable layouts optimized for mobile-first

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript
- ESM module system (type: "module")
- Custom logging middleware for API requests

**Development Setup:**
- Vite middleware mode for HMR during development
- Custom error overlay integration (@replit/vite-plugin-runtime-error-modal)
- Separate development and production build processes

**Data Layer:**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage pattern (IStorage) for easy swapping to database
- User schema defined but not actively used (minimal backend currently)

**API Structure:**
- Routes prefixed with `/api`
- Modular route registration system
- JSON request/response handling with body parsing
- Request timing and response logging

### Data Storage Solutions

**Current Implementation:**
- Memory-based storage (MemStorage) using JavaScript Maps
- User entity with id, username, password fields

**Database Configuration (Prepared but not active):**
- Drizzle ORM v0.39.1 configured for PostgreSQL
- Neon serverless PostgreSQL as the target database (@neondatabase/serverless)
- Database credentials loaded from environment variable (DATABASE_URL)
- Schema location: `./shared/schema.ts`
- Migrations directory: `./migrations`
- Zod schemas generated from Drizzle schemas for validation

**Design Decision:**
The application currently uses in-memory storage, suggesting the website is primarily static/content-focused. The database infrastructure is configured but dormant, allowing for future features like contact forms, newsletter signups, or project inquiries without architectural changes.

### External Dependencies

**UI Component Libraries:**
- @radix-ui/react-* (accordion, dialog, dropdown-menu, toast, tooltip, etc.) - Headless UI primitives
- class-variance-authority - Component variant management
- clsx & tailwind-merge - Utility class management
- cmdk - Command palette component
- embla-carousel-react - Carousel functionality
- lucide-react - Icon system

**Form & Validation:**
- react-hook-form - Form state management
- @hookform/resolvers - Form validation integration
- zod - Schema validation
- drizzle-zod - Drizzle to Zod schema conversion

**Utilities & Tooling:**
- date-fns - Date formatting and manipulation
- nanoid - Unique ID generation
- wouter - Lightweight routing

**Database & Backend:**
- @neondatabase/serverless - Neon PostgreSQL driver
- drizzle-orm - Type-safe ORM
- drizzle-kit - Database migrations
- connect-pg-simple - PostgreSQL session store (configured but unused)

**Development Tools:**
- @replit/vite-plugin-* - Replit-specific development enhancements
- tsx - TypeScript execution for development
- esbuild - Production bundling for server code

**Deployment:**
- Configured for Vercel deployment (per build instructions)
- Static asset serving from `dist/public`
- Production server runs compiled JavaScript from `dist/index.js`