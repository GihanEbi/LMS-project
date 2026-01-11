
import React from 'react';
import { Card, Badge, Button } from '../components/Shared';
import { COURSES, ASSESSMENTS } from '../constants';

const TeacherDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Teacher Dashboard</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Welcome back, Mr. Anderson. Here's what's happening today.</p>
        </div>
        <Button className="gap-2"><span className="material-symbols-outlined">add</span> Create New Subject</Button>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">My Active Subjects</h2>
          <Button variant="ghost" className="text-primary">View All</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COURSES.slice(0, 3).map(course => (
            <Card key={course.id} className="p-5 flex flex-col gap-4 group hover:border-primary/30 transition-all">
              <div className="flex justify-between items-start">
                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">calculate</span>
                </div>
                <button className="text-slate-400"><span className="material-symbols-outlined">more_vert</span></button>
              </div>
              <div>
                <h3 className="text-lg font-bold dark:text-white">{course.title}</h3>
                <p className="text-sm text-slate-500">Mon • Wed • Fri</p>
              </div>
              <div className="mt-2 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  {course.studentsCount} Students
                </span>
                <Button variant="ghost" className="text-primary text-xs">Manage</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 p-0 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold">Upcoming Exams</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Due Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ASSESSMENTS.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium dark:text-white">{item.title}</td>
                    <td className="px-6 py-4 text-slate-500">{item.courseName}</td>
                    <td className="px-6 py-4 text-slate-500">{item.dueDate}</td>
                    <td className="px-6 py-4">
                      <Badge variant={item.status === 'Live' ? 'success' : item.status === 'Ready to Grade' ? 'warning' : 'neutral'}>
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-5">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { name: 'Sarah J.', action: 'submitted Homework 1', time: '2 mins ago', img: 'https://picsum.photos/seed/s1/100' },
              { name: 'New student', action: 'joined Math 101', time: '1 hour ago', icon: 'person_add' },
              { name: 'Mike T.', action: 'commented on Physics Quiz', time: '3 hours ago', img: 'https://picsum.photos/seed/s2/100' },
            ].map((act, i) => (
              <div key={i} className="flex gap-4 items-center">
                {act.img ? (
                  <img src={act.img} className="size-10 rounded-full object-cover" alt="" />
                ) : (
                  <div className="size-10 rounded-full bg-blue-100 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">{act.icon}</span>
                  </div>
                )}
                <div className="flex flex-col">
                  <p className="text-sm"><span className="font-bold">{act.name}</span> {act.action}</p>
                  <span className="text-xs text-slate-400">{act.time}</span>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">View All Activity</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
