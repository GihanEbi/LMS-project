
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';

const MOCK_STUDENTS = [
  { id: '1', name: 'Emma Watson', email: 'emma.w@school.edu', avatar: 'https://picsum.photos/seed/emma/100', grade: 'A', attendance: 98, lastActivity: '2 hours ago', course: 'Mathematics 101' },
  { id: '2', name: 'John Smith', email: 'j.smith@school.edu', avatar: 'https://picsum.photos/seed/john/100', grade: 'B+', attendance: 85, lastActivity: '1 day ago', course: 'Advanced Physics' },
  { id: '3', name: 'Sophia Chen', email: 's.chen@school.edu', avatar: 'https://picsum.photos/seed/sophia/100', grade: 'A-', attendance: 92, lastActivity: '5 mins ago', course: 'Mathematics 101' },
  { id: '4', name: 'Lucas Gray', email: 'l.gray@school.edu', avatar: 'https://picsum.photos/seed/lucas/100', grade: 'C', attendance: 70, lastActivity: '3 days ago', course: 'Geometry A' },
  { id: '5', name: 'Ava Miller', email: 'a.miller@school.edu', avatar: 'https://picsum.photos/seed/ava/100', grade: 'B', attendance: 88, lastActivity: '6 hours ago', course: 'Advanced Physics' },
];

const TeacherStudents: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Student Roster</h1>
          <p className="text-slate-500 mt-1">Track attendance, grades, and engagement of all students in your classes.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-sm">
            <span className="material-symbols-outlined text-[20px]">mail</span> Message All
          </Button>
          <Button className="gap-2 text-sm">
            <span className="material-symbols-outlined text-[20px]">download</span> Export Data
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Risk of Drop-out', value: '4 Students', icon: 'warning', color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
          { label: 'Top Performers', value: '18 Students', icon: 'stars', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          { label: 'Avg. Attendance', value: '92.4%', icon: 'fact_check', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Pending Grades', value: '28 Items', icon: 'pending_actions', color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        ].map(card => (
          <Card key={card.label} className="p-5 flex items-center gap-4">
            <div className={`size-12 rounded-2xl flex items-center justify-center ${card.bg} ${card.color}`}>
              <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{card.label}</p>
              <p className="text-xl font-black dark:text-white">{card.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h3 className="font-black text-lg">Class Directory</h3>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
            <p className="text-sm font-bold text-slate-400">Showing 142 students</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-primary w-full sm:w-64" placeholder="Search students..." />
            </div>
            <select className="text-sm bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-primary">
              <option>All Classes</option>
              <option>Mathematics 101</option>
              <option>Advanced Physics</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Current Course</th>
                <th className="px-6 py-4">Grade</th>
                <th className="px-6 py-4">Attendance</th>
                <th className="px-6 py-4">Last Active</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_STUDENTS.map(student => (
                <tr key={student.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={student.avatar} className="size-10 rounded-full border-2 border-slate-100 dark:border-slate-800" alt="" />
                      <div>
                        <p className="font-bold text-sm dark:text-white">{student.name}</p>
                        <p className="text-xs text-slate-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{student.course}</td>
                  <td className="px-6 py-4">
                    <Badge variant={student.grade.startsWith('A') ? 'success' : student.grade.startsWith('B') ? 'info' : 'warning'}>
                      {student.grade}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16">
                        <ProgressBar progress={student.attendance} color={student.attendance < 75 ? 'bg-red-500' : 'bg-emerald-500'} />
                      </div>
                      <span className="text-xs font-bold">{student.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{student.lastActivity}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-600"><span className="material-symbols-outlined text-[18px]">visibility</span></button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400 shadow-sm border border-transparent hover:border-slate-100 dark:hover:border-slate-600"><span className="material-symbols-outlined text-[18px]">mail</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <Button variant="ghost" className="text-xs text-slate-500" disabled>Previous</Button>
          <div className="flex gap-1">
            {[1, 2, 3, '...', 12].map((p, i) => (
              <button key={i} className={`size-8 flex items-center justify-center rounded-lg text-xs font-bold ${p === 1 ? 'bg-primary text-white' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
                {p}
              </button>
            ))}
          </div>
          <Button variant="ghost" className="text-xs text-primary font-bold">Next</Button>
        </div>
      </Card>
    </div>
  );
};

export default TeacherStudents;
