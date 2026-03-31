"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen text-white selection:bg-accent-purple/30 selection:text-white">
      <div className="noise-overlay" />
      <Navbar />
      
      <div className="pt-40 pb-32 max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Text Area */}
          <div className="animate-fade-in lg:pr-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="accent-line w-8" />
              <span className="text-xs tracking-[0.3em] uppercase text-white/40 font-medium">
                Initiate
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] gradient-text-accent">
              Let's create <br/> something <br/> extraordinary.
            </h1>
            
            <p className="text-white/50 text-xl leading-relaxed mb-12 max-w-md">
              Whether you have a fully formed brief or just a fragment of an idea, 
              we're ready to visualize it.
            </p>

            <div className="flex flex-col gap-8 text-sm">
              <div>
                <h4 className="text-white/40 uppercase tracking-[0.15em] mb-2 font-semibold">New Business</h4>
                <a href="mailto:hello@elysium.studio" className="text-lg hover:text-accent-red transition-colors">hello@elysium.studio</a>
              </div>
              <div>
                <h4 className="text-white/40 uppercase tracking-[0.15em] mb-2 font-semibold">HQ</h4>
                <p className="text-lg text-white/80">Level 42, The Spire, Neo Tokyo</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass p-10 md:p-14 rounded-2xl border border-white/5 animate-slide-up relative overflow-hidden">
            {/* Glow under form */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-purple/20 blur-[100px] pointer-events-none rounded-full" />
            
            <form className="flex flex-col gap-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold ml-2">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-purple/50 focus:bg-white/10 transition-all font-light"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold ml-2">Email</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-purple/50 focus:bg-white/10 transition-all font-light"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-semibold ml-2">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent-purple/50 focus:bg-white/10 transition-all resize-none font-light"
                />
              </div>

              <button className="cta-button self-start mt-4">
                <span>Send Transmission</span>
              </button>
            </form>
          </div>

        </div>

      </div>
      
      <Footer />
    </main>
  );
}
