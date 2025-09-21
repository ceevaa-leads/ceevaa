'use client'

import { useState, useEffect } from "react";
import { Navigation } from "@/app/sections/Navigation";
import { HeroSection } from "@/app/sections/Hero";
import { FeaturesSection } from "@/app/sections/Features";
import { HowItWorksSection } from "@/app/sections/HowItWorks";
import { WhoWeServeSection } from "@/app/sections/WhoWeServe";
import { ComparisonSection } from "@/app/sections/Comparison";
import { FinalCTASection } from "@/app/sections/FinalCTA";
import { Footer } from "@/app/sections/Footer";
import { Toaster } from "@/app/components";

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
    <>
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
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
}