
"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home as HomeIcon, Map, Briefcase, Calculator } from 'lucide-react';

const BottomNav: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/20 backdrop-blur-2xl border-t border-white/30 pb-safe-bottom pt-2 px-2 flex justify-around items-center z-50 h-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] ring-1 ring-white/20">
      <Link
        href="/"
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-all duration-300 ${isActive('/') ? 'text-blue-600 scale-105' : 'text-gray-500/80 hover:text-gray-700'}`}
      >
        <div className={`p-1 rounded-full ${isActive('/') ? 'bg-white/20 shadow-inner' : ''}`}>
           <HomeIcon size={22} strokeWidth={isActive('/') ? 2.5 : 2} />
        </div>
        <span className="text-[10px] font-medium tracking-wide">首頁</span>
      </Link>

      <Link
        href="/itinerary"
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-all duration-300 ${isActive('/itinerary') ? 'text-blue-600 scale-105' : 'text-gray-500/80 hover:text-gray-700'}`}
      >
        <div className={`p-1 rounded-full ${isActive('/itinerary') ? 'bg-white/20 shadow-inner' : ''}`}>
          <Map size={22} strokeWidth={isActive('/itinerary') ? 2.5 : 2} />
        </div>
        <span className="text-[10px] font-medium tracking-wide">行程</span>
      </Link>

      <Link
        href="/packing"
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-all duration-300 ${isActive('/packing') ? 'text-blue-600 scale-105' : 'text-gray-500/80 hover:text-gray-700'}`}
      >
        <div className={`p-1 rounded-full ${isActive('/packing') ? 'bg-white/20 shadow-inner' : ''}`}>
          <Briefcase size={22} strokeWidth={isActive('/packing') ? 2.5 : 2} />
        </div>
        <span className="text-[10px] font-medium tracking-wide">行李</span>
      </Link>

      <Link
        href="/tools"
        className={`flex flex-col items-center justify-center space-y-1 w-16 h-full transition-all duration-300 ${isActive('/tools') ? 'text-blue-600 scale-105' : 'text-gray-500/80 hover:text-gray-700'}`}
      >
        <div className={`p-1 rounded-full ${isActive('/tools') ? 'bg-white/20 shadow-inner' : ''}`}>
          <Calculator size={22} strokeWidth={isActive('/tools') ? 2.5 : 2} />
        </div>
        <span className="text-[10px] font-medium tracking-wide">工具</span>
      </Link>
    </nav>
  );
};

export default BottomNav;
