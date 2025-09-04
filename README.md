# Ashara Health & Wellness

A modern, responsive website for Ashara Health & Wellness - a naturopathic medicine practice in Laguna Beach, California. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring glass morphism design, smooth animations, interactive appointment booking, and a premium medical aesthetic.

## 🌟 Features

### 🎨 Modern Design

- **Glass morphism UI** with backdrop blur effects and gradient overlays
- **Premium medical aesthetic** with professional spacing and typography
- **Dark/light theme support** with seamless transitions and enhanced gradients
- **Responsive design** optimized for all devices with mobile-first approach
- **Smooth animations** powered by Framer Motion with scroll-triggered reveals
- **Interactive hover effects** with enhanced shadows and transforms

### 🏥 Healthcare-Focused Sections

- **Hero section** with animated video background and compelling messaging
- **Services showcase** with detailed descriptions of 12+ treatments and medical icons
- **Conditions treated** with targeted, solution-focused descriptions and iconography
- **Membership plans** with modern pricing cards, glass morphism, and "Most Popular" badges
- **Interactive appointment picker** with calendar selection and time slot booking
- **Contact form** with comprehensive validation, phone number field, and real-time feedback
- **Clinic information** with integrated map and business hours

### ⚡ Performance & UX

- **Scroll reveal animations** for engaging user experience with staggered entrances
- **Mobile-responsive appointment booking** with touch-friendly interactions
- **Sticky modal headers** ensuring close buttons remain accessible
- **Click-outside-to-close** functionality for intuitive modal interactions
- **Optimized images and assets** for fast loading
- **SEO-friendly structure** with proper meta tags
- **Accessibility features** with proper ARIA labels and keyboard navigation

### 🛠️ Technical Features

- **TypeScript** for type safety and better development experience
- **Component-based architecture** with reusable UI components
- **Custom hooks and utilities** for enhanced functionality
- **Interactive map integration** with Leaflet
- **Form validation** with Zod schema validation and real-time feedback
- **API routes** for contact form submission and theme management
- **Appointment booking system** with mock availability and time slot management

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Iconify React (Material Design Icons)
- **Maps:** Leaflet & React Leaflet
- **UI Components:** Radix UI primitives (shadcn/ui)
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
│   │   ├── contact/       # Contact form submission
│   │   └── theme/         # Theme management
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of service page
│   ├── globals.css        # Global styles with smooth scrolling
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Home page with all sections
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Animated hero with video background
│   │   ├── Services.tsx   # Healthcare services showcase
│   │   ├── Conditions.tsx # Medical conditions with icons
│   │   ├── Memberships.tsx # Pricing plans with glass morphism
│   │   ├── Contact.tsx    # Contact form with validation
│   │   ├── Vision.tsx     # Mission and vision statement
│   │   ├── Approach.tsx   # Treatment approach
│   │   └── Clinic.tsx     # Clinic info and map
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx     # Custom button component
│   │   ├── card.tsx       # Card component variants
│   │   └── input.tsx      # Form input components
│   ├── AppointmentPicker.tsx # Interactive booking calendar
│   ├── ScrollReveal.tsx   # Scroll-triggered animations
│   ├── ThemeToggle.tsx    # Dark/light theme switcher
│   └── Navbar.tsx         # Responsive navigation
├── content/               # Content configuration
│   └── site.json          # Site data and configuration
├── lib/                   # Utilities and helpers
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Design System

### Colors

- **Primary:** Teal (#0f3d36, #96c3b0) - Medical trust and calm
- **Neutral:** Stone (50-950 range) - Professional foundation
- **Accent:** Amber for pricing highlights
- **Status:** Green/Red for form feedback and validation

### Typography

- **Headings:** Bold, tracking-tight with responsive sizing
- **Body:** Medium weight, relaxed leading for readability
- **Medical-grade spacing** with consistent rhythm
- **Gradient text effects** for emphasis and branding

### Components

- **Glass morphism cards** with backdrop blur and subtle borders
- **Enhanced hover effects** with shadows and transforms
- **Rounded corners** (xl to 3xl) for modern aesthetic
- **Smooth transitions** (200-500ms duration) for premium feel
- **Teal accent colors** throughout for brand consistency

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 640px - Optimized touch interactions
- **Tablet:** 640px - 1024px - Balanced layout
- **Desktop:** > 1024px - Full feature set
- **Large:** > 1280px - Enhanced spacing

### Mobile Optimizations

- **Appointment picker** stacks vertically with touch-friendly buttons
- **Reduced padding** for maximum screen utilization
- **Sticky headers** maintain accessibility on scroll
- **Responsive text sizing** and icon scaling
- **Mobile-first CSS** approach throughout

## 🔧 Configuration

### Site Content

Edit `content/site.json` to update:

- Business information (address, phone, email)
- Services and conditions with descriptions
- Membership plans and pricing
- Business hours and contact details
- Navigation items and social links

### Styling Customization

- **Tailwind config:** `tailwind.config.ts` - Custom colors and spacing
- **Global styles:** `app/globals.css` - Smooth scrolling and base styles
- **Component styles:** Inline with Tailwind classes for maintainability

### Animation Settings

- **Framer Motion variants** in individual components
- **ScrollReveal delays** and trigger points
- **Transition durations** via Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push
4. Environment variables configured in Vercel dashboard

### Manual Build

```bash
pnpm build
pnpm start
```

## 🧪 Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build optimized production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

### Key Development Features

- **TypeScript strict mode** for type safety
- **Component composition** with reusable patterns
- **Custom hooks** for state management
- **API route handlers** for form processing
- **Responsive design utilities** with Tailwind

## 🎯 Key Features Implementation

### Glass Morphism Effects

```tsx
className =
  "bg-white/70 dark:bg-stone-900/70 backdrop-blur-sm border border-teal-800/20 hover:border-teal-800/40";
```

### Scroll Animations

```tsx
<ScrollReveal delay={0.2} direction="up">
  <motion.div variants={itemVariants}>{/* Content */}</motion.div>
</ScrollReveal>
```

### Responsive Appointment Picker

```tsx
className = "flex flex-col lg:flex-row w-full sm:max-w-4xl mx-2 sm:mx-0";
```

### Form Validation

```tsx
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

## 📞 Contact & Support

- **Website:** [ashara.health](https://ashara.health)
- **Email:** hello@ashara.health
- **Phone:** (949) 464-4770
- **Address:** 32406 S Coast Hwy, Laguna Beach, CA 92651

## 📄 License

This project is proprietary and confidential. All rights reserved by Ashara Health & Wellness.

---

Built with ❤️ for holistic healthcare and modern web experiences.
