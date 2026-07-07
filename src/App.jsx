import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarketShift from './components/MarketShift'
import DIYTrap from './components/DIYTrap'
import Testimonials from './components/Testimonials'
import WhatYouGet from './components/WhatYouGet'
import RecurringRevenue from './components/RecurringRevenue'
import HowItWorks from './components/HowItWorks'
import Outcomes from './components/Outcomes'
import Comparison from './components/Comparison'
import RevenueExpansion from './components/RevenueExpansion'
import Infrastructure from './components/Infrastructure'
import ProviderStories from './components/ProviderStories'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'
import DashboardPreview from './components/Dashboard'
import CountdownBanner from './components/CountdownBanner'
import FoneAiDemoForm from './components/pop'
import AOS from "aos";
import "aos/dist/aos.css";
import ProofTicker from "./components/ProofTicker";


function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
}, []);

  useEffect(() => {
    if (!isDemoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") closeDemo();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDemoOpen]);

  return (
    <div className="min-h-screen bg-white text-ink-900 overflow-x-hidden">
  <CountdownBanner onCtaClick={openDemo} />

  <div className="pt-[90px]">
    <Navbar />

    <main>
      <Hero onCtaClick={openDemo} />
      <DashboardPreview />
      <MarketShift onCtaClick={openDemo} />
      <DIYTrap onCtaClick={openDemo} />
      <Testimonials onCtaClick={openDemo} />
      <WhatYouGet onCtaClick={openDemo} />
      <RecurringRevenue onCtaClick={openDemo} />
      <HowItWorks />
      <Outcomes onCtaClick={openDemo} />
      <Comparison onCtaClick={openDemo} />
      <RevenueExpansion onCtaClick={openDemo} />
      <Infrastructure />
     <ProofTicker/>  
      <Footer />
    </main>
  </div>

 {isDemoOpen && (
  <div
    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 px-4 py-6"
    role="dialog"
    aria-modal="true"
    aria-label="Schedule a live demo"
    onClick={closeDemo}
  >
    <div
      className="relative max-h-[calc(100vh-48px)] w-full max-w-5xl overflow-y-auto rounded-3xl bg-[#08050d] shadow-2xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-3xl leading-none text-white transition hover:bg-white/10"
        aria-label="Close demo form"
        onClick={closeDemo}
      >
        &times;
      </button>

      <FoneAiDemoForm onClose={closeDemo} />
    </div>
  </div>
)}

</div>
  )
}

export default App
