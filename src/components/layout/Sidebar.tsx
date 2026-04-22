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
        "bg-sidebar transition-all duration-300 border-r border-border flex flex-col z-20",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex-1 flex flex-col py-6">
        <div className="px-3 mb-8">
           <button 
             className="w-full flex items-center justify-center gap-2 bg-foreground text-background py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity"
           >
             <PlusCircle className="w-4 h-4" />
             {!collapsed && <span>Create New</span>}
           </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href="#" 
              className={cn(
                "nav-item group",
                item.active && "active",
                collapsed && "justify-center px-0"
              )}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span>{item.label}</span>}
              {(!collapsed && item.active) && (
                <div className="ml-auto w-1 h-1 rounded-full bg-foreground" />
              )}
            </a>
          ))}
        </nav>

        <div className="px-3 mt-auto space-y-1">
           <a 
              href="#" 
              className={cn(
                "nav-item",
                collapsed && "justify-center px-0"
              )}
            >
              <HelpCircle className="w-5 h-5 shrink-0" />
              {!collapsed && <span>Help & Support</span>}
            </a>
        </div>
      </div>

      <button 
        onClick={() => setCollapsed(!collapsed)}
        className="h-10 border-t border-border flex items-center justify-center hover:bg-sidebar-accent transition-colors text-sidebar-foreground"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : (
          <div className="flex items-center gap-2 text-xs">
            <ChevronLeft className="w-4 h-4" />
            <span>Collapse</span>
          </div>
        )}
      </button>
    </aside>
  );
};

export default Sidebar;
