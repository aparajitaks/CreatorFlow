import React from 'react';
import { ArrowUpRight, TrendingUp, Users, Eye, Plus } from 'lucide-react';

const stats = [
  { label: 'Total Views', value: '128.4k', change: '+12.5%', icon: Eye },
  { label: 'Active Projects', value: '14', change: '+2', icon: TrendingUp },
  { label: 'Collaborators', value: '38', change: '+5', icon: Users },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-1">Dashboard</h1>
          <p className="text-sidebar-foreground">Welcome back, here's what's happening with your flow today.</p>
        </div>
        <button className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity w-fit">
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-border p-6 rounded-lg hover:border-white/10 transition-colors group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-sidebar-accent rounded-md">
                <stat.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-sidebar-foreground">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Projects */}
        <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold">Recent Projects</h3>
            <button className="text-xs text-sidebar-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              View all <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex-1 p-0">
             {[1, 2, 3].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 border-b border-border last:border-0 hover:bg-sidebar-accent/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-md bg-sidebar-accent flex items-center justify-center border border-border">
                       <Plus className="w-4 h-4 text-sidebar-foreground rotate-45" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Marketing Campaign #{i}</p>
                      <p className="text-xs text-sidebar-foreground">Updated 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                       {[1, 2].map((j) => (
                         <div key={j} className="w-6 h-6 rounded-full bg-sidebar-accent border-2 border-card flex items-center justify-center text-[8px] font-bold">U{j}</div>
                       ))}
                    </div>
                    <div className="h-1.5 w-24 bg-sidebar-accent rounded-full overflow-hidden">
                       <div className="h-full bg-foreground w-2/3" />
                    </div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Analytics Snapshot */}
        <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col p-6">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-semibold">Engagement Snapshot</h3>
              <select className="bg-sidebar-accent border border-border text-xs rounded px-2 py-1 focus:outline-none">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
           </div>
           
           <div className="flex-1 flex items-end justify-between gap-2 h-40">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <div key={i} className="flex-1 group relative">
                   <div 
                     className="bg-sidebar-accent hover:bg-foreground w-full rounded-t-sm transition-all duration-300 cursor-pointer" 
                     style={{ height: `${height}%` }}
                   />
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                     {height}%
                   </div>
                </div>
              ))}
           </div>
           
           <div className="flex items-center justify-between mt-4 text-[10px] text-sidebar-foreground font-medium uppercase tracking-wider">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
           </div>
        </div>
      </div>
    </div>
  );
}
