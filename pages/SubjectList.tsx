
import React from 'react';
import { Card, Badge, ProgressBar, Button } from '../components/Shared';
import { COURSES } from '../constants';
import { CourseStatus } from '../types';

const SubjectList: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">Explore Subjects</h1>
        <p className="text-slate-500 max-w-2xl">Browse our extensive catalog of courses to expand your skills, track your progress, and achieve your learning goals.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center py-4">
        <div className="flex-1 w-full lg:max-w-md relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-primary shadow-sm text-sm" placeholder="Search by subject or instructor..." />
        </div>
        <div className="flex gap-2 w-full lg:w-auto">
          {['Status', 'Category', 'Instructor'].map(f => (
            <Button key={f} variant="outline" className="gap-2 text-xs">
              {f} <span className="material-symbols-outlined text-sm">expand_more</span>
            </Button>
          ))}
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2 hidden sm:block"></div>
          <div className="flex bg-white dark:bg-slate-800 rounded-lg p-1 border border-slate-200 dark:border-slate-700">
             <button className="p-1.5 bg-slate-100 dark:bg-slate-700 text-primary rounded"><span className="material-symbols-outlined text-[18px]">grid_view</span></button>
             <button className="p-1.5 text-slate-400"><span className="material-symbols-outlined text-[18px]">view_list</span></button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {COURSES.map(course => (
          <Card key={course.id} className="group overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img src={course.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="" />
              <div className="absolute top-3 right-3">
                <Badge variant={course.status === CourseStatus.NEW ? 'success' : course.status === CourseStatus.IN_PROGRESS ? 'info' : 'neutral'}>
                  {course.status.replace('_', ' ')}
                </Badge>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="mb-4">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{course.category}</span>
                <h3 className="text-lg font-bold mt-1 group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
              </div>
              <div className="flex items-center gap-2 mb-5">
                <img src={`https://picsum.photos/seed/${course.instructor}/100`} className="size-6 rounded-full" alt="" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{course.instructor}</span>
              </div>
              <div className="mt-auto space-y-4">
                {course.status === CourseStatus.IN_PROGRESS && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-bold text-primary"><span>Progress</span><span>{course.progress}%</span></div>
                    <ProgressBar progress={course.progress} />
                  </div>
                )}
                <Button className="w-full gap-2" variant={course.status === CourseStatus.AVAILABLE || course.status === CourseStatus.NEW ? 'outline' : 'primary'}>
                  {course.status === CourseStatus.IN_PROGRESS ? 'Continue Learning' : 'Join Class'}
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
