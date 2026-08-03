import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Differentials from './components/Differentials';
import CTA, { Footer } from './components/CTA';

function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-gray-100 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Differentials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
