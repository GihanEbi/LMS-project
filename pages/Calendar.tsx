
import React, { useState } from 'react';
import { Card, Badge, Button } from '../components/Shared';

interface Event {
  id: string;
  title: string;
  type: 'Exam' | 'Assignment' | 'Holiday' | 'Lecture';
  date: string; // YYYY-MM-DD
  time?: string;
  color: string;
}

const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Calculus Midterm', type: 'Exam', date: '2023-10-24', time: '10:00 AM', color: 'bg-red-500' },
  { id: '2', title: 'UX Research Paper', type: 'Assignment', date: '2023-10-25', time: '11:59 PM', color: 'bg-amber-500' },
  { id: '3', title: 'Fall Break Begins', type: 'Holiday', date: '2023-10-31', color: 'bg-emerald-500' },
  { id: '4', title: 'Physics Lab', type: 'Lecture', date: '2023-11-02', time: '02:00 PM', color: 'bg-blue-500' },
  { id: '5', title: 'History Presentation', type: 'Assignment', date: '2023-11-05', time: '09:00 AM', color: 'bg-purple-500' },
];

const Calendar: React.FC = () => {
  // We'll fix current view to October 2023 for demo consistency
  const [currentDate, setCurrentDate] = useState(new Date(2023, 9, 1)); // Oct 2023
  
  const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();
  
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const totalDays = daysInMonth(month, year);
  const startDay = firstDayOfMonth(month, year);
  
  const calendarDays = [];
  // Padding for start of month
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  // Actual days
  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(i);
  }

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getEventsForDay = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return MOCK_EVENTS.filter(e => e.date === dateStr);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Academic Calendar</h1>
          <p className="text-slate-500 mt-1">Stay organized with your lectures, exams, and deadlines.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="gap-2">
             <span className="material-symbols-outlined text-[18px]">sync</span> Sync Google
           </Button>
           <Button className="gap-2">
             <span className="material-symbols-outlined text-[20px]">add</span> Add Personal Event
           </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Calendar Grid */}
        <Card className="lg:col-span-8 p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">calendar_month</span>
              {monthName} {year}
            </h2>
            <div className="flex gap-2">
              <Button variant="outline" className="p-2 h-10 w-10" onClick={handlePrevMonth}>
                <span className="material-symbols-outlined">chevron_left</span>
              </Button>
              <Button variant="outline" className="text-xs font-bold" onClick={() => setCurrentDate(new Date())}>Today</Button>
              <Button variant="outline" className="p-2 h-10 w-10" onClick={handleNextMonth}>
                <span className="material-symbols-outlined">chevron_right</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 border-t border-l border-slate-100 dark:border-slate-800">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="py-3 text-center text-xs font-black uppercase text-slate-400 border-r border-b border-slate-100 dark:border-slate-800">
                {day}
              </div>
            ))}
            {calendarDays.map((day, idx) => {
              const events = day ? getEventsForDay(day) : [];
              return (
                <div 
                  key={idx} 
                  className={`min-h-[100px] p-2 border-r border-b border-slate-100 dark:border-slate-800 transition-colors ${
                    day ? 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30' : 'bg-slate-50/30 dark:bg-slate-900/10'
                  }`}
                >
                  {day && (
                    <>
                      <span className={`text-sm font-bold ${day === 24 && month === 9 ? 'bg-primary text-white size-7 flex items-center justify-center rounded-full' : 'text-slate-600 dark:text-slate-400'}`}>
                        {day}
                      </span>
                      <div className="mt-2 space-y-1">
                        {events.map(event => (
                          <div key={event.id} className={`${event.color} h-1.5 rounded-full w-full`} title={event.title} />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Upcoming Events List */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-5 flex items-center justify-between">
              Upcoming Events
              <Badge variant="info">{MOCK_EVENTS.length}</Badge>
            </h3>
            <div className="space-y-4">
              {MOCK_EVENTS.map(event => (
                <div key={event.id} className="group flex gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all cursor-pointer">
                  <div className={`size-10 shrink-0 rounded-lg flex items-center justify-center text-white shadow-lg shadow-black/5 ${event.color}`}>
                    <span className="material-symbols-outlined text-[20px]">
                      {event.type === 'Exam' ? 'description' : 
                       event.type === 'Assignment' ? 'edit_note' : 
                       event.type === 'Holiday' ? 'celebration' : 'school'}
                    </span>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="font-bold text-sm text-slate-900 dark:text-white truncate">{event.title}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500 font-medium">{new Date(event.date).toLocaleDateString('default', { day: 'numeric', month: 'short' })}</span>
                      {event.time && (
                        <>
                          <span className="text-[4px] text-slate-300">•</span>
                          <span className="text-xs text-slate-500 font-medium">{event.time}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-primary font-bold">View Full Schedule</Button>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none">
            <h4 className="font-bold text-lg mb-2">Academic Tip</h4>
            <p className="text-indigo-100 text-sm leading-relaxed mb-4">
              Regular study habits are 3x more effective than cramming before exams. Try blocking out 1 hour daily for your main subject.
            </p>
            <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20">Set Reminders</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
