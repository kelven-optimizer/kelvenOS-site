import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Gradient Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-accent-violet/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SocialProof />
        <Features />
        <InteractiveDemo />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
