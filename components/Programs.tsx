/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import React from "react";
import { Users, Award, BookOpen, Calendar, Lightbulb, Globe, Heart, Trophy } from "lucide-react";

const programs = [
  {
    id: 1,
    name: "Mentorship Program",
    icon: <Users className="size-12 text-blue-400" />,
    description: "Connect with experienced professionals for career guidance and professional development.",
    glowColor: "shadow-blue-500/50",
    borderColor: "border-blue-500",
    textColor: "text-blue-400",
    bgColor: "bg-blue-900/30",
    href: "/mentorship",
    badge: "Connect & Grow"
  },
  {
    id: 2,
    name: "Scholarships & Awards",
    icon: <Award className="size-12 text-purple-400" />,
    description: "Access funding opportunities and recognition programs for women in engineering.",
    glowColor: "shadow-purple-500/50",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    bgColor: "bg-purple-900/30",
    href: "/scholarships",
    badge: "Financial Support"
  },
  {
    id: 3,
    name: "Professional Development",
    icon: <BookOpen className="size-12 text-green-400" />,
    description: "Enhance your skills with webinars, workshops, and certification programs.",
    glowColor: "shadow-green-500/50",
    borderColor: "border-green-500",
    textColor: "text-green-400",
    bgColor: "bg-green-900/30",
    href: "/professional-development",
    badge: "Skill Building"
  },
  {
    id: 4,
    name: "Events & Conferences",
    icon: <Calendar className="size-12 text-pink-400" />,
    description: "Join global conferences, networking events, and technical symposiums.",
    glowColor: "shadow-pink-500/50",
    borderColor: "border-pink-500",
    textColor: "text-pink-400",
    bgColor: "bg-pink-900/30",
    href: "/events",
    badge: "Network & Learn"
  },
  {
    id: 5,
    name: "Innovation Labs",
    icon: <Lightbulb className="size-12 text-yellow-400" />,
    description: "Collaborate on cutting-edge research and innovative engineering solutions.",
    glowColor: "shadow-yellow-500/50",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400",
    bgColor: "bg-yellow-900/30",
    href: "/innovation",
    badge: "Research & Create"
  },
  {
    id: 6,
    name: "Global Network",
    icon: <Globe className="size-12 text-indigo-400" />,
    description: "Connect with women engineers across 180+ countries worldwide.",
    glowColor: "shadow-indigo-500/50",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    bgColor: "bg-indigo-900/30",
    href: "/network",
    badge: "Global Community"
  },
  {
    id: 7,
    name: "Outreach & STEM",
    icon: <Heart className="size-12 text-red-400" />,
    description: "Inspire the next generation through educational outreach and STEM initiatives.",
    glowColor: "shadow-red-500/50",
    borderColor: "border-red-500",
    textColor: "text-red-400",
    bgColor: "bg-red-900/30",
    href: "/outreach",
    badge: "Inspire Others"
  },
  {
    id: 8,
    name: "Leadership Development",
    icon: <Trophy className="size-12 text-orange-400" />,
    description: "Build leadership skills through specialized programs and executive training.",
    glowColor: "shadow-orange-500/50",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    bgColor: "bg-orange-900/30",
    href: "/leadership",
    badge: "Lead & Excel"
  },
];

const Programs = () => {
  return (
    <section className="relative my-8 mt-24 flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20 px-4 py-20 md:px-12">
      {/* Background Elements */}
      <div className="pointer-events-none absolute left-0 top-0 size-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 size-full bg-[radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent_50%)]"></div>
      {/* Heading */}
      <div className="relative z-10 mb-16 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-blue-300">Empowering Women Engineers</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Programs & Initiatives
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70">
          Discover comprehensive programs designed to support, inspire, and advance women in engineering careers
        </p>
      </div>
      {/* Program Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programs.map((program) => (
          <div
            key={program.id}
            onClick={() => {
              window.location.href = program.href;
            }}
            className={`group flex flex-col rounded-2xl border bg-white/5 px-6 py-8 
                      backdrop-blur-sm ${program.borderColor} cursor-pointer border-opacity-30 transition-all 
                      duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-2xl
                      ${program.glowColor} relative overflow-hidden hover:border-opacity-60 hover:shadow-xl`}
          >
            {/* Hover Background Effect */}
            <div className={`absolute inset-0 ${program.bgColor} rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}></div>
            {/* Badge */}
            <div className="relative z-10 mb-4">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${program.textColor} 
                              border border-current border-opacity-30 bg-white/10`}>
                {program.badge}
              </span>
            </div>
            {/* Icon Container */}
            <div className={`relative z-10 ${program.bgColor} mb-6 rounded-xl p-4 transition-all duration-500 
                           group-hover:scale-110 ${program.glowColor} w-fit`}>
              {program.icon}
            </div>
            {/* Program Name and Description */}
            <div className="z-10 grow text-left">
              <h3 className={`text-xl font-bold ${program.textColor} mb-3 transition-all duration-300 
                            group-hover:text-white`}>
                {program.name}
              </h3>
              <p className="text-sm leading-relaxed text-gray-300 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                {program.description}
              </p>
            </div>
            {/* Hover Indicator */}
            <div className="z-10 mt-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className={`flex items-center ${program.textColor} text-sm font-medium`}>
                <span className="mr-2">Learn More</span>
                <div className="size-4 rotate-45 border-r-2 border-t-2 border-current transition-transform group-hover:translate-x-1"></div>
              </div>
            </div>
            {/* Subtle glow effect */}
            <div className={`absolute inset-0 rounded-2xl ${program.glowColor} opacity-0 transition-opacity duration-500 group-hover:opacity-20`}></div>
          </div>
        ))}
      </div>
      {/* Call to Action */}
      <div className="relative z-10 mt-16 text-center">
        <div className="inline-flex flex-col gap-4 sm:flex-row">
          <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl">
            Join IEEE WIE Today
          </button>
          <button className="rounded-full border-2 border-white/30 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;