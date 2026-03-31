"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 bg-[#0a0a0a] border-t border-white/[0.05] pt-24 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-gradient-to-b from-accent-purple/20 to-transparent blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="footer-grid mb-24">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-red to-accent-purple flex items-center justify-center">
                <span className="text-white text-lg font-bold">E</span>
              </div>
              <span className="text-white/90 text-xl font-semibold tracking-tight">
                ELYSIUM STUDIO
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              We operate at the intersection of dimension, light, and motion to craft 
              experiences that define the future of digital interaction.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs uppercase mb-6 font-semibold">Studio</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/studio" className="text-white/40 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/40 hover:text-white transition-colors text-sm">Capabilities</Link></li>
              <li><Link href="/work" className="text-white/40 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/studio" className="text-white/40 hover:text-white transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs uppercase mb-6 font-semibold">Social</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Twitter</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Behance</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white tracking-[0.2em] text-xs uppercase mb-6 font-semibold">Say Hello</h4>
            <a href="mailto:hello@elysium.studio" className="text-white/60 hover:text-white hover:underline transition-all text-sm block mb-4">
              hello@elysium.studio
            </a>
            <p className="text-white/40 text-sm">
              Level 42, The Spire<br />
              Neo Tokyo, Sector 7
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.05] gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Elysium Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white transition-colors text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
