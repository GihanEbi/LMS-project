
import React from 'react';
import { Card, Button } from '../components/Shared';
import { useTheme } from '../context/ThemeContext';

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500">Manage your account details and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Public Profile</h3>
            <div className="flex gap-6 mb-8">
              <img src="https://picsum.photos/seed/alex/200" className="size-20 rounded-full object-cover ring-4 ring-slate-50 dark:ring-slate-800" alt="Profile" />
              <div className="flex flex-col justify-center">
                 <div className="flex gap-3">
                   <Button variant="outline" className="h-9 text-xs">Change Photo</Button>
                   <Button variant="ghost" className="h-9 text-xs text-red-500">Remove</Button>
                 </div>
                 <p className="text-xs text-slate-400 mt-2">Display name: Alex Johnson</p>
              </div>
            </div>
            <form className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold dark:text-slate-300">First Name</label>
                <input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900" value="Alex" readOnly />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold dark:text-slate-300">Last Name</label>
                <input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900" value="Johnson" readOnly />
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <label className="text-sm font-bold dark:text-slate-300">Bio</label>
                <textarea className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-900" rows={3} placeholder="Tell us about yourself..." />
              </div>
              <div className="col-span-2 flex justify-end pt-4">
                 <Button>Save Changes</Button>
              </div>
            </form>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold mb-6">Security</h3>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center py-3 border-b border-slate-100 dark:border-slate-800">
                <div><p className="font-bold text-sm">Two-Factor Authentication</p><p className="text-xs text-slate-500">Secure your account with 2FA</p></div>
                <Button variant="outline" className="text-xs h-8">Enable</Button>
              </div>
              <div className="flex justify-between items-center py-3">
                <div><p className="font-bold text-sm">Password</p><p className="text-xs text-slate-500">Last changed 3 months ago</p></div>
                <Button variant="outline" className="text-xs h-8">Change</Button>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-bold mb-4">Appearance</h3>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Dark Mode</span>
              <button 
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${theme === 'dark' ? 'bg-primary' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </Card>

          <Card className="p-6 border-red-200 dark:border-red-900/30 bg-red-50/30 dark:bg-red-900/10">
            <h3 className="font-bold text-red-600 mb-2">Danger Zone</h3>
            <p className="text-xs text-red-500 mb-4 leading-relaxed">Once you delete your account, there is no going back. Please be certain.</p>
            <Button variant="danger" className="w-full text-xs h-9">Delete Account</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
