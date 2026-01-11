
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';
import { COURSES } from '../constants';

const AdminCourses: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Course Management</h1>
          <p className="text-slate-500 mt-1">Audit platform content, approve new subjects, and track global enrollment.</p>
        </div>
        <Button className="gap-2">
          <span className="material-symbols-outlined text-[20px]">library_add</span> Batch Import
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Published', value: '38', icon: 'check_circle', color: 'text-emerald-500' },
          { label: 'Awaiting Review', value: '12', icon: 'visibility', color: 'text-amber-500' },
          { label: 'Global Enrollment', value: '14,250', icon: 'person_celebrate', color: 'text-primary' },
          { label: 'Resources Used', value: '1.2 TB', icon: 'database', color: 'text-slate-500' },
        ].map(stat => (
          <Card key={stat.label} className="p-4 border-l-4 border-l-primary dark:border-l-primary/50">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{stat.label}</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-2xl font-black dark:text-white">{stat.value}</p>
              <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <h3 className="font-black text-lg">Curriculum Audit</h3>
          <div className="flex gap-2">
             <div className="relative">
               <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
               <input className="pl-9 pr-4 py-2 text-sm bg-white dark:bg-slate-800 border-none rounded-xl focus:ring-primary w-64" placeholder="Search courses..." />
             </div>
             <Button variant="outline" className="p-2 h-9 w-9"><span className="material-symbols-outlined text-[20px]">sort</span></Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Course Details</th>
                <th className="px-6 py-4">Instructor</th>
                <th className="px-6 py-4">Enrolled</th>
                <th className="px-6 py-4">Avg. Progress</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {COURSES.map(course => (
                <tr key={course.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="size-12 rounded-lg bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0">
                         <img src={course.image} className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="max-w-[200px]">
                        <p className="font-bold text-sm dark:text-white truncate">{course.title}</p>
                        <p className="text-xs text-slate-400">{course.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">{course.instructor}</td>
                  <td className="px-6 py-4 text-sm font-bold">{course.studentsCount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16"><ProgressBar progress={course.progress} /></div>
                      <span className="text-xs text-slate-500">{course.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><Badge variant={course.status === 'NEW' ? 'success' : 'info'}>{course.status}</Badge></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400"><span className="material-symbols-outlined text-[18px]">analytics</span></button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                    </div>
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

export default AdminCourses;
