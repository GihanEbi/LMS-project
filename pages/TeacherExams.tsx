
import React from 'react';
import { Card, Badge, Button, ProgressBar } from '../components/Shared';
import { ASSESSMENTS } from '../constants';

const TeacherExams: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Exam Management</h1>
          <p className="text-slate-500 mt-1">Create, schedule, and grade assessments across your subjects.</p>
        </div>
        <Button className="gap-2">
          <span className="material-symbols-outlined text-[20px]">post_add</span> Create New Exam
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-primary" placeholder="Search exams..." />
          </div>
          <Button variant="outline" className="gap-2 text-xs">
            <span className="material-symbols-outlined text-sm">filter_list</span> Filter
          </Button>
        </div>
        <div className="flex gap-4 text-sm font-bold text-slate-500">
           <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-500"></span> Live</span>
           <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-amber-500"></span> Pending Grade</span>
           <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-slate-400"></span> Draft</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {ASSESSMENTS.map(exam => {
          const submissionPercent = exam.submittedCount && exam.totalStudents ? Math.round((exam.submittedCount / exam.totalStudents) * 100) : 0;
          
          return (
            <Card key={exam.id} className="p-0 overflow-hidden group border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors">
              <div className="flex flex-col lg:flex-row items-stretch">
                <div className={`w-2 lg:w-3 shrink-0 ${exam.status === 'Live' ? 'bg-emerald-500' : exam.status === 'Ready to Grade' ? 'bg-amber-500' : 'bg-slate-300'}`}></div>
                <div className="flex-1 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-4">
                    <h3 className="text-lg font-black dark:text-white mb-1">{exam.title}</h3>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">book</span> {exam.courseName}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Submissions</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <ProgressBar progress={submissionPercent} color={submissionPercent === 100 ? 'bg-emerald-500' : 'bg-primary'} />
                      </div>
                      <span className="text-xs font-bold whitespace-nowrap">{exam.submittedCount}/{exam.totalStudents}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Due Date</p>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{exam.dueDate}</p>
                  </div>

                  <div className="lg:col-span-3 flex justify-end gap-2">
                    {exam.status === 'Ready to Grade' ? (
                      <Button className="h-9 px-4 text-xs font-black">Grade Now</Button>
                    ) : (
                      <Button variant="outline" className="h-9 px-4 text-xs font-black">Edit Details</Button>
                    )}
                    <button className="size-9 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined">analytics</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6 bg-slate-50 dark:bg-slate-800/30 border-dashed border-2 flex flex-col items-center justify-center gap-4 py-12">
        <div className="size-16 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-300">
           <span className="material-symbols-outlined text-[40px]">history_edu</span>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg">Build Question Bank</h3>
          <p className="text-sm text-slate-500 max-w-sm">Reuse your previous exam questions or import them from existing templates to save time.</p>
        </div>
        <Button variant="outline" className="font-black text-xs h-9">Open Question Bank</Button>
      </Card>
    </div>
  );
};

export default TeacherExams;
