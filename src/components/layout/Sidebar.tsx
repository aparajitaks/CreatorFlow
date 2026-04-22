"use client";

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Layers, 
  Users, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Content', active: false },
  { icon: Layers, label: 'Projects', active: false },
  { icon: Users, label: 'Collaborators', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-sidebar border-r border-border flex flex-col z-20 transition-[width] duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex-1 flex flex-col py-6 overflow-hidden">
        <div className="px-3 mb-8">
           <button 
             type="button"
             className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap overflow-hidden"
           >
             <PlusCircle className="w-4 h-4 shrink-0" />
             {!collapsed && <span className="animate-fade-in">Create New</span>}
           </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href="#" 
              className={cn(
                "nav-item group whitespace-nowrap overflow-hidden",
                item.active && "active",
                collapsed && "justify-center px-0"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="animate-fade-in">{item.label}</span>}
            </a>
          ))}
        </nav>

        <div className="px-3 mt-auto py-4 space-y-1">
           <a 
              href="#" 
              className={cn(
                "nav-item whitespace-nowrap overflow-hidden",
                collapsed && "justify-center px-0"
              )}
            >
              <HelpCircle className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="animate-fade-in">Help & Support</span>}
            </a>
        </div>
      </div>

      <button 
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="h-12 border-t border-border flex items-center justify-center hover:bg-sidebar-accent transition-colors text-sidebar-foreground cursor-pointer w-full"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : (
          <div className="flex items-center gap-2 text-xs font-medium animate-fade-in">
            <ChevronLeft className="w-4 h-4" />
            <span>Collapse sidebar</span>
          </div>
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
