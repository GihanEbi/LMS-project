
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Shared';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark">
      {/* Nav */}
      <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                <span className="material-symbols-outlined">school</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">LMS Pro</span>
            </div>
            <div className="hidden md:flex flex-1 justify-center gap-8">
              {['Features', 'Solutions', 'Pricing', 'Resources'].map(item => (
                <a key={item} className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">{item}</a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
              <Button onClick={() => navigate('/register')}>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-primary dark:border-blue-900/30 dark:bg-blue-900/20 mx-auto lg:mx-0">
              <span className="flex h-1.5 w-1.5 rounded-full bg-primary"></span>
              New Version 2.0 Released
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Empower Learning. <br className="hidden lg:block"/>
              <span className="text-primary">Streamline Management.</span>
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              The all-in-one LMS designed for modern education. Tools for students, teachers, and administrators to succeed together with seamless integration and powerful analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button className="h-12 px-8 text-lg" onClick={() => navigate('/register')}>Get Started for Free</Button>
              <Button variant="outline" className="h-12 px-8 text-lg">View Demo</Button>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl bg-white p-2 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-white/10">
              <img 
                src="https://picsum.photos/800/600" 
                className="w-full aspect-[4/3] rounded-xl object-cover" 
                alt="Dashboard" 
              />
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur dark:bg-slate-800/90">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Student Engagement</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">+24% Increase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-background-light dark:bg-background-dark/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Everything you need to succeed</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Tailored features for every role in your educational ecosystem.</p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: 'monitoring', title: 'Real-time Progress', desc: 'Visual dashboards that help students stay on top of their coursework.' },
              { icon: 'quiz', title: 'Interactive Quizzes', desc: 'Engaging assessment tools with instant feedback for students.' },
              { icon: 'smartphone', title: 'Mobile Learning', desc: 'Access course materials and join discussions from any device.' },
              { icon: 'forum', title: 'Collaborative Spaces', desc: 'Built-in forums and chat groups tailored for peer-to-peer learning.' },
              { icon: 'calendar_month', title: 'Smart Scheduling', desc: 'Automated calendar integration for assignments and exams.' },
              { icon: 'library_books', title: 'Resource Library', desc: 'Centralized repository for all learning materials and lectures.' },
            ].map(f => (
              <div key={f.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-soft text-left hover:-translate-y-1 transition-all">
                <div className="mb-5 size-12 flex items-center justify-center rounded-xl bg-blue-50 text-primary dark:bg-blue-900/20">
                  <span className="material-symbols-outlined">{f.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold dark:text-white">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="material-symbols-outlined text-5xl text-primary mb-6">format_quote</span>
          <blockquote className="text-xl font-semibold leading-8 text-slate-900 dark:text-white sm:text-2xl italic">
            “LMS Pro transformed how our university handles remote learning. The distinction between student, teacher, and admin tools makes it incredibly intuitive for everyone involved.”
          </blockquote>
          <div className="mt-10">
            <p className="font-bold text-slate-900 dark:text-white">Dr. Sarah Jenkins</p>
            <p className="text-slate-600 dark:text-slate-400">Dean of Technology, Westside University</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 dark:bg-background-dark dark:border-slate-800 pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-[16px]">school</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white">LMS Pro</span>
            </div>
            <p className="text-sm text-slate-500">Making education accessible, manageable, and engaging for everyone.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 dark:text-white">Product</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>Features</li><li>Pricing</li><li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 dark:text-white">Company</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>About</li><li>Blog</li><li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 dark:text-white">Legal</h4>
              <ul className="text-sm text-slate-500 space-y-2">
                <li>Privacy</li><li>Terms</li><li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
          © 2024 LMS Pro Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
