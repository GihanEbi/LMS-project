
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import DashboardLayout from './layouts/DashboardLayout';
import Landing from './pages/Landing';
import { Login, Register } from './pages/Auth';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SubjectList from './pages/SubjectList';
import SubjectDetail from './pages/SubjectDetail';
import ProgressAnalytics from './pages/ProgressAnalytics';
import Settings from './pages/Settings';
import Calendar from './pages/Calendar';
import TeacherSubjects from './pages/TeacherSubjects';
import TeacherExams from './pages/TeacherExams';
import TeacherStudents from './pages/TeacherStudents';
import AdminUsers from './pages/AdminUsers';
import AdminCourses from './pages/AdminCourses';
import AdminReports from './pages/AdminReports';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="reports" element={<AdminReports />} />
          </Route>

          {/* Teacher Routes */}
          <Route path="/teacher" element={<DashboardLayout />}>
            <Route path="dashboard" element={<TeacherDashboard />} />
            <Route path="subjects" element={<TeacherSubjects />} />
            <Route path="exams" element={<TeacherExams />} />
            <Route path="students" element={<TeacherStudents />} />
          </Route>

          {/* Student Routes */}
          <Route path="/student" element={<DashboardLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>

          {/* Common Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/subjects" element={<SubjectList />} />
            <Route path="/subjects/:id" element={<SubjectDetail />} />
            <Route path="/progress" element={<ProgressAnalytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* 404 Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
