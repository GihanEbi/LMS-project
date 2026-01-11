
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';

const AdminReports: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">System Reports</h1>
          <p className="text-slate-500 mt-1">Platform-wide insights, financial reports, and system audit logs.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" className="gap-2 text-sm"><span className="material-symbols-outlined text-[18px]">calendar_today</span> Oct 2023</Button>
           <Button className="gap-2 text-sm"><span className="material-symbols-outlined text-[18px]">download</span> Export All</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-black">Daily Active Users (DAU)</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                <span className="size-2 rounded-full bg-primary"></span> Current
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                <span className="size-2 rounded-full bg-slate-200"></span> Previous
              </div>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-3 pb-4">
            {[65, 45, 75, 55, 85, 95, 70, 60, 80, 75, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                 <div className="relative w-full flex items-end justify-center h-full bg-slate-50 dark:bg-slate-800/50 rounded-lg overflow-hidden">
                    <div className="w-1/2 bg-slate-200 dark:bg-slate-700 h-[60%] opacity-40 rounded-t-sm mb-px"></div>
                    <div className="absolute inset-x-0 bottom-0 bg-primary/40 group-hover:bg-primary transition-all duration-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase">{i + 1} Oct</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-black mb-6">User Distribution</h3>
          <div className="flex flex-col gap-6">
             <div className="flex items-center justify-center relative size-40 mx-auto">
                <svg className="size-full transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" className="text-slate-100 dark:text-slate-800" />
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="440" strokeDashoffset="110" className="text-primary" />
                  <circle cx="80" cy="80" r="70" fill="transparent" stroke="currentColor" strokeWidth="12" strokeDasharray="440" strokeDashoffset="330" className="text-amber-500" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <p className="text-2xl font-black">2.8k</p>
                   <p className="text-[10px] text-slate-400 uppercase font-bold">Users</p>
                </div>
             </div>
             <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center text-sm font-bold">
                   <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-primary"></span> Students</span>
                   <span>75%</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                   <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-amber-500"></span> Teachers</span>
                   <span>20%</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold text-slate-400">
                   <span className="flex items-center gap-2"><span className="size-3 rounded-full bg-slate-200"></span> Admins</span>
                   <span>5%</span>
                </div>
             </div>
          </div>
        </Card>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-black">System Audit Log</h3>
          <Button variant="ghost" className="text-xs text-primary font-bold">View Full History</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Timestamp</th>
                <th className="px-6 py-4">Admin</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Target</th>
                <th className="px-6 py-4 text-right">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { time: '2023-10-24 10:45:12', user: 'Tom Cook', action: 'Course Approved', target: 'Advanced Data Science', status: 'Success' },
                { time: '2023-10-24 09:30:05', user: 'Mike Ross', action: 'User Suspended', target: 'John Doe', status: 'Success' },
                { time: '2023-10-24 08:12:45', user: 'Tom Cook', action: 'Role Changed', target: 'Sarah Smith (Teacher)', status: 'Success' },
                { time: '2023-10-24 07:44:20', user: 'System', action: 'Auto-Backup', target: 'Database Core', status: 'Success' },
              ].map((log, i) => (
                <tr key={i} className="text-sm border-transparent transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                  <td className="px-6 py-4 font-mono text-[10px] text-slate-400">{log.time}</td>
                  <td className="px-6 py-4 font-bold">{log.user}</td>
                  <td className="px-6 py-4 text-slate-500 font-medium">{log.action}</td>
                  <td className="px-6 py-4 font-medium italic">{log.target}</td>
                  <td className="px-6 py-4 text-right font-black text-emerald-500">{log.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminReports;
