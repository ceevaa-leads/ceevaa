'use client'

import { useState, useEffect } from "react";
import { Navigation } from "./components/ui/Navigation";
import { HeroSection } from "./components/ui/HeroSection";
import { FeaturesSection } from "./components/ui/FeaturesSection";
import { HowItWorksSection } from "./components/ui/HowItWorksSection";
import { WhoWeServeSection } from "./components/ui/WhoWeServeSection";
import { ComparisonSection } from "./components/ui/ComparisonSection";
import { FinalCTASection } from "./components/ui/FinalCTASection";
import { Footer } from "./components/ui/Footer";

import "./globals.css";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const [activeProcessTab, setActiveProcessTab] = useState(0);
  const [tabProgress, setTabProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance tabs with progress tracking
  useEffect(() => {
    if (isPaused) return;

    const TAB_DURATION = 10000; // 10 seconds per tab
    const PROGRESS_INTERVAL = 50; // Update progress every 50ms

    const progressTimer = setInterval(() => {
      setTabProgress((prevProgress) => {
        const newProgress =
          prevProgress +
          (PROGRESS_INTERVAL / TAB_DURATION) * 100;

        if (newProgress >= 100) {
          // Move to next tab
          setActiveProcessTab((prevTab) => (prevTab + 1) % 4);
          return 0; // Reset progress
        }

        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(progressTimer);
  }, [activeProcessTab, isPaused]);

  // Handle manual tab selection
  const handleTabClick = (tabIndex: number) => {
    setActiveProcessTab(tabIndex);
    setTabProgress(0); // Reset progress when manually clicked
    setIsPaused(true); // Pause auto-advance briefly

    // Resume auto-advance after 3 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection
        activeProcessTab={activeProcessTab}
        tabProgress={tabProgress}
        handleTabClick={handleTabClick}
      />

      <WhoWeServeSection
        activeServiceTab={activeServiceTab}
        setActiveServiceTab={setActiveServiceTab}
      />

      <ComparisonSection />

      <FinalCTASection />

      <Footer />
    </div>
  );
}