
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';

const AdminDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Platform Overview</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time system performance and user activity.</p>
        </div>
        <Button className="gap-2"><span className="material-symbols-outlined">add</span> Add New User</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Students', value: '2,450', growth: '+12%', icon: 'school', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Total Teachers', value: '125', growth: '+2%', icon: 'cast_for_education', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
          { label: 'Active Subjects', value: '48', growth: '+5%', icon: 'menu_book', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
        ].map(stat => (
          <Card key={stat.label} className="p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors">
            <div className="flex justify-between items-start">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
              </div>
              <Badge variant="success">
                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>
                {stat.growth}
              </Badge>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1 dark:text-white">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Enrollment Trends</h3>
            <select className="text-sm border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-4 pb-6">
            {[45, 55, 35, 85, 70, 92].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg h-full flex items-end overflow-hidden">
                  <div 
                    className="w-full bg-primary/40 group-hover:bg-primary transition-all duration-300 rounded-t-sm" 
                    style={{ height: `${h}%` }}
                  />
                </div>
                <span className="text-xs text-slate-500">Month</span>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6 bg-primary text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold">Pro Tips</h3>
              <p className="text-blue-100 text-sm mt-2 leading-relaxed">
                Review pending teacher applications within 24 hours to maintain high engagement rates.
              </p>
              <Button variant="outline" className="mt-4 bg-white text-primary hover:bg-blue-50 border-none">View Guidelines</Button>
            </div>
            <span className="absolute -bottom-8 -right-8 opacity-20 material-symbols-outlined text-[150px]">lightbulb</span>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-4">System Health</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Server Load</span>
                  <span className="text-emerald-600 font-bold">Optimal</span>
                </div>
                <ProgressBar progress={35} color="bg-emerald-500" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage Usage</span>
                  <span className="text-primary font-bold">68%</span>
                </div>
                <ProgressBar progress={68} />
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold">Pending Approvals</h3>
          <div className="flex gap-2">
            <Button variant="outline" className="px-3 py-1.5 h-auto text-xs">Filter</Button>
            <Button variant="outline" className="px-3 py-1.5 h-auto text-xs">Export</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs uppercase tracking-wider font-semibold">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { name: 'Sarah Connor', role: 'Teacher', date: 'Oct 24, 2024', email: 'sarah.c@school.edu' },
                { name: 'John Doe', role: 'Student', date: 'Oct 24, 2024', email: 'j.doe@gmail.com' },
              ].map(user => (
                <tr key={user.email} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={`https://picsum.photos/seed/${user.name}/100`} className="size-8 rounded-full" alt="" />
                      <div>
                        <p className="font-medium text-sm dark:text-white">{user.name}</p>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><Badge variant={user.role === 'Teacher' ? 'warning' : 'info'}>{user.role}</Badge></td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.date}</td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Button variant="ghost" className="text-xs text-slate-500">Reject</Button>
                    <Button className="text-xs px-3 h-8">Approve</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
