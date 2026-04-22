import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export  function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'solar:home-2-linear' },
    { name: 'Practice', path: '/practice', icon: 'solar:book-bookmark-linear' },
    { name: 'Analytics', path: '#', icon: 'solar:chart-square-linear' },
    { name: 'Mock Exams', path: '#', icon: 'solar:target-linear' },
  ];

  return (
    <div className="antialiased h-[100dvh] w-full overflow-hidden flex flex-col md:flex-row bg-[#0B1120]">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 h-full border-r border-white/5 bg-[#0B1120] flex-col flex-shrink-0 z-20">
        {/* Logo */}
        <div className="h-20 px-6 flex items-center border-b border-white/5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0B1120] transition-transform group-hover:scale-105">
              <iconify-icon icon="solar:diploma-linear" width="28" height="28" style={{ strokeWidth: 1 }}></iconify-icon>
            </div>
            <span className="text-xl font-medium tracking-tight text-white">EduPractice</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                  isActive 
                    ? 'bg-[#f99c00]/10 text-[#f99c00] font-medium' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <iconify-icon 
                  icon={item.icon} 
                  width="28" 
                  height="28" 
                  className={isActive ? '' : 'group-hover:text-white transition-colors'} 
                  style={{ strokeWidth: 1 }}
                ></iconify-icon>
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
          
          <div className="pt-6 pb-2">
            <p className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">Subjects</p>
          </div>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-sm">Physics</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors group">
            <div className="w-2 h-2 rounded-full bg-rose-500"></div>
            <span className="text-sm">Mathematics</span>
          </a>
        </nav>

        {/* Bottom User Profile */}
        <div className="p-4 border-t border-white/5">
          <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/fd86d650-37a4-4a87-a832-38f8d246494a/a14eeb81-d59e-4bcb-a228-5249b5a17192-pp.png?v=1776510809689" alt="Sarah K." className="w-9 h-9 rounded-full object-cover border border-white/10" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Sarah K.</p>
              <p className="text-xs text-slate-500 truncate">Free Plan</p>
            </div>
            <iconify-icon icon="solar:alt-arrow-right-linear" width="24" height="24" className="text-slate-500" style={{ strokeWidth: 1 }}></iconify-icon>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#0B1120]">
        {/* Background Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f99c00]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

        {/* Top Header */}
        <header className="h-16 md:h-20 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-[#0B1120]/80 backdrop-blur-md z-10 shrink-0">
          <Link to="/" className="md:hidden flex items-center gap-2 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#0B1120]">
              <iconify-icon icon="solar:diploma-linear" width="28" height="28" style={{ strokeWidth: 1 }}></iconify-icon>
            </div>
          </Link>

          <div className="hidden md:block relative w-96">
            <iconify-icon icon="solar:magnifier-linear" width="24" height="24" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ strokeWidth: 1 }}></iconify-icon>
            <input type="text" placeholder="Search topics, questions..." className="w-full bg-[#111827] border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#f99c00]/50 focus:ring-1 focus:ring-[#f99c00]/50 transition-all" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="font-mono-custom text-xs text-slate-500 bg-white/5 border border-white/10 rounded px-1.5 py-0.5">⌘</kbd>
              <kbd className="font-mono-custom text-xs text-slate-500 bg-white/5 border border-white/10 rounded px-1.5 py-0.5">K</kbd>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-full border border-white/5 bg-[#111827]">
              <iconify-icon icon="solar:fire-linear" width="20" height="20" className="text-[#f99c00]" style={{ strokeWidth: 1 }}></iconify-icon>
              <span className="text-xs md:text-sm font-medium text-slate-300">12<span className="hidden sm:inline"> Days</span></span>
            </div>
            
            <button className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <iconify-icon icon="solar:bell-linear" width="28" height="28" style={{ strokeWidth: 1 }}></iconify-icon>
              <span className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-2 h-2 rounded-full bg-[#f99c00] border-2 border-[#0B1120]"></span>
            </button>
            
            <button className="hidden md:flex w-11 h-11 items-center justify-center rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors">
              <iconify-icon icon="solar:settings-linear" width="28" height="28" style={{ strokeWidth: 1 }}></iconify-icon>
            </button>

            <a href="#" className="md:hidden ml-1 w-10 h-10 rounded-full border border-white/10 overflow-hidden block">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/fd86d650-37a4-4a87-a832-38f8d246494a/a14eeb81-d59e-4bcb-a228-5249b5a17192-pp.png?v=1776510809689" alt="Sarah K." className="w-full h-full object-cover" />
            </a>
          </div>
        </header>

        {/* Dynamic Route Content container */}
        <div className="flex-1 overflow-hidden z-10 flex flex-col relative">
          {children ? children : <Outlet />}
        </div>
      </main>

      {/* Mobile Bottom Navigation Bar (Icons Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[60px] bg-[#0B1120]/95 backdrop-blur-lg border-t border-white/5 flex items-center justify-around px-2 z-50 pb-safe">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex items-center justify-center w-16 h-full transition-colors ${
                isActive ? 'text-[#f99c00]' : 'text-slate-500 hover:text-white'
              }`}
              aria-label={item.name}
            >
              <iconify-icon icon={item.icon} width="26" height="26" style={{ strokeWidth: 1.5 }}></iconify-icon>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}