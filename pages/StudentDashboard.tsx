
import React from 'react';
import { Card, Badge, ProgressBar, Button } from '../components/Shared';
import { COURSES } from '../constants';
import { CourseStatus } from '../types';

const StudentDashboard: React.FC = () => {
  const inProgressCourses = COURSES.filter(c => c.status === CourseStatus.IN_PROGRESS);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back, Alex! 👋</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">You have 2 assignments due today. Let's keep the streak going.</p>
        </div>
        <Button className="gap-2"><span className="material-symbols-outlined text-[20px]">add</span> Join New Course</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: 'Learning Streak', value: '12 Days', icon: 'local_fire_department', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
          { label: 'Total Points', value: '1,450', icon: 'emoji_events', color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
          { label: 'Hours Spent', value: '85h', icon: 'schedule', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
        ].map(stat => (
          <Card key={stat.label} className="p-6 flex items-center gap-4">
            <div className={`size-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <span className="material-symbols-outlined">{stat.icon}</span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Enrolled Subjects</h3>
            <Button variant="ghost" className="text-primary text-xs">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inProgressCourses.map(course => (
              <Card key={course.id} className="overflow-hidden flex flex-col group hover:border-primary/30 transition-all">
                <div className="h-40 relative">
                  <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                  <div className="absolute top-3 left-4"><Badge variant="info">{course.category}</Badge></div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-lg font-bold mb-1 dark:text-white">{course.title}</h4>
                  <p className="text-sm text-slate-500 mb-4">Teacher: {course.instructor}</p>
                  <div className="mt-auto space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <ProgressBar progress={course.progress} />
                    </div>
                    <Button variant="outline" className="w-full">Continue Learning</Button>
                  </div>
                </div>
              </Card>
            ))}
            <Card className="border-dashed flex flex-col items-center justify-center p-8 gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[32px]">add</span>
              </div>
              <p className="font-bold text-center">Discover New Courses</p>
            </Card>
          </div>
        </div>

        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold">Next Deadlines</h3>
              <Badge variant="error">2 Urgent</Badge>
            </div>
            <div className="space-y-4">
              {[
                { date: '24', month: 'Oct', title: 'UX Research Quiz', urgency: 'Due Today', color: 'text-red-500' },
                { date: '25', month: 'Oct', title: 'Calculus Homework 4', urgency: 'Due Tomorrow', color: 'text-amber-500' },
              ].map(d => (
                <div key={d.title} className="flex gap-4 items-start">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-2 min-w-[50px] text-center border border-slate-200 dark:border-slate-700">
                    <p className={`text-xs font-bold uppercase ${d.color}`}>{d.month}</p>
                    <p className="text-lg font-bold">{d.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold truncate">{d.title}</p>
                    <p className={`text-xs font-medium ${d.color} mt-1`}>{d.urgency}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-5">Recent Activity</h3>
            <div className="relative pl-2 border-l-2 border-slate-100 dark:border-slate-800 flex flex-col gap-6 ml-2">
              {[
                { title: 'Assignment Submitted', detail: 'UX Research Methods', icon: 'check_circle', iconColor: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
                { title: 'Sarah Smith', detail: 'replied to your comment', icon: 'forum', iconColor: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/30' },
              ].map((act, i) => (
                <div key={i} className="relative flex gap-4">
                  <div className={`absolute -left-6 size-8 rounded-full flex items-center justify-center ${act.bg} ${act.iconColor} border-2 border-white dark:border-surface-dark`}>
                    <span className="material-symbols-outlined text-[18px]">{act.icon}</span>
                  </div>
                  <div className="pl-4">
                    <p className="text-sm font-bold">{act.title}</p>
                    <p className="text-xs text-slate-500">{act.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
