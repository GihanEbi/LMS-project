
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { User, UserRole } from '../types';
import { Button } from './Shared';

interface SidebarProps {
  user: User;
  role: UserRole;
  collapsed?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ user, role }) => {
  const navItems = {
    [UserRole.ADMIN]: [
      { path: '/admin/dashboard', icon: 'dashboard', label: 'Dashboard' },
      { path: '/admin/users', icon: 'group', label: 'Users' },
      { path: '/admin/courses', icon: 'menu_book', label: 'Courses' },
      { path: '/admin/reports', icon: 'analytics', label: 'Reports' },
      { path: '/settings', icon: 'settings', label: 'Settings' },
    ],
    [UserRole.TEACHER]: [
      { path: '/teacher/dashboard', icon: 'dashboard', label: 'Dashboard' },
      { path: '/teacher/subjects', icon: 'book_2', label: 'My Subjects' },
      { path: '/teacher/exams', icon: 'description', label: 'Exams' },
      { path: '/teacher/students', icon: 'groups', label: 'Students' },
      { path: '/settings', icon: 'settings', label: 'Settings' },
    ],
    [UserRole.STUDENT]: [
      { path: '/student/dashboard', icon: 'dashboard', label: 'Dashboard' },
      { path: '/subjects', icon: 'book', label: 'Courses' },
      { path: '/student/calendar', icon: 'calendar_month', label: 'Calendar' },
      { path: '/progress', icon: 'monitoring', label: 'Progress' },
      { path: '/settings', icon: 'settings', label: 'Settings' },
    ],
    [UserRole.GUEST]: []
  };

  const currentNav = navItems[role];

  return (
    <aside className="w-64 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark shrink-0 h-full overflow-hidden transition-all duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-[20px]">school</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white truncate">LMS Pro</h1>
      </div>

      <nav className="flex-1 px-4 flex flex-col gap-1 overflow-y-auto">
        {currentNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
          <img src={user.avatar} className="size-10 rounded-full object-cover" alt={user.name} />
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{user.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const Topbar: React.FC<{ title: string; user: User }> = ({ title, user }) => {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white/80 dark:bg-background-dark/80 backdrop-blur border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
      <h2 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h2>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative w-64">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[18px]">search</span>
          <input className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/50 text-slate-900 dark:text-white placeholder-slate-400" placeholder="Search..." type="text"/>
        </div>
        
        <button onClick={toggleTheme} className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>

        <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>

        <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>

        <Button variant="ghost" onClick={() => navigate('/login')} className="text-primary font-bold">Log Out</Button>
      </div>
    </header>
  );
};
