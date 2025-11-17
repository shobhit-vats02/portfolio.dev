# Shobhit Vats - Portfolio Website

A futuristic, premium portfolio website built with React, GSAP, Locomotive Scroll, and featuring glassmorphism design with neon glows.

## 🚀 Features

- **Cinematic Preloader** with progress bar animation
- **GSAP Animations** - Smooth, professional animations throughout
- **ScrollTrigger** - Scroll-based animation triggers
- **Glassmorphism Design** - Modern glass effect with neon glows
- **Horizontal Scrolling Projects** - Desktop horizontal scroll, mobile carousel
- **Responsive Design** - Works beautifully on all devices
- **Contact Form** - Interactive form with validation
- **Floating Particles** - Ambient glow orbs for atmosphere

## 🎨 Design System

The design uses a futuristic dark theme with:
- **Colors**: Deep navy/black backgrounds with neon blues, violets, and cyan
- **Effects**: Glassmorphism, neon glows, blur effects
- **Typography**: Inter font family
- **Icons**: Lucide React icons

## 🛠️ Technologies

- React 18
- TypeScript
- GSAP (GreenSock Animation Platform)
- Locomotive Scroll
- Tailwind CSS
- Shadcn/ui Components
- Vite

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎭 Adding a Spline 3D Scene

To add a real Spline 3D scene:

1. Create your 3D scene at [spline.design](https://spline.design)
2. Export your scene and get the embed URL
3. Update `src/components/Hero.tsx`:

```tsx
// Replace the placeholder div with:
import Spline from '@splinetool/react-spline';

<Spline scene="YOUR_SPLINE_SCENE_URL_HERE" />
```

## 🎯 Customization

### Update Personal Information

Edit the following components:
- `src/components/Hero.tsx` - Name and title
- `src/components/About.tsx` - Bio and skills
- `src/components/Projects.tsx` - Project details
- `src/components/Contact.tsx` - Contact information

### Change Colors

Update `src/index.css` to modify the color scheme:
```css
--neon-blue: 199 100% 50%;
--neon-violet: 271 81% 56%;
--neon-cyan: 186 100% 50%;
```

### Add More Projects

Edit `src/components/Projects.tsx` and add items to the `projects` array.

## 📱 Responsive Behavior

- **Desktop**: Horizontal scrolling projects, full glassmorphic effects
- **Tablet**: Stacked layout, touch-friendly navigation
- **Mobile**: Vertical project cards, hamburger menu ready

## 🌟 Animation Details

All animations use GSAP for smooth, performant results:
- Fade in/out with blur effects
- Stagger animations for lists
- Infinite floating orbs
- Scroll-triggered reveals
- Hover scale transformations

## 📄 License

All rights reserved - Shobhit Vats © 2025

## 🔗 Links

- GitHub: [github.com/shobhit-vats02](https://github.com/shobhit-vats02)
- LinkedIn: [linkedin.com/in/shobhit-vats-babb55310](https://www.linkedin.com/in/shobhit-vats-babb55310/)
- Email: shobhitvats020@gmail.com

---

Built with ❤️ using Lovable
