# Modern Landing Page Components - Refactored

A clean, minimal landing page built with React and Tailwind CSS, inspired by Stripe/Linear design principles. **Refactored for optimal spacing, alignment, and visual hierarchy.**

## ✅ Key Improvements

- **Compact Design**: Reduced excessive padding (py-16 instead of py-20/py-32)
- **Better Spacing**: Consistent gap-8/gap-16, intentional whitespace
- **Improved Hierarchy**: Dominant headlines, balanced layouts
- **Fixed Image Issues**: Proper aspect ratios, no overflow/cropping
- **Responsive Grid**: Clean stacking on mobile
- **Minimal Aesthetics**: Subtle borders, hover effects, no visual noise

## Components

### Hero.jsx - Redesigned with Perfect Responsive Height
- **Height System**: Dynamic viewport-based sizing with dvh support
- **Mobile**: `min-h-[85dvh]` (85% of dynamic viewport height)
- **Desktop**: `min-h-[95dvh]` (95% of dynamic viewport height)
- **Viewport Fix**: CSS custom properties with dvh fallback for mobile browsers
- **Layout**: 2-column grid (text left, image right) with vertical centering
- **Container**: `max-w-6xl mx-auto px-6` for optimal readability
- **Image**: Max-width 400-450px, right-aligned (`lg:justify-end`), subtle glow
- **Typography**: Responsive headline (`text-4xl` to `xl:text-7xl`), gradient on key phrase
- **Mobile Stack**: Image above text (`order-1 lg:order-2`), centered content
- **UX**: Headline and CTAs visible above fold, content never cut off

### Team.jsx - Fixed Card Layout
- **Order**: Now appears BEFORE metrics section
- **Grid**: Responsive (1→2→3 columns), consistent card heights
- **Images**: Fixed h-56 height, object-cover, no overflow, perfect fit
- **Cards**: Minimal design, border-white/10, subtle hover (scale-1.02)
- **Content**: Name, muted role, description with proper spacing

### Metrics.jsx - Simplified Design
- **Layout**: 3 centered cards, minimal styling
- **Design**: Clean borders, no heavy backgrounds or gradients
- **Typography**: Large numbers, readable labels
- **Spacing**: Consistent with overall design system

### Landing.jsx - Main Page Component
- **Structure**: Hero → Team → Metrics (optimal UX flow)
- **Container**: max-w-6xl for better readability
- **Background**: Consistent black theme

## Design Principles Applied

- **Visual Hierarchy**: Headlines dominate, content flows naturally
- **Whitespace**: Intentional spacing, no random padding
- **Alignment**: Everything aligned to grid, right-aligned hero image
- **Consistency**: Same spacing units, border styles, hover effects
- **Minimalism**: No unnecessary elements, clean aesthetics
- **Balance**: Text and image properly weighted in hero section

## Usage

```jsx
import { Landing } from './components/Landing';

function App() {
  return <Landing />;
}
```

## Responsive Behavior

- **Desktop**: 2-column hero, 3-column team grid, 3-column metrics
- **Tablet**: 2-column team grid, stacked hero elements
- **Mobile**: Single column everywhere, centered content

## File Structure

```
app/components/
├── HeroNew.jsx          # Redesigned hero section
├── TeamNew.jsx          # Fixed team section
├── Metrics.jsx          # Simplified metrics
├── Landing.jsx          # Main page component
└── LANDING_COMPONENTS_README.md
```

## Technical Details

- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS only
- **Animations**: Framer Motion for smooth interactions
- **Responsive**: Mobile-first design
- **Performance**: Optimized builds, lazy loading ready

### Team Members
Edit the `teamMembers` array in `Team.jsx`:

```jsx
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO / Founder',
    description: 'Brief description...',
    image: '/path/to/image.jpg'
  }
];
```

### Metrics
Edit the `metrics` array in `Metrics.jsx`:

```jsx
const metrics = [
  {
    value: '80%',
    label: 'Conversion rate'
  }
];
```

### Hero Image
Replace the placeholder in `Hero.jsx` with your actual hero image:

```jsx
<img
  src="/hero.png"
  alt="Your hero image"
  className="w-full h-auto rounded-2xl shadow-2xl"
/>
```

## Design Principles

- **Clean & Minimal**: No visual noise, focused on content
- **Proper Hierarchy**: Clear information architecture
- **Responsive**: Works on all screen sizes
- **Consistent Spacing**: Uses gap-6/gap-8 throughout
- **Neutral Background**: Dark theme with subtle accents
- **Gradient Text**: For emphasis and branding

## Dependencies

- React
- Tailwind CSS
- Framer Motion (for animations)