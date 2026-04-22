import React from 'react';
import { History, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const activities = [
  { 
    id: 1, 
    type: 'success', 
    title: 'Project Published', 
    description: 'Portfolio Redesign v2 is now live.', 
    time: '2m ago' 
  },
  { 
    id: 2, 
    type: 'info', 
    title: 'Asset Uploaded', 
    description: 'New branding assets added to project.', 
    time: '45m ago' 
  },
  { 
    id: 3, 
    type: 'alert', 
    title: 'Review Required', 
    description: 'Collaboration request from Sarah.', 
    time: '2h ago' 
  },
  { 
    id: 4, 
    type: 'success', 
    title: 'Milestone Reached', 
    description: '1k views on your latest post.', 
    time: '5h ago' 
  },
];

const HistoryPanel = () => {
  return (
    <aside className="w-80 border-l border-border bg-background hidden lg:flex flex-col">
      <div className="p-6 border-b border-border flex items-center gap-2">
        <History className="w-4 h-4 text-sidebar-foreground" />
        <h2 className="text-sm font-semibold uppercase tracking-wider text-sidebar-foreground">Activity History</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-6 border-l border-border pb-6 last:pb-0 last:border-l-transparent">
            <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-background border-2 border-border flex items-center justify-center">
               {activity.type === 'success' && <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />}
               {activity.type === 'info' && <Clock className="w-2.5 h-2.5 text-blue-500" />}
               {activity.type === 'alert' && <AlertCircle className="w-2.5 h-2.5 text-amber-500" />}
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{activity.title}</span>
                <span className="text-[10px] text-sidebar-foreground">{activity.time}</span>
              </div>
              <p className="text-xs text-sidebar-foreground leading-relaxed">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-6 border-t border-border mt-auto">
        <button className="w-full text-xs text-sidebar-foreground hover:text-foreground transition-colors text-center font-medium">
          View all activity
        </button>
      </div>
    </aside>
  );
};

export default HistoryPanel;
