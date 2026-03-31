"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function StudioPage() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent-purple/30 selection:text-white">
      <div className="noise-overlay" />
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Intro */}
        <div className="mb-32 animate-fade-in text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="accent-line w-8" />
            <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
              The Genesis
            </span>
            <span className="accent-line w-8" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-10 leading-[1.1] gradient-text">
            BORN IN SILICON, <br />
            FORGED IN LIGHT.
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            Elysium Studio was founded on a singular premise: the boundary between 
            the physical and digital worlds is obsolete. We are a collective of 
            directors, technical artists, and visual engineers building the 
            pinnacle of modern digital experiences.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="glass rounded-xl p-1 relative overflow-hidden aspect-square flex items-center justify-center group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute inset-0 z-10 opacity-[0.4] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-accent-red to-accent-purple blur-md opacity-60 mix-blend-screen animate-pulse-glow" />
          </div>
          
          <div className="flex flex-col gap-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl font-bold tracking-tight">Our Philosophy</h2>
            <p className="text-white/50 leading-relaxed text-lg">
              We reject the generic. Every material mapped, every light source placed, and 
              every frame rendered is an intentional pursuit of atmospheric perfection.
            </p>
            <p className="text-white/50 leading-relaxed text-lg">
              We don&apos;t believe in minimum viable products. We believe in maximum 
              impact experiences that leave users in awe.
            </p>
          </div>
        </div>

      </div>
      
      <Footer />
    </main>
  );
}
