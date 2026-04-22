import React from 'react';

export default function dashboardUI() {
  return (
    <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        
        {/* Mobile Search Bar */}
        <div className="md:hidden relative w-full mb-2">
          <iconify-icon icon="solar:magnifier-linear" width="24" height="24" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" style={{ strokeWidth: 1 }}></iconify-icon>
          <input type="text" placeholder="Search topics, questions..." className="w-full bg-[#111827] border border-white/5 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#f99c00]/50 focus:ring-1 focus:ring-[#f99c00]/50 transition-all" />
        </div>

        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-1.5 md:mb-2">Welcome back, Sarah</h1>
            <p className="text-xs md:text-sm text-slate-400">You're making great progress. Keep up the momentum!</p>
          </div>
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f99c00] text-[#0B1120] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#f99c00]/90 transition-colors">
            <iconify-icon icon="solar:play-circle-linear" width="24" height="24" style={{ strokeWidth: 1 }}></iconify-icon>
            Resume Practice
          </button>
        </div>

        {/* Stats Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {/* Stat 1 */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-3 sm:p-4 md:p-5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-32 sm:min-h-40">
            <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 md:mb-4 gap-2">
              <div className="w-8 h-8 sm:w-9 md:w-10 md:h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <iconify-icon icon="solar:checklist-minimalistic-linear" width="22" className="sm:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:checklist-minimalistic-linear" width="24" className="hidden sm:block md:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:checklist-minimalistic-linear" width="28" className="hidden md:block" style={{ strokeWidth: 1 }}></iconify-icon>
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 sm:py-0.5 md:py-1 rounded-full whitespace-nowrap text-[0.65rem] sm:text-xs">+12%</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">Questions Solved</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-mono-custom font-medium text-white">1,248</h3>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-3 sm:p-4 md:p-5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-32 sm:min-h-40">
            <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 md:mb-4 gap-2">
              <div className="w-8 h-8 sm:w-9 md:w-10 md:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                <iconify-icon icon="solar:target-linear" width="22" className="sm:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:target-linear" width="24" className="hidden sm:block md:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:target-linear" width="28" className="hidden md:block" style={{ strokeWidth: 1 }}></iconify-icon>
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 sm:py-0.5 md:py-1 rounded-full whitespace-nowrap text-[0.65rem] sm:text-xs">+2.4%</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">Average Accuracy</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-mono-custom font-medium text-white">86.5%</h3>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-3 sm:p-4 md:p-5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-32 sm:min-h-40">
            <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 md:mb-4 gap-2">
              <div className="w-8 h-8 sm:w-9 md:w-10 md:h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0">
                <iconify-icon icon="solar:clock-circle-linear" width="22" className="sm:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:clock-circle-linear" width="24" className="hidden sm:block md:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:clock-circle-linear" width="28" className="hidden md:block" style={{ strokeWidth: 1 }}></iconify-icon>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-white/5 px-2 py-0.5 sm:py-0.5 md:py-1 rounded-full whitespace-nowrap text-[0.65rem] sm:text-xs">Month</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">Study Time</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-mono-custom font-medium text-white">42h 15m</h3>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="bg-[#111827] border border-white/5 rounded-2xl p-3 sm:p-4 md:p-5 hover:border-white/10 transition-colors flex flex-col justify-between min-h-32 sm:min-h-40">
            <div className="flex items-start sm:items-center justify-between mb-2 sm:mb-3 md:mb-4 gap-2">
              <div className="w-8 h-8 sm:w-9 md:w-10 md:h-10 rounded-xl bg-[#f99c00]/10 flex items-center justify-center text-[#f99c00] shrink-0">
                <iconify-icon icon="solar:cup-star-linear" width="22" className="sm:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:cup-star-linear" width="24" className="hidden sm:block md:hidden" style={{ strokeWidth: 1 }}></iconify-icon>
                <iconify-icon icon="solar:cup-star-linear" width="28" className="hidden md:block" style={{ strokeWidth: 1 }}></iconify-icon>
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 sm:py-0.5 md:py-1 rounded-full whitespace-nowrap text-[0.65rem] sm:text-xs">Top 5%</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-slate-400 mb-0.5 sm:mb-1 truncate">Global Rank</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-mono-custom font-medium text-white">#4,291</h3>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Right Column */}
          <div className="order-1 md:order-2 md:col-span-1 space-y-6 md:space-y-8">
            {/* Daily Goal Card */}
            <div className="bg-gradient-to-b from-[#111827] to-[#111827]/50 border border-white/5 rounded-2xl p-5 sm:p-6 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-white/5 transform rotate-12 pointer-events-none">
                <iconify-icon icon="solar:target-linear" width="140" height="140" style={{ strokeWidth: 1 }}></iconify-icon>
              </div>

              <div className="relative z-10">
                <h3 className="text-base font-medium tracking-tight text-white mb-1.5">Daily Goal</h3>
                <p className="text-xs text-slate-400 mb-5 sm:mb-6 pr-8">Complete 50 questions daily to keep your streak alive.</p>
                
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-2xl sm:text-3xl font-mono-custom font-medium text-white leading-none">32</span>
                  <span className="text-xs sm:text-sm text-slate-500 leading-relaxed">/ 50</span>
                </div>
                
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3 sm:mb-4">
                  <div className="h-full bg-[#f99c00] rounded-full" style={{ width: '64%' }}></div>
                </div>
                
                <p className="text-xs text-[#f99c00]">18 questions remaining</p>
              </div>
            </div>

            {/* Subject Mastery Progress */}
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 sm:p-6">
              <h3 className="text-base font-medium tracking-tight text-white mb-5">Subject Mastery</h3>
              
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-slate-300">Physics</span>
                    <span className="text-xs font-mono-custom text-white">74%</span>
                  </div>
                  <div className="h-2 w-full bg-[#0B1120] rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-slate-300">Mathematics</span>
                    <span className="text-xs font-mono-custom text-white">88%</span>
                  </div>
                  <div className="h-2 w-full bg-[#0B1120] rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-rose-500 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
                

              </div>

              <button className="w-full mt-6 sm:mt-8 py-2.5 rounded-lg border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
                View Detailed Syllabus
              </button>
            </div>
            
            {/* Settings Toggle */}
            <div className="hidden md:flex bg-[#111827] border border-white/5 rounded-2xl p-5 items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-white mb-1">Study Reminders</h4>
                <p className="text-xs text-slate-500">Receive daily practice alerts</p>
              </div>
              <div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-slate-600 appearance-none cursor-pointer z-10 transition-all duration-300 checked:bg-white" defaultChecked />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-700 cursor-pointer transition-colors duration-300"></label>
              </div>
            </div>
          </div>

          {/* Left Column */}
          <div className="order-2 md:order-1 md:col-span-2 space-y-6 md:space-y-8">
            {/* Activity Chart Area */}
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-base font-medium tracking-tight text-white">Learning Activity</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">Questions answered over the last 7 days</p>
                </div>
                <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs sm:text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#f99c00]/50 appearance-none pr-8 relative custom-select w-full sm:w-auto">
                  <option value="7" className="bg-[#111827]">Last 7 days</option>
                  <option value="30" className="bg-[#111827]">Last 30 days</option>
                </select>
              </div>

              {/* Responsive Mock Bar Chart */}
              <div className="h-40 sm:h-48 flex items-end justify-between gap-1.5 sm:gap-2 mt-4 px-1 sm:px-2">
                {[
                  { h: '40%', d: 'M', v: '24' },
                  { h: '65%', d: 'T', v: '45' },
                  { h: '30%', d: 'W', v: '18' },
                  { h: '90%', d: 'T', v: '72', active: true },
                  { h: '50%', d: 'F', v: '32' },
                  { h: '75%', d: 'S', v: '54' },
                  { h: '20%', d: 'S', v: '12' },
                ].map((bar, i) => (
                  <div key={i} className="w-full flex flex-col justify-end gap-2 group">
                    <div 
                      className={`w-full rounded-t-sm transition-colors relative shadow-[0_0_10px_rgba(249,156,0,0.3)] ${bar.active ? 'bg-[#f99c00]' : 'bg-[#f99c00]/20 hover:bg-[#f99c00]'}`} 
                      style={{ height: bar.h }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#2a3441] text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">{bar.v} Qs</div>
                    </div>
                    <span className={`text-xs text-center font-mono-custom ${bar.active ? 'text-[#f99c00] font-medium' : 'text-slate-500'}`}>{bar.d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity List */}
            <div className="bg-[#111827] border border-white/5 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <h3 className="text-base font-medium tracking-tight text-white">Recent Sessions</h3>
                <button className="text-xs sm:text-sm text-[#f99c00] hover:text-[#f99c00]/80 transition-colors">View all</button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {[
                  { title: "Kinematics Practice Test", sub: "Physics • 25 Qs", icon: "solar:ruler-cross-pen-linear", score: "92%", time: "2h ago", colorBg: "bg-blue-500/10", colorText: "text-blue-500", scoreColor: "text-emerald-400" },
                  { title: "Integration Fundamentals", sub: "Math • 15 Qs", icon: "solar:calculator-linear", score: "78%", time: "Yesterday", colorBg: "bg-rose-500/10", colorText: "text-rose-500", scoreColor: "text-amber-400" },
                  { title: "Derivatives Quiz", sub: "Math • 20 Qs", icon: "solar:graph-up-linear", score: "100%", time: "3d ago", colorBg: "bg-purple-500/10", colorText: "text-purple-500", scoreColor: "text-emerald-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 sm:p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                      <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg ${item.colorBg} flex items-center justify-center ${item.colorText} shrink-0`}>
                        <iconify-icon icon={item.icon} width="24" height="24" style={{ strokeWidth: 1 }}></iconify-icon>
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-medium text-white mb-0.5 truncate">{item.title}</h4>
                        <p className="text-xs text-slate-500 truncate">{item.sub}</p>
                      </div>
                    </div>
                    <div className="text-right pl-2 shrink-0">
                      <span className={`block text-xs sm:text-sm font-medium ${item.scoreColor} mb-0.5`}>{item.score}</span>
                      <span className="block text-xs text-slate-500">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}