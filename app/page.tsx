"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Globe, MessageSquare, ArrowUpRight } from "lucide-react";
// import { img } from "/public/myprofile.jpeg";

// GSAP Plugin Register කිරීම
gsap.registerPlugin(useGSAP);

export default function ConnectPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgParticlesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Background Particles Animation
    const particles = bgParticlesRef.current?.children;
    if (particles) {
      gsap.to(particles, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });
    }

    // 2. Main Card Reveal (Scale & Fade)
    gsap.from(".main-card", {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 1.2,
      ease: "power4.out",
    });

    // 3. Profile Image & Text Sequence
    gsap.from(".profile-anim", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.4,
      stagger: 0.2,
      ease: "power3.out",
    });

    // 4. Social Links Stagger Animation
   gsap.fromTo(".social-link", 
      { opacity: 0, x: -30 }, // පටන් ගන්නා අවස්ථාව
      { 
        opacity: 1,           // අවසන් අවස්ථාව (අනිවාර්යයෙන්ම 1 වෙන්න කියලා බල කරනවා)
        x: 0, 
        duration: 0.6,
        delay: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#060913] text-gray-200 flex items-center justify-center p-4 overflow-hidden font-sans">
      
      {/* --- PREMIUM DIGITAL BACKGROUND --- */}
      <div ref={bgParticlesRef} className="absolute inset-0 pointer-events-none opacity-40">
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        {/* Animated Tech Particles */}
        <div className="absolute top-12 left-10 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></div>
        <div className="absolute bottom-1/3 left-16 w-2.5 h-2.5 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]"></div>
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_12px_#34d399]"></div>
      </div>

      {/* --- MAIN CARD --- */}
      <div className="main-card relative max-w-md w-full bg-[#0d1527]/80 backdrop-blur-xl rounded-3xl border border-gray-800/60 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
        
        {/* Neon Border Effect */}
        <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-cyan-500/20 to-blue-500/20 pointer-events-none opacity-50"></div>

        {/* Profile Section */}
        <div className="profile-anim relative w-28 h-28 mx-auto mb-5 rounded-full p-0.75 bg-linear-to-tr from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_0_25px_rgba(34,211,238,0.25)]">
          <div className="relative w-full h-full rounded-full bg-[#0d1527] overflow-hidden">
            <Image
              src="/myimage.jpeg"
              alt="Sasindu"
              fill
              priority
              className="object-cover transform hover:scale-110 transition duration-500"
              unoptimized
            />
          </div>
        </div>

        <h1 className="profile-anim text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white via-gray-200 to-gray-400 tracking-wide">
          Sasindu Deshan
        </h1>
        <p className="profile-anim text-sm text-cyan-400 font-medium tracking-widest uppercase mt-1 mb-8">
          Full-Stack Developer
        </p>

        {/* --- INTERACTIVE SOCIAL LINKS --- */}
        <div className="space-y-4">
          
          {/* Portfolio */}
          <a href="https://my-newportfolio-five.vercel.app/" target="_blank" className="social-link group flex items-center justify-between w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5">
            <span className="flex items-center gap-4">
              <Globe className="w-5 h-5 animate-pulse" /> 
              <span>My Portfolio</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* GitHub */}
          <a href="https://github.com/deshan2" target="_blank" className="social-link group flex items-center justify-between w-full bg-[#111827]/90 hover:bg-[#16223f] border border-gray-800 hover:border-cyan-500/50 text-gray-200 font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:-translate-y-0.5">
            <span className="flex items-center gap-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <span>GitHub Profile</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/sasindu-deshan-39852b2b0/" target="_blank" className="social-link group flex items-center justify-between w-full bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 border border-[#0a66c2]/30 text-[#70b5ff] font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
            <span className="flex items-center gap-4">
              <svg className="w-5 h-5 fill-[#0a66c2]" viewBox="0 0 24 24">
                <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z"/>
              </svg>
              <span className="text-gray-200">LinkedIn Connect</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/94741117600" target="_blank" className="social-link group flex items-center justify-between w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#4ade80] font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
            <span className="flex items-center gap-4">
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
              <span class="text-gray-200">WhatsApp Me</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Facebook */}
          <a href="https://www.facebook.com/sasindudeshan560/" target="_blank" className="social-link group flex items-center justify-between w-full bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#4f9aff] font-medium py-3.5 px-6 rounded-2xl transition-all duration-300 hover:-translate-y-0.5">
            <span className="flex items-center gap-4">
              <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-gray-200">Facebook</span>
            </span>
            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

        </div>

        {/* Footer */}
        <div className="profile-anim mt-8 pt-4 border-t border-gray-800/50">
          <p className="text-xs text-gray-500 tracking-widest uppercase">Let&apos;s build the future.</p>
        </div>

      </div>
    </div>
  );
}