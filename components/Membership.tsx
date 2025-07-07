/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// import membershipImage from "@/public/assets/ieee_wie_community.jpg";

const Membership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative w-full overflow-hidden py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute left-0 top-0 size-full bg-gradient-to-b from-blue-900/5 to-transparent"></div>
      <div className="absolute right-1/4 top-1/4 size-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 size-96 rounded-full bg-purple-600/10 blur-3xl"></div>
      <div className="container mx-auto px-4">
        {/* Header Section - Centered */}
        <motion.div 
          className="mx-auto mb-16 max-w-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">Join Our Global Community</span>
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            IEEE WIE Membership
          </h1>
          <p className="text-lg leading-relaxed text-gray-300/90">
            Connect with 90,000+ women engineers worldwide and accelerate your career through mentorship, networking, and professional development opportunities
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.div>
        {/* Featured Image - Full Width Card */}
        <motion.div 
          className="relative z-10 mb-16 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="group relative overflow-hidden rounded-xl">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-500 opacity-30 blur transition duration-700 group-hover:opacity-70"></div>
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm">
              <Image
                src="/wie-logo.png" 
                width={300}
                height={300}
                alt="IEEE WIE Community Network"
                className="h-auto w-full object-cover transition-all duration-700 group-hover:scale-105"
                style={{ maxHeight: "500px", objectPosition: "center" }}
                priority
              />
              {/* Overlay with text */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10">
                <div className="w-full md:max-w-lg">
                  <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">Empowering Women Engineers Globally</h2>
                  <p className="text-sm text-gray-300 md:text-base">From students to executives, IEEE WIE provides the resources, connections, and support needed to thrive in engineering careers.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Three Column Benefits Section */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          {[
            {
              title: "Professional Network",
              description: "Connect with industry leaders, mentors, and peers across 180+ countries through exclusive events and online communities.",
              icon: (
                <svg className="size-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              )
            },
            {
              title: "Career Development",
              description: "Access scholarships, awards, leadership programs, and professional development resources to advance your engineering career.",
              icon: (
                <svg className="size-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              )
            },
            {
              title: "Global Impact",
              description: "Contribute to STEM outreach, inspire the next generation, and drive positive change in engineering and technology.",
              icon: (
                <svg className="size-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              )
            }
          ].map((benefit, i) => (
            <motion.div 
              key={i} 
              className="rounded-xl border border-white/5 bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-white md:text-2xl">{benefit.title}</h3>
              <p className="text-gray-300/90">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        {/* Statistics Section */}
        <motion.div 
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { number: "90K+", label: "Active Members" },
            { number: "180+", label: "Countries" },
            { number: "500+", label: "Student Groups" },
            { number: "50+", label: "Years of Impact" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                {stat.number}
              </div>
              <div className="text-sm text-gray-300 md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        {/* Bottom CTA Section */}
        <motion.div 
          className="flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-8 md:flex-row md:p-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="md:max-w-xl">
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">Ready to advance your engineering career?</h2>
            <p className="text-gray-300">Join IEEE WIE today and become part of a global community dedicated to empowering women in engineering and technology.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-300">
                <svg className="mr-2 size-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Global networking opportunities
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="mr-2 size-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Exclusive scholarships & awards
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <svg className="mr-2 size-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Professional development resources
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 to-purple-500 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300/50">
              <span className="relative rounded-md bg-black/30 px-6 py-3.5 transition-all duration-300 ease-in group-hover:bg-opacity-0">
                <span className="flex items-center gap-2 text-lg">
                  Join IEEE WIE
                  <svg className="size-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </span>
            </button>
            <button className="rounded-lg border-2 border-white/30 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;