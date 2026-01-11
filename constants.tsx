
import { UserRole, CourseStatus, Course, User, Assessment } from './types';

export const MOCK_ADMIN: User = {
  id: 'adm-001',
  name: 'Tom Cook',
  email: 'admin@lms.edu',
  role: UserRole.ADMIN,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsbSReXqDCm7lhAm8s9PFb2oRhvjF1KCKidGqu9QWqSz7-mGMjxkC-7xBv7QbAccMJLUcFnQC-cUXarM5FmzdN3Bph4sFncKaJtyg_4zqoat6mjcsbFSR3gHgnW69iNYr7ycJw6dgXIBe0n8IHed_mjsPhbEfVmhlvGwCBqIBYy5YxUcGfqO_cgf5yYO6MiAJ7fccnSl4JETOaGIzaGuI4SuKkdyXE9vikSZ8QxCV_aJiZAmqsGwZioTTcH_OSO-waPIhz_finS4vH',
};

export const MOCK_TEACHER: User = {
  id: 'tch-001',
  name: 'Mr. Anderson',
  email: 'anderson@lms.edu',
  role: UserRole.TEACHER,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIFttOnQE4-sm4Luu0EjfYFmDLqpjcgj6KiYhObj7jvOSVmpbJxftee3dqyhpaYaZUCSTwNWoXfQPWM9O-utIcXyvWc921xGQKZSMApbxxM7KgWd7R5PDF17v_QjiJF65WZpVwPZ3L-WPCv2IZxmuDi1LIwdEELAxH1dhZhBNL5M2nCvmCvNl_wgOSe1H24AGFPtiR3-U1PUBhCPCiPn6266WZ9bCbgc3f7lMIKKvGCtIIJjVeAMcI5xYOLMt1S1gCw9kOglHl6z1s',
};

export const MOCK_STUDENT: User = {
  id: 'std-001',
  name: 'Alex Johnson',
  email: 'alex.j@school.edu',
  role: UserRole.STUDENT,
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtdaaYTkhaQ2KXqUjQXL0txzgNedauVjxCm3wi6YMkkYPjbLtCl-xPnlO3XjpMaybviVoEsb5FkVd6tiKcpwxF32sXO0QXBfj4D9z9Fna0PQ5LVa6X29DOnp4QdLh7Ukg5760OVkUS2HbB36HoevkTCQWqnmM_6LViaBqFqLW1hu7u270vdms10GUGyVL9-J-w0k6xlu3Q07DYLeWVgKV1lSGwsSrwf2DRFDc80JstG7A3wOBNNXzcYYigndaRTOsKZ4ydBwscWTDS',
};

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Data Science',
    instructor: 'Dr. Smith',
    category: 'Technology',
    status: CourseStatus.IN_PROGRESS,
    progress: 45,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTsFwp9DkQi6Vy9lTERVLS1ceXNOiw10rYAdn57p7RQwLKBIGdm0E9mB1YH81rC5zir2oclzBeb4sxN-JEbKXtb00_Ldf98fUDK7xKhkQdLCmpYgsWUrjatuwIxgQsMpV2MRYxyy3V5KdVlxMpQ_lvjLUAmwN-KslahAVZ_aB25_pIV4UJbdmNuVAHSBcV-m8FEbFBIG9nLEJVqhRkfTw5BFXDIThZPbXgNb8wm2bZMMLvd9GbZya9UdYp73IAuDImbH9IdRiuUuyX',
    studentsCount: 32,
    assignmentsCount: 12
  },
  {
    id: 'c2',
    title: 'Intro to UX Design',
    instructor: 'Jane Doe',
    category: 'Design',
    status: CourseStatus.NEW,
    progress: 0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQCAQQDVL20EOFiTcWavgg8gu_F6w2_uueeknkvda0sUKVvLF1KlBXIJnSXYTomBgTRAOVM9sWPZG1BD0XsKy3XPadOL_qBy6R6_soolLl7xZLJInaI5fIoYpA2COZlRqqKO60B7UXE1kBeTnezl8SCvnr0rmwVkd07bvWY8_GU9A0oZmALBQEA0mtwPyx0lFUnMIot_L4_1FiDVxmf1vFiqAcUa4i_xCFcJ3lRLchptPgK6KByCUU6wiUESwUDAEx1Is-01epGP98',
    studentsCount: 15,
    assignmentsCount: 5
  },
  {
    id: 'c3',
    title: 'Business Ethics 101',
    instructor: 'HR Dept',
    category: 'Business',
    status: CourseStatus.COMPLETED,
    progress: 100,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJGrjQQvbcV1wpTWDdhst1qts9G3hjOxARdwdWiIgpN0066JNI6W1SPS9W0LdAwhsJ3c9_J2PVD0j8j-YPoxTEw0qOeaUmvEh1KMZYfYhFmUBGoOdP-zpf98ACvM3abTVnGg9BKkiHcvIzgv9YLUkxuRSCxlqgvXiQ4oyY1XPigtT8M12fe6sBig4cSAdK9YgiITJX0y7pdIEJbCx7U84D4GNPuP3smYXsOwf_DcEMYxxLy79hnP4Y4a_eYUi07nQ4DNRlDez3l1QP',
    studentsCount: 120,
    assignmentsCount: 8
  },
  {
    id: 'c4',
    title: 'React Patterns 2024',
    instructor: 'Mark Chen',
    category: 'Development',
    status: CourseStatus.AVAILABLE,
    progress: 0,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkzdas38QlDQUsgOZ-BPJfFvrkgyp9o9A41kbIO1lyOVjCXhHINgMwUtiK5jvDxptDiktWh5hrcXKXjKsi10nKDSBewtFpQI6JxldmDF7YZwMqXTR7GwJ4lfc0qmtgeQO5Qq7VHXZiYPMKmNv-QO5D3Yna4d7utCMgUDV-OiChZMqvhhrDAvV30GQwzW-T6y7LPmLW0zR0Nu2V40CwmzM7ITo9ekwCmTbp5qALQgSBNbD1KRgUQW4RhOaDcr2btPTaM-p-GWSOD3UM',
    studentsCount: 200,
    assignmentsCount: 25
  }
];

export const ASSESSMENTS: Assessment[] = [
  {
    id: 'a1',
    title: 'Midterm Evaluation',
    courseName: 'Mathematics 101',
    dueDate: 'Oct 24, 2023',
    status: 'Ready to Grade',
    submittedCount: 15,
    totalStudents: 32,
    score: 88,
    totalPoints: 100
  },
  {
    id: 'a2',
    title: 'Physics Lab Report',
    courseName: 'Adv. Physics',
    dueDate: 'Oct 26, 2023',
    status: 'Not Started',
    submittedCount: 0,
    totalStudents: 28
  },
  {
    id: 'a3',
    title: 'Geometry Quiz 3',
    courseName: 'Geometry A',
    dueDate: 'Oct 28, 2023',
    status: 'Live',
    submittedCount: 12,
    totalStudents: 30
  }
];
