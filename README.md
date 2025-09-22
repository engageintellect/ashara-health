# Ashara Health & Wellness

A modern, responsive website for Ashara Health & Wellness - a naturopathic medicine practice in Laguna Beach, California. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring glass morphism design, smooth animations, AI-powered chat assistance, and a premium medical aesthetic.

## 🌟 Features

### 🎨 Modern Design

- **Glass morphism UI** with backdrop blur effects
- **Premium medical aesthetic** with professional spacing and typography
- **Dark/light theme support** with seamless transitions
- **Responsive design** optimized for all devices
- **Smooth animations** powered by Framer Motion

### 🏥 Healthcare-Focused Sections

- **Hero section** with video background and compelling messaging
- **Vision & approach** highlighting naturopathic philosophy
- **Services showcase** with detailed descriptions of 12+ treatments
- **Meet our team** with professional photo cards, bios, and specialties
- **Conditions treated** with targeted, solution-focused descriptions
- **Patient testimonials** with authentic reviews and ratings
- **Membership plans** with modern pricing cards and "Most Popular" badges
- **FAQ section** with comprehensive answers to common questions
- **Interactive contact form** with validation and error handling
- **Clinic information** with custom Leaflet map integration and business hours

### ⚡ Performance & UX

- **Scroll reveal animations** for engaging user experience
- **Optimized images and assets** for fast loading
- **SEO-friendly structure** with proper meta tags
- **Accessibility features** with proper ARIA labels and keyboard navigation
- **Mobile-first responsive design**

### 🛠️ Technical Features

- **TypeScript** for type safety and better development experience
- **Component-based architecture** with reusable UI components
- **AI-powered chatbot** with OpenAI integration and healthcare context
- **Custom hooks and utilities** for enhanced functionality
- **Interactive map integration** with custom Leaflet implementation
- **Responsive chat interface** with desktop sidebar and mobile bottom sheet
- **Form validation** with real-time feedback
- **API routes** for contact form and chat functionality
- **Local storage** for chat history persistence
- **Dark mode support** throughout all components

### 🤖 AI Chat Assistant

- **Healthcare-focused AI** trained on naturopathic medicine context
- **Responsive design** with different layouts for mobile and desktop
- **Chat history persistence** using localStorage
- **Streaming responses** with typing indicators
- **Minimize/restore functionality** for better UX
- **Teal-themed interface** matching site branding

## 🚀 Tech Stack

### Core Framework
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Package Manager:** pnpm

### Styling & UI
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Iconify React + Lucide React
- **UI Components:** Radix UI primitives
- **Themes:** next-themes for dark mode

### AI & Chat
- **AI SDK:** Vercel AI SDK v5
- **AI Provider:** OpenAI GPT-4
- **Streaming:** Real-time chat responses

### Maps & Location
- **Maps:** Leaflet with custom markers
- **Map Types:** @types/leaflet for TypeScript

### Validation & Utils
- **Validation:** Zod
- **Class Utils:** clsx, tailwind-merge
- **Variants:** class-variance-authority

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

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   # OpenAI API Key for chat functionality
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ashara-health/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── chat/          # AI chat endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with ChatBot
│   └── page.tsx           # Home page with all sections
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero with video background
│   │   ├── Vision.tsx     # Vision & philosophy
│   │   ├── Conditions.tsx # Conditions treated
│   │   ├── Approach.tsx   # Treatment approach
│   │   ├── Services.tsx   # Services showcase
│   │   ├── Team.tsx       # Meet our team (NEW)
│   │   ├── Testimonials.tsx # Patient reviews
│   │   ├── Memberships.tsx # Pricing plans
│   │   ├── Faq.tsx        # FAQ section
│   │   ├── Clinic.tsx     # Clinic info with map
│   │   └── Contact.tsx    # Contact form
│   ├── ui/                # Reusable UI components
│   ├── ChatBot.tsx        # AI chat assistant (NEW)
│   ├── CustomMap.tsx      # Leaflet map with custom markers
│   └── ScrollReveal.tsx   # Animation wrapper
├── content/               # Content configuration
│   └── site.json          # Site data and configuration
├── lib/                   # Utilities and helpers
│   └── utils.ts           # Utility functions
└── public/                # Static assets
    └── images/            # Image assets
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

### Setting Up AI Chat

1. Get OpenAI API key from [OpenAI Platform](https://platform.openai.com)
2. Add to `.env.local` as `OPENAI_API_KEY`
3. Customize chat context in `app/api/chat/route.ts`
4. Modify chat UI in `components/ChatBot.tsx`

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

### AI Chat Integration

```tsx
// API Route (app/api/chat/route.ts)
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();
  
  const result = await streamText({
    model: openai('gpt-4'),
    messages,
    system: "You are a helpful assistant for Ashara Health & Wellness..."
  });
  
  return result.toDataStreamResponse();
}
```

### Custom Leaflet Map

```tsx
// Custom marker with theme colors
const customIcon = L.divIcon({
  html: `<svg>...</svg>`, // Custom SVG with teal branding
  iconSize: [48, 60],
  iconAnchor: [24, 60]
});
```

### Responsive Chat Interface

```tsx
// Desktop: Right sidebar, Mobile: Bottom sheet
const chatVariants = {
  desktop: { x: 0, width: "384px" },
  mobile: { y: 0, height: "80vh" }
};
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
