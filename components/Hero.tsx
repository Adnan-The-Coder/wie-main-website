"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Volume2, VolumeX, ArrowRight, Users, Award, BookOpen } from "lucide-react";

import Button from "./ui/Button";

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Loading overlay */}
      <div 
        className={`absolute inset-0 z-30 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 transition-opacity duration-1000 ${
          isLoaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <div className="mb-4 animate-pulse bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            IEEE WIE
          </div>
          <div className="text-sm text-white/70 md:text-lg">Women in Engineering</div>
        </div>
      </div>
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 size-full object-cover"
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/hero_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
      {/* Sound control button */}
      <button 
        onClick={toggleMute}
        className={`absolute right-4 top-4 z-20 rounded-full p-2 transition-all duration-300 md:right-6 md:top-6 md:p-3 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${
          isMuted 
            ? "bg-white/10 hover:bg-white/20" 
            : "bg-blue-500/50 shadow-lg shadow-blue-500/30 hover:bg-blue-500/70"
        }`}
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="text-white" size={18} />
        ) : (
          <Volume2 className="text-white" size={18} />
        )}
      </button>
      {/* Main content */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}>
        <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-20">
          
          {/* Floating geometric elements */}
          <div className="absolute left-10 top-20 hidden size-16 rotate-45 animate-pulse border-2 border-blue-300/30 md:block"></div>
          <div className="absolute right-20 top-32 hidden size-12 animate-bounce rounded-full border-2 border-purple-300/30 lg:block"></div>
          <div className="hexagon absolute bottom-40 left-20 hidden size-20 animate-pulse border-2 border-pink-300/30 lg:block"></div>
          {/* Main content container */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex animate-[fadeIn_1s_ease-in] items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <Award className="mr-2 size-4 text-yellow-400" />
              <span className="text-sm font-medium text-white/90">Empowering Women in Technology</span>
            </div>
            {/* Main heading */}
            <h1 className="mb-6 animate-[fadeIn_1.2s_ease-in] text-center text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-8xl">
              <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                IEEE WIE
              </span>
            </h1>
            {/* Subtitle */}
            <h2 className="mb-4 animate-[fadeIn_1.4s_ease-in] text-xl font-semibold text-blue-100 md:text-2xl lg:text-3xl">
              Women in Engineering
            </h2>
            {/* Description */}
            <p className="mx-auto mt-6 max-w-4xl animate-[fadeIn_1.6s_ease-in] px-4 text-base leading-relaxed text-white/80 md:text-lg lg:text-xl">
              Join a global network of women engineers driving innovation, leadership, and positive change in technology. 
              Connect with professionals, access mentorship, and advance your career in engineering.
            </p>
            {/* Stats */}
            <div className="mb-10 mt-8 flex animate-[fadeIn_1.8s_ease-in] flex-wrap justify-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-300 md:text-3xl">90K+</div>
                <div className="text-sm text-white/70 md:text-base">Members Worldwide</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 md:text-3xl">180+</div>
                <div className="text-sm text-white/70 md:text-base">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-300 md:text-3xl">500+</div>
                <div className="text-sm text-white/70 md:text-base">Student Groups</div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="mt-8 flex animate-[fadeIn_2s_ease-in] flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/join">
                <Button 
                  title="Join IEEE WIE" 
                  className="flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl"
                />
              </Link>
              <Link href="/events">
                <button className="flex items-center rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10">
                  Explore Events
                  <ArrowRight className="ml-2 size-4" />
                </button>
              </Link>
            </div>
            {/* Quick links */}
            <div className="mt-12 flex animate-[fadeIn_2.2s_ease-in] flex-wrap justify-center gap-6">
              <Link href="/mentorship" className="group flex items-center text-white/80 transition-colors hover:text-white">
                <Users className="mr-2 size-4 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">Mentorship</span>
              </Link>
              <Link href="/scholarships" className="group flex items-center text-white/80 transition-colors hover:text-white">
                <Award className="mr-2 size-4 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">Scholarships</span>
              </Link>
              <Link href="/resources" className="group flex items-center text-white/80 transition-colors hover:text-white">
                <BookOpen className="mr-2 size-4 transition-transform group-hover:scale-110" />
                <span className="text-sm font-medium">Resources</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white/60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;