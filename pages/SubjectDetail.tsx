
import React from 'react';
import { Card, Badge, ProgressBar, Button } from '../components/Shared';

const SubjectDetail: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <nav className="flex text-sm text-slate-400 gap-2 mb-2">
        <span>Courses</span> / <span>Computer Science</span> / <span className="text-slate-900 dark:text-white font-bold">Advanced React Patterns</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-200px)]">
        {/* Sidebar content (Syllabus) */}
        <Card className="lg:col-span-4 p-0 overflow-y-auto flex flex-col h-full">
           <div className="p-5 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-lg font-bold mb-1">Course Content</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Advanced React Patterns</p>
              <div className="mt-4">
                <div className="flex justify-between text-xs font-bold mb-1.5"><span>35% Complete</span><span>12/34 Lessons</span></div>
                <ProgressBar progress={35} />
              </div>
           </div>
           <div className="p-3 space-y-4">
              <div>
                <p className="px-3 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Module 1: Foundations</p>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 text-left text-sm">
                   <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                   <span className="font-medium">Introduction to Patterns</span>
                </button>
              </div>
              <div className="pt-2">
                <p className="px-3 py-2 text-xs font-black text-slate-400 uppercase tracking-wider">Module 2: State Management</p>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-primary/10 rounded-lg text-left text-sm border-l-4 border-primary">
                   <span className="material-symbols-outlined text-primary text-[20px]">play_circle</span>
                   <span className="font-bold text-primary">Context API Deep Dive</span>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm text-slate-400">
                   <span className="material-symbols-outlined text-[20px]">lock</span>
                   <span>Redux Integration</span>
                </button>
              </div>
           </div>
        </Card>

        {/* Main Content Area (Video & Info) */}
        <div className="lg:col-span-8 overflow-y-auto flex flex-col gap-8 pb-12 pr-2">
           <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-black text-slate-900 dark:text-white">04. Understanding the Context API</h1>
              <p className="text-slate-500 text-sm">Lesson 2.2 • 15 min read • By Sarah Smith</p>
           </div>

           <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden relative group cursor-pointer shadow-xl">
              <img src="https://picsum.photos/1200/800" className="w-full h-full object-cover opacity-60" alt="Video Player" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="size-20 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur shadow-2xl transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-4xl ml-1">play_arrow</span>
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                 <ProgressBar progress={35} className="mb-4 h-1.5" />
                 <div className="flex justify-between items-center text-white">
                    <div className="flex gap-4">
                       <span className="material-symbols-outlined">pause</span>
                       <span className="material-symbols-outlined">volume_up</span>
                       <span className="text-sm font-bold">04:20 / 12:45</span>
                    </div>
                    <span className="material-symbols-outlined">fullscreen</span>
                 </div>
              </div>
           </div>

           <div className="flex items-center justify-between">
              <Button variant="outline" className="gap-2"><span className="material-symbols-outlined text-[18px]">arrow_back</span> Previous Lesson</Button>
              <Button className="gap-2">Next Lesson <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Button>
           </div>

           <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Overview</h3>
              <p>In this lesson, we will explore the React Context API, a powerful feature for managing global state in your applications. We'll start by understanding the problem of prop drilling and how Context provides a cleaner solution.</p>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white pt-2">Key Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                 <li><strong>createContext:</strong> How to initialize a new context object.</li>
                 <li><strong>Provider:</strong> Wrapping your component tree to supply values.</li>
                 <li><strong>useContext:</strong> Consuming context values in functional components.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
