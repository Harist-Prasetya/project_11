"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollSequence from "@/components/ScrollSequence";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent-purple/30 selection:text-white">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Loading Screen Overlay */}
      <LoadingScreen progress={loadProgress} isLoaded={isLoaded} />

      {/* Main Content */}
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1.5s ease-in-out",
          pointerEvents: isLoaded ? "auto" : "none",
        }}
      >
        <Navbar />

        {/* Scrollytelling Section */}
        <ScrollSequence
          onLoadProgress={setLoadProgress}
          onLoadComplete={() => setIsLoaded(true)}
        />

        <Footer />
      </div>
    </main>
  );
}
