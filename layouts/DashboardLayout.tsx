
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar, Topbar } from '../components/Navigation';
import { User, UserRole } from '../types';
import { MOCK_ADMIN, MOCK_TEACHER, MOCK_STUDENT } from '../constants';

const DashboardLayout: React.FC = () => {
  const location = useLocation();
  
  // Simple role detection based on path for mock purposes
  const getRole = (): UserRole => {
    if (location.pathname.startsWith('/admin')) return UserRole.ADMIN;
    if (location.pathname.startsWith('/teacher')) return UserRole.TEACHER;
    return UserRole.STUDENT;
  };

  const role = getRole();
  const user = role === UserRole.ADMIN ? MOCK_ADMIN : role === UserRole.TEACHER ? MOCK_TEACHER : MOCK_STUDENT;

  const getTitle = () => {
    const path = location.pathname;
    if (path.includes('dashboard')) return 'Overview';
    if (path.includes('users')) return 'User Management';
    if (path.includes('subjects')) return 'Courses';
    if (path.includes('exams')) return 'Assessments';
    if (path.includes('progress')) return 'Performance Analytics';
    if (path.includes('settings')) return 'General Settings';
    return 'LMS Pro';
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-background-dark transition-colors duration-200">
      <Sidebar user={user} role={role} />
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar title={getTitle()} user={user} />
        <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
