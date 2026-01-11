
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Fix: Added Card to the imported components from Shared.tsx
import { Button, Card } from '../components/Shared';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<'Student' | 'Teacher' | 'Admin'>('Student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'Admin') navigate('/admin/dashboard');
    else if (role === 'Teacher') navigate('/teacher/dashboard');
    else navigate('/student/dashboard');
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="relative hidden lg:flex w-[45%] flex-col justify-between bg-slate-100 dark:bg-slate-900 p-12 overflow-hidden border-r border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"></div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined text-[24px]">school</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">LMS Pro</h2>
        </div>
        <div className="relative z-10 my-auto flex flex-col gap-8">
          <img src="https://picsum.photos/600/400" className="rounded-2xl shadow-2xl" alt="Students" />
          <div className="space-y-4 max-w-lg">
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Empowering Education. <br/>
              <span className="text-primary">Connect, Learn, and Grow.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              Join thousands of students and teachers on the most advanced learning platform.
            </p>
          </div>
        </div>
        <div className="relative z-10 flex items-center gap-4 rounded-xl bg-white/50 dark:bg-black/20 p-4 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img key={i} className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-800" src={`https://picsum.photos/seed/${i}/100`} alt="Avatar" />
            ))}
          </div>
          <p className="text-sm font-medium">Trusted by top institutions worldwide.</p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center bg-white dark:bg-background-dark lg:w-[55%] p-8 sm:p-12">
        <div className="mx-auto w-full max-w-[480px]">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Welcome back!</h2>
          <p className="text-slate-500 mb-8">Please enter your details to sign in.</p>
          
          <div className="mb-8">
            <p className="mb-3 text-sm font-medium">I am a:</p>
            <div className="flex h-12 w-full items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
              {(['Student', 'Teacher', 'Admin'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 h-full rounded-lg text-sm font-bold transition-all ${
                    role === r 
                      ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary" 
                placeholder="name@school.edu" 
                type="email" 
                required 
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Password</label>
                <a href="#" className="text-sm font-bold text-primary hover:underline">Forgot password?</a>
              </div>
              <input 
                className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-primary focus:border-primary" 
                placeholder="••••••••" 
                type="password" 
                required 
              />
            </div>
            <Button type="submit" className="w-full h-12">Log In to Account</Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800"></div></div>
            <div className="relative flex justify-center text-sm"><span className="bg-white dark:bg-background-dark px-2 text-slate-500">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="gap-3"><img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="G" /> Google</Button>
            <Button variant="outline" className="gap-3"><img src="https://www.microsoft.com/favicon.ico" className="w-4 h-4" alt="M" /> Microsoft</Button>
          </div>
          
          <p className="mt-8 text-center text-sm text-slate-500">
            Don't have an account? <Link to="/register" className="font-bold text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export const Register: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-8 bg-slate-50 dark:bg-background-dark">
      {/* Fix: Card is now properly imported */}
      <Card className="w-full max-w-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Create your account</h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-medium dark:text-slate-300">Full Name</label>
            <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" placeholder="John Doe" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium dark:text-slate-300">Email Address</label>
            <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" type="email" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium dark:text-slate-300">Password</label>
            <input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium dark:text-slate-300">Role</label>
            <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white">
              <option>Student</option>
              <option>Teacher</option>
            </select>
          </div>
          <Button className="w-full h-11 mt-4">Create Account</Button>
          <p className="text-center text-sm text-slate-500 mt-4">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Log in</Link>
          </p>
        </form>
      </Card>
    </div>
  );
};
