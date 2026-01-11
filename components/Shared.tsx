
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, onClick, variant = 'primary', className = '', type = 'button', disabled = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700",
    outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
    ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm"
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm ${className}`}>
    {children}
  </div>
);

export const Badge: React.FC<{ children: ReactNode; variant?: 'success' | 'warning' | 'info' | 'error' | 'neutral' }> = ({ children, variant = 'neutral' }) => {
  const colors = {
    success: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
    warning: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border-amber-100 dark:border-amber-800",
    info: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-100 dark:border-blue-800",
    error: "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-100 dark:border-red-800",
    neutral: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${colors[variant]}`}>
      {children}
    </span>
  );
};

export const ProgressBar: React.FC<{ progress: number; className?: string; color?: string }> = ({ progress, className = '', color = 'bg-primary' }) => (
  <div className={`w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden ${className}`}>
    <div 
      className={`${color} h-full transition-all duration-500`} 
      style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
    />
  </div>
);
