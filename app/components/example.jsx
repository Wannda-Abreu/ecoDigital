// Updated example showing the improved Landing page with perfect responsive height
import { Landing } from './Landing';

function App() {
  return (
    <div>
      <Landing />
      {/* Hero section now includes:
         - Perfect responsive height: 85dvh mobile, 95dvh desktop
         - Dynamic viewport units (dvh) with fallback
         - 2-column layout with proper vertical centering
         - Image right-aligned, max-width 400-450px
         - Mobile stack: image above text, centered
         - Content never cut off, always visible above fold
      */}
    </div>
  );
}

export default App;