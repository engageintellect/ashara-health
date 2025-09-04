# Ashara Health & Wellness

A modern, responsive website for Ashara Health & Wellness - a naturopathic medicine practice in Laguna Beach, California. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring glass morphism design, smooth animations, and a premium medical aesthetic.

## 🌟 Features

### 🎨 Modern Design

- **Glass morphism UI** with backdrop blur effects
- **Premium medical aesthetic** with professional spacing and typography
- **Dark/light theme support** with seamless transitions
- **Responsive design** optimized for all devices
- **Smooth animations** powered by Framer Motion

### 🏥 Healthcare-Focused Sections

- **Hero section** with video background and compelling messaging
- **Services showcase** with detailed descriptions of 12+ treatments
- **Conditions treated** with targeted, solution-focused descriptions
- **Membership plans** with modern pricing cards and "Most Popular" badges
- **Interactive contact form** with validation and error handling
- **Clinic information** with integrated map and business hours

### ⚡ Performance & UX

- **Scroll reveal animations** for engaging user experience
- **Optimized images and assets** for fast loading
- **SEO-friendly structure** with proper meta tags
- **Accessibility features** with proper ARIA labels and keyboard navigation
- **Mobile-first responsive design**

### 🛠️ Technical Features

- **TypeScript** for type safety and better development experience
- **Component-based architecture** with reusable UI components
- **Custom hooks and utilities** for enhanced functionality
- **Interactive map integration** with Leaflet
- **Form validation** with real-time feedback
- **API routes** for contact form submission

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Iconify React
- **Maps:** Leaflet & React Leaflet
- **UI Components:** Radix UI primitives
- **Validation:** Zod
- **Package Manager:** pnpm

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ashara-health.git
   cd ashara-health
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ashara-health/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Conditions.tsx
│   │   ├── Memberships.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Reusable UI components
│   └── CustomMap.tsx      # Interactive map component
├── content/               # Content configuration
│   └── site.json          # Site data and configuration
├── lib/                   # Utilities and helpers
└── public/                # Static assets
```

## 🎨 Design System

### Colors

- **Primary:** Teal (600-700 range)
- **Neutral:** Stone (50-900 range)
- **Accent:** Amber for pricing
- **Status:** Green/Red for form feedback

### Typography

- **Headings:** Bold, tracking-tight
- **Body:** Medium weight, relaxed leading
- **Medical-grade spacing** with consistent rhythm

### Components

- **Glass morphism cards** with backdrop blur
- **Rounded corners** (xl to 3xl)
- **Layered shadows** with hover effects
- **Smooth transitions** (300-500ms duration)

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px
- **Large:** > 1280px

## 🔧 Configuration

### Site Content

Edit `content/site.json` to update:

- Business information (address, phone, email)
- Services and conditions
- Membership plans
- Business hours
- Navigation items

### Styling

- **Tailwind config:** `tailwind.config.ts`
- **Global styles:** `app/globals.css`
- **Component styles:** Inline with Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Build

```bash
pnpm build
pnpm start
```

## 🧪 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Adding New Sections

1. Create component in `components/sections/`
2. Add to main page in `app/page.tsx`
3. Update navigation in `site.json` if needed

### Customizing Animations

- Modify `framer-motion` variants in components
- Adjust `ScrollReveal` delays and directions
- Update transition durations in Tailwind classes

## 🎯 Key Features Implementation

### Glass Morphism Cards

```tsx
className =
  "bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-stone-200/50";
```

### Hover Animations

```tsx
className = "hover:shadow-2xl hover:-translate-y-2 transition-all duration-500";
```

### Responsive Grid

```tsx
className = "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";
```

## 📞 Contact & Support

- **Website:** [ashara.health](https://ashara.health)
- **Email:** hello@ashara.health
- **Phone:** (949) 464-4770
- **Address:** 32406 S Coast Hwy, Laguna Beach, CA

## 📄 License

This project is proprietary and confidential. All rights reserved by Ashara Health & Wellness.

---

Built with ❤️ for holistic healthcare and modern web experiences.
