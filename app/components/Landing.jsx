import { Hero } from './HeroNew';
import { Team } from './TeamNew';
import { Metrics } from './Metrics';

export function Landing() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Team />
      <Metrics />
    </div>
  );
}