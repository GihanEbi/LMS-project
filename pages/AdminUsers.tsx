
import React from 'react';
import { Card, Badge, Button } from '../components/Shared';

const MOCK_USERS = [
  { id: '1', name: 'Sarah Connor', email: 'sarah.c@school.edu', role: 'Teacher', status: 'Active', joined: 'Oct 12, 2023', avatar: 'https://picsum.photos/seed/sarah/100' },
  { id: '2', name: 'John Doe', email: 'j.doe@student.edu', role: 'Student', status: 'Pending', joined: 'Oct 24, 2023', avatar: 'https://picsum.photos/seed/jdoe/100' },
  { id: '3', name: 'Mike Ross', email: 'm.ross@school.edu', role: 'Admin', status: 'Active', joined: 'Jan 05, 2023', avatar: 'https://picsum.photos/seed/mike/100' },
  { id: '4', name: 'Rachel Zane', email: 'r.zane@student.edu', role: 'Student', status: 'Active', joined: 'Sep 15, 2023', avatar: 'https://picsum.photos/seed/rachel/100' },
  { id: '5', name: 'Harvey Specter', email: 'h.specter@school.edu', role: 'Teacher', status: 'Inactive', joined: 'Jun 20, 2023', avatar: 'https://picsum.photos/seed/harvey/100' },
];

const AdminUsers: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">User Management</h1>
          <p className="text-slate-500 mt-1">Oversee all platform accounts, roles, and security settings.</p>
        </div>
        <Button className="gap-2">
          <span className="material-symbols-outlined text-[20px]">person_add</span> Invite New User
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Accounts', value: '2,842', icon: 'group', color: 'text-primary', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { label: 'Pending Approval', value: '14', icon: 'pending', color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
          { label: 'Active Today', value: '1,102', icon: 'bolt', color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
        ].map(stat => (
          <Card key={stat.label} className="p-5 flex items-center gap-4">
            <div className={`size-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-black dark:text-white">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-0 overflow-hidden border-slate-200 dark:border-slate-800">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg">All Roles</button>
            <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Teachers</button>
            <button className="px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">Students</button>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input className="pl-9 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-900 border-none rounded-xl focus:ring-primary w-full md:w-64" placeholder="Search by name or email..." />
            </div>
            <Button variant="outline" className="gap-2 text-xs">
              <span className="material-symbols-outlined text-sm">filter_list</span>
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Full Name</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_USERS.map(user => (
                <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} className="size-9 rounded-full" alt="" />
                      <div>
                        <p className="font-bold text-sm dark:text-white">{user.name}</p>
                        <p className="text-xs text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={user.role === 'Admin' ? 'error' : user.role === 'Teacher' ? 'warning' : 'info'}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`size-2 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Pending' ? 'bg-amber-500' : 'bg-slate-400'}`}></span>
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-slate-400"><span className="material-symbols-outlined text-[18px]">edit</span></button>
                      <button className="p-2 hover:bg-white dark:hover:bg-slate-700 rounded-lg text-red-400"><span className="material-symbols-outlined text-[18px]">block</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminUsers;
