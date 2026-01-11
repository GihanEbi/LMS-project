
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';

const ProgressAnalytics: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-black tracking-tight">Performance Analytics</h1>
          <p className="text-slate-500">Track your progress, grades, and skill development.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2"><span className="material-symbols-outlined text-[18px]">calendar_today</span> Last 30 Days</Button>
          <Button className="gap-2"><span className="material-symbols-outlined text-[18px]">download</span> Download Report</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Average Score', value: '88%', growth: '+2%', icon: 'school', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-primary' },
          { label: 'Hours Studied', value: '12.5h', growth: '+5%', icon: 'schedule', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-500' },
          { label: 'Modules Done', value: '15/20', growth: '75%', icon: 'check_circle', color: 'text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-400' },
        ].map(stat => (
          <Card key={stat.label} className={`p-6 flex flex-col gap-3 relative overflow-hidden border-r-4 ${stat.border}`}>
            <div className="flex items-center justify-between">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
              <span className={`material-symbols-outlined ${stat.color} ${stat.bg} p-1.5 rounded-md`}>{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold dark:text-white">{stat.value}</p>
              <Badge variant="success">{stat.growth}</Badge>
            </div>
            {stat.label === 'Modules Done' && <ProgressBar progress={75} color="bg-orange-400" />}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-bold">Grade Progression</h3>
              <p className="text-sm text-slate-500">Score history over the last 5 weeks</p>
            </div>
          </div>
          <div className="h-64 relative flex items-end">
             {/* Mock Chart Visualization */}
             <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
               <path d="M0,100 Q125,120 250,50 T500,20" fill="none" stroke="#136dec" strokeWidth="4" />
               <path d="M0,100 Q125,120 250,50 T500,20 L500,150 L0,150 Z" fill="rgba(19, 109, 236, 0.1)" />
             </svg>
          </div>
          <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 px-2">
            <span>Sep 15</span><span>Sep 22</span><span>Sep 29</span><span>Oct 06</span><span>Oct 13</span>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-bold mb-2">Skill Breakdown</h3>
          <p className="text-sm text-slate-500 mb-8">Based on recent quizzes</p>
          <div className="flex flex-col gap-6">
             {[
               { skill: 'Logic', level: 90 },
               { skill: 'Memory', level: 75 },
               { skill: 'Analysis', level: 85 },
               { skill: 'Creativity', level: 60 },
             ].map(s => (
               <div key={s.skill} className="space-y-1">
                 <div className="flex justify-between text-sm font-bold"><span>{s.skill}</span><span>{s.level}%</span></div>
                 <ProgressBar progress={s.level} />
               </div>
             ))}
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold">Recent Assessments</h3>
          <div className="relative w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="w-full pl-10 pr-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm" placeholder="Search assessments..." />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Exam Name</th>
                <th className="px-6 py-4">Subject</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { name: 'Mid-Term Calculus', sub: 'Mathematics', date: 'Oct 12, 2023', score: '92/100', status: 'success' },
                { name: 'Physics Lab Report', sub: 'Science', date: 'Oct 10, 2023', score: '78/100', status: 'warning' },
                { name: 'World War II Essay', sub: 'History', date: 'Oct 05, 2023', score: '85/100', status: 'success' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-sm">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{row.sub}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{row.date}</td>
                  <td className="px-6 py-4"><Badge variant={row.status === 'success' ? 'success' : 'warning'}>{row.score}</Badge></td>
                  <td className="px-6 py-4 text-right"><Button variant="ghost" className="text-primary text-xs">View Feedback</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProgressAnalytics;
