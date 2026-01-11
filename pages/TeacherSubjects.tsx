
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';
import { COURSES } from '../constants';

const TeacherSubjects: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Assigned Subjects</h1>
          <p className="text-slate-500 mt-1">Manage your curriculum and track classroom performance.</p>
        </div>
        <Button className="gap-2">
          <span className="material-symbols-outlined text-[20px]">add</span> Create New Subject
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '142', icon: 'groups', color: 'text-primary' },
          { label: 'Avg. Attendance', value: '94%', icon: 'event_available', color: 'text-emerald-500' },
          { label: 'Avg. Grade', value: 'B+', icon: 'grade', color: 'text-amber-500' },
          { label: 'Active Courses', value: '4', icon: 'menu_book', color: 'text-purple-500' },
        ].map(stat => (
          <Card key={stat.label} className="p-4 flex items-center gap-4">
            <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-800 ${stat.color}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-black dark:text-white">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-px">
        {['All Subjects', 'Active', 'Archived', 'Drafts'].map((tab, i) => (
          <button key={tab} className={`px-4 py-2 text-sm font-bold transition-all border-b-2 ${i === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {COURSES.map(course => (
          <Card key={course.id} className="overflow-hidden flex flex-col sm:flex-row group hover:shadow-md transition-all border-slate-200 dark:border-slate-800">
            <div className="w-full sm:w-48 h-48 sm:h-auto relative overflow-hidden shrink-0">
              <img src={course.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="info">{course.category}</Badge>
                <div className="flex gap-1">
                  <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined text-[20px]">edit</span></button>
                  <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400"><span className="material-symbols-outlined text-[20px]">more_vert</span></button>
                </div>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-1">{course.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-1">Last updated: Oct 20, 2023</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Students</p>
                  <p className="text-sm font-bold">{course.studentsCount}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase">Assignments</p>
                  <p className="text-sm font-bold">{course.assignmentsCount}</p>
                </div>
              </div>

              <div className="mt-auto flex gap-2">
                <Button className="flex-1 text-xs">Manage Content</Button>
                <Button variant="outline" className="flex-1 text-xs">Student List</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeacherSubjects;
