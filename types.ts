
export enum UserRole {
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  STUDENT = 'STUDENT',
  GUEST = 'GUEST'
}

export enum CourseStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  AVAILABLE = 'AVAILABLE',
  NEW = 'NEW',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  joinDate?: string;
  lastActive?: string;
  status?: 'Active' | 'Inactive' | 'Pending';
}

export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  status: CourseStatus;
  progress: number;
  image: string;
  studentsCount: number;
  assignmentsCount: number;
  lastActive?: string;
}

export interface Assessment {
  id: string;
  title: string;
  courseName: string;
  dueDate: string;
  status: 'Submitted' | 'Not Started' | 'Ready to Grade' | 'Live' | 'Completed' | 'Draft';
  score?: number;
  totalPoints?: number;
  submittedCount?: number;
  totalStudents?: number;
}
