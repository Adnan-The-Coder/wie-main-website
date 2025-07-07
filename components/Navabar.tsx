import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "./ui/Button";

const Navbar = () => {
  return (
    <header className="h-[80px] w-full border-b-[0.5px] border-white/15 bg-gradient-to-r from-blue-900 to-purple-900 p-4 md:px-20">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center justify-normal">
          <Image src="/wie-logo.png" width={300} height={300} alt="IEEE WIE Logo" className="mr-3 w-[50px]" />
          <div className="flex flex-col">
            <p className="text-xl font-bold text-white">IEEE WIE</p>
            <p className="hidden text-xs text-blue-200 md:block">Women in Engineering</p>
          </div>
        </Link>
        <div className="flex items-center justify-normal space-x-6">
          <div className="hidden items-center justify-normal space-x-6 md:flex">
            <Link 
              href="/about" 
              className="font-medium text-white transition-colors duration-200 hover:text-blue-200"
            >
              About WIE
            </Link>
            <Link 
              href="/events" 
              className="font-medium text-white transition-colors duration-200 hover:text-blue-200"
            >
              Events
            </Link>
            <Link 
              href="/mentorship" 
              className="font-medium text-white transition-colors duration-200 hover:text-blue-200"
            >
              Mentorship
            </Link>
            <Link 
              href="/resources" 
              className="font-medium text-white transition-colors duration-200 hover:text-blue-200"
            >
              Resources
            </Link>
            <Link 
              href="/awards" 
              className="font-medium text-white transition-colors duration-200 hover:text-blue-200"
            >
              Awards
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 text-white">
              <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <Link href="/join">
            <Button title="Join WIE" className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-purple-700" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;