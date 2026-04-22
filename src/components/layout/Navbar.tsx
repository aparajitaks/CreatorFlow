import React from 'react';
import Image from 'next/image';
import { Search, Bell, Settings, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="h-14 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-md z-10">
      <div className="flex items-center gap-4">
        {/* We assume logo.png is in public/images/logo.png */}
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center border border-white/5">
             <Image 
                src="/images/logo.png" 
                alt="CreatorFlow Logo" 
                width={24} 
                height={24}
                className="object-contain"
             />
          </div>
          <span className="font-semibold text-lg tracking-tight">CreatorFlow</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-sidebar-accent border border-border rounded-md pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 w-64 transition-all"
          />
        </div>
        
        <button className="p-2 hover:bg-sidebar-accent rounded-md transition-colors text-sidebar-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-sidebar-accent rounded-md transition-colors text-sidebar-foreground hover:text-foreground">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10 ml-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-full h-full flex items-center justify-center text-xs font-bold">JD</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
