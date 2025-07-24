import type { Route } from './+types/app';
import { Hero } from './components/hero/hero';

export function headers(_: Route.HeadersArgs) {
  return {
    'Cache-Control': 's-maxage=1, stale-while-revalidate=59'
  };
}

export function App() {
  return <Hero />;
}

export default App;
