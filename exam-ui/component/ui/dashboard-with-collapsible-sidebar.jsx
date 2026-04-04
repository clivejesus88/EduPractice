import React, { useState, Component } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboardIcon,
  BookOpenIcon,
  PlayIcon,
  BarChart3Icon,
  SettingsIcon,
  GraduationCapIcon,
  MenuIcon,
  XIcon,
  SparklesIcon,
  UploadCloudIcon,
  SendIcon,
  BotIcon,
  ImageIcon,
  CheckIcon,
  XCircleIcon,
  LightbulbIcon,
  Loader2Icon,
  SearchIcon,
  BellIcon,
  ChevronRightIcon,
  BookmarkIcon,
  VideoIcon,
  MapPinIcon,
  ChevronDownIcon,
  CheckCircle2Icon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
const navItems = [
  {
    icon: LayoutDashboardIcon,
    label: 'Overview',
    active: true,
  },
  {
    icon: BookOpenIcon,
    label: 'My Subjects',
    active: false,
  },
  {
    icon: PlayIcon,
    label: 'Practice',
    active: false,
  },
  {
    icon: SparklesIcon,
    label: 'AI Tutor',
    active: false,
    isNew: true,
  },
  {
    icon: BarChart3Icon,
    label: 'Results',
    active: false,
  },
  {
    icon: SettingsIcon,
    label: 'Settings',
    active: false,
  },
]
export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // Workboard state per subject
  const [activeSubjectTab, setActiveSubjectTab] = useState('physics')
  const [workboardStates, setWorkboardStates] = useState
  ({
    physics: 'empty',
    mathematics: 'empty',
    chemistry: 'empty',
  })
  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false)
  const [chatInput, setChatInput] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'ai',
      content:
        "Hi! 👋 I'm Maestro, your AI study assistant. I can help you with Physics, Mathematics, and more. What would you like to learn today?",
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  // Workboard handlers
  const handleUpload = () => {
    setWorkboardStates((prev) => ({
      ...prev,
      [activeSubjectTab]: 'uploaded',
    }))
  }
  const handleAnalyze = () => {
    setWorkboardStates((prev) => ({
      ...prev,
      [activeSubjectTab]: 'analyzing',
    }))
    setTimeout(() => {
      setWorkboardStates((prev) => ({
        ...prev,
        [activeSubjectTab]: 'feedback',
      }))
    }, 2000)
  }
  const handleResetWorkboard = () => {
    setWorkboardStates((prev) => ({
      ...prev,
      [activeSubjectTab]: 'empty',
    }))
  }
  // Chatbot handlers
  const handleSendMessage = (e) => {
    if (e) e.preventDefault()
    if (!chatInput.trim()) return
    const newMessage = {
      role: 'user',
      content: chatInput,
    }
    setChatMessages((prev) => [...prev, newMessage])
    setChatInput('')
    setIsTyping(true)
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content:
            "That's a great question! Let's break it down step-by-step to make it easier to understand.",
        },
      ])
      setIsTyping(false)
    }, 1500)
  }
  const handleQuickSuggestion = (suggestion) => {
    setChatInput(suggestion)
    setTimeout(() => handleSendMessage(), 50)
  }
  const currentDate = new Date()
  const dayName = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
  })
  const fullDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  // Circular Progress Component
  const CircularProgress = ({
    percentage,
    color,
    label,
    subtitle,
  }) => {
    const radius = 36
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference
    return (
      <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center hover:border-amber-500/20 transition-colors">
        <div className="relative w-24 h-24 mb-4">
          {/* Background circle */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-800"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className={color}
              style={{
                transition: 'stroke-dashoffset 1s ease-in-out',
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{percentage}%</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-200 mb-1">{label}</h3>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    )
  }
  return (
    <div className="min-h-screen w-full bg-[#0B1120] text-white flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#111827] border-b border-gray-800 px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <GraduationCapIcon className="w-5 h-5 text-gray-900" />
          </div>
          <span className="text-lg font-bold">EduPractice</span>
        </Link>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 text-white"
        >
          {sidebarOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-[#111827] border-r border-gray-800 p-6 z-50 transition-transform duration-300 flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <Link to="/" className="flex items-center gap-2 mb-10">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <GraduationCapIcon className="w-6 h-6 text-gray-900" />
          </div>
          <span className="text-xl font-bold">EduPractice</span>
        </Link>

        <nav className="space-y-2 flex-grow">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSidebarOpen(false)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors ${item.active ? 'bg-amber-500 text-gray-900 font-semibold' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </div>
              {item.isNew && (
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${item.active ? 'bg-gray-900 text-amber-500' : 'bg-amber-500 text-gray-900'}`}
                >
                  NEW
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Premium CTA */}
        <div className="mt-auto pt-6">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-5 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-white font-bold mb-1">Get Premium</h4>
            <p className="text-white/80 text-xs mb-4">
              Lot of services & features
            </p>
            <button className="w-full py-2.5 bg-white text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 p-4 sm:p-6 lg:p-8 min-h-screen max-w-[1600px] mx-auto w-full">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">{dayName}</h1>
            <p className="text-sm text-gray-400">{fullDate}</p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative hidden sm:block w-64 lg:w-80">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search for subjects..."
                className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2.5 bg-[#1a1f2e] border border-gray-700 rounded-full hover:bg-gray-800 transition-colors">
                <BellIcon className="w-5 h-5 text-gray-300" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full border-2 border-[#1a1f2e]" />
              </button>
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-gray-900 font-bold border-2 border-[#1a1f2e] cursor-pointer">
                CG
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Banner */}
        <motion.div
          className="w-full bg-gradient-to-r from-amber-500/20 via-[#111827] to-teal-500/10 border border-gray-800 rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-500/10 to-transparent pointer-events-none" />
          {/* Abstract decorative shapes */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 w-32 h-32 border-4 border-amber-500/20 rounded-full hidden md:block" />
          <div className="absolute right-32 top-1/4 w-16 h-16 bg-teal-500/10 rounded-lg rotate-12 hidden md:block" />

          <div className="relative z-10 max-w-xl">
            <p className="text-amber-400 font-medium mb-2 flex items-center gap-2">
              Welcome Back 👋
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Corey George
            </h2>
            <Link
              to="#"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
            >
              Go back to the course <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <CircularProgress
            percentage={67}
            color="text-amber-500"
            label="Weekly Analysis"
            subtitle="5 hrs 12 min"
          />
          <CircularProgress
            percentage={84}
            color="text-teal-500"
            label="Total Questions"
            subtitle="1,247 Completed"
          />
          <CircularProgress
            percentage={72}
            color="text-purple-500"
            label="Course Progress"
            subtitle="3 Subjects Active"
          />
        </div>

        {/* Two Column Layout Below */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Recent Practice Table */}
          <div className="lg:col-span-2 bg-[#111827] border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">Recent Practice Sessions</h2>
              <a
                href="#"
                className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                View all <ChevronRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-gray-500 text-sm border-b border-gray-800">
                    <th className="pb-3 font-medium">Subject name</th>
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Score</th>
                    <th className="pb-3 font-medium">Type</th>
                    <th className="pb-3 font-medium">Save</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    {
                      name: 'Basics of Kinematics',
                      date: 'Feb 12',
                      score: '15/20',
                      type: 'QUIZ',
                      color: 'bg-blue-500',
                    },
                    {
                      name: 'Calculus Integration',
                      date: 'Feb 14',
                      score: '07/10',
                      type: 'PRACTICE',
                      color: 'bg-amber-500',
                    },
                    {
                      name: 'Chemical Bonding',
                      date: 'Feb 15',
                      score: '18/20',
                      type: 'EXAM',
                      color: 'bg-purple-500',
                    },
                    {
                      name: 'Thermodynamics Laws',
                      date: 'Feb 18',
                      score: '12/15',
                      type: 'QUIZ',
                      color: 'bg-teal-500',
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors"
                    >
                      <td className="py-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg ${row.color} bg-opacity-20 flex items-center justify-center`}
                          >
                            <BookOpenIcon
                              className={`w-4 h-4 ${row.color.replace('bg-', 'text-')}`}
                            />
                          </div>
                          <span className="font-medium text-gray-200">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 text-gray-400">{row.date}</td>
                      <td className="py-4 font-medium">{row.score}</td>
                      <td className="py-4">
                        <span className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md text-xs font-semibold tracking-wide">
                          {row.type}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="text-gray-500 hover:text-amber-400 transition-colors">
                          <BookmarkIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Schedule & Performance */}
          <div className="space-y-6">
            {/* Upcoming Classes */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-6">Upcoming Classes</h2>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="text-gray-400 font-medium pt-1 w-12">
                    10:23
                  </div>
                  <div className="flex-1 bg-gray-800/30 border border-gray-800 rounded-xl p-3">
                    <h4 className="font-semibold text-gray-200 mb-1 flex items-center gap-2">
                      Programming Class{' '}
                      <CheckCircle2Icon className="w-4 h-4 text-blue-400" />
                    </h4>
                    <p className="text-xs text-amber-400 flex items-center gap-1">
                      <VideoIcon className="w-3 h-3" /> Online - Zoom Meeting
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-gray-400 font-medium pt-1 w-12">
                    14:00
                  </div>
                  <div className="flex-1 bg-gray-800/30 border border-gray-800 rounded-xl p-3">
                    <h4 className="font-semibold text-gray-200 mb-1">
                      Physics Lab
                    </h4>
                    <p className="text-xs text-gray-400 flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3" /> Room 204
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Show All
              </button>
            </div>

            {/* Performance Gauge */}
            <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Performance</h2>
                <button className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-md">
                  Monthly <ChevronDownIcon className="w-3 h-3" />
                </button>
              </div>

              <div className="flex items-center gap-4 mb-6 text-xs text-gray-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" /> Point
                  Progress
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-amber-500 rounded-full" /> Point
                  Decrease
                </div>
              </div>

              <div className="relative w-48 h-24 mx-auto mb-4 overflow-hidden">
                {/* SVG Semi-circle gauge */}
                <svg
                  viewBox="0 0 100 50"
                  className="w-full h-full overflow-visible"
                >
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 10 50 A 40 40 0 0 1 70 15"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Needle */}
                  <line
                    x1="50"
                    y1="50"
                    x2="65"
                    y2="25"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <circle cx="50" cy="50" r="4" fill="#f59e0b" />
                  <circle cx="50" cy="50" r="2" fill="#111827" />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Your Point:{' '}
                  <span className="text-white font-bold text-lg">8,966</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject Workboards */}
        <motion.div
          className="bg-[#111827] border border-gray-800 rounded-2xl mt-8 overflow-hidden"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
        >
          {/* Tabs */}
          <div className="flex border-b border-gray-800 overflow-x-auto hide-scrollbar">
            {(['physics', 'mathematics', 'chemistry']).map(
              (subject) => (
                <button
                  key={subject}
                  onClick={() => setActiveSubjectTab(subject)}
                  className={`px-6 py-4 font-medium text-sm capitalize whitespace-nowrap transition-colors relative ${activeSubjectTab === subject ? 'text-amber-400' : 'text-gray-400 hover:text-gray-200'}`}
                >
                  {subject} Workboard
                  {activeSubjectTab === subject && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400"
                    />
                  )}
                </button>
              ),
            )}
          </div>

          {/* Workboard Content */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
              {/* Left: Upload Zone */}
              <div className="xl:col-span-3">
                {workboardStates[activeSubjectTab] === 'empty' && (
                  <div
                    onClick={handleUpload}
                    className="w-full h-64 border-2 border-dashed border-gray-700 rounded-2xl flex flex-col items-center justify-center bg-gray-800/30 hover:bg-gray-800/50 hover:border-amber-500/50 transition-all cursor-pointer group"
                  >
                    <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <UploadCloudIcon className="w-8 h-8 text-gray-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <p className="text-base font-medium text-gray-300 mb-1">
                      Drag & drop your work here
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      or click to browse
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                )}

                {workboardStates[activeSubjectTab] !== 'empty' && (
                  <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-700 relative group">
                    <img
                      src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop"
                      alt="Uploaded work"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-700">
                        <ImageIcon className="w-4 h-4 text-amber-400" />
                        <span className="text-sm font-medium">
                          {activeSubjectTab}_homework.jpg
                        </span>
                      </div>
                      {workboardStates[activeSubjectTab] === 'uploaded' && (
                        <button
                          onClick={handleResetWorkboard}
                          className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all"
                        >
                          <XIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    {workboardStates[activeSubjectTab] === 'analyzing' && (
                      <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm flex flex-col items-center justify-center">
                        <Loader2Icon className="w-10 h-10 text-amber-400 animate-spin mb-4" />
                        <p className="text-amber-400 font-medium animate-pulse">
                          Analyzing your work...
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {workboardStates[activeSubjectTab] === 'uploaded' && (
                  <button
                    onClick={handleAnalyze}
                    className="w-full mt-4 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-xl font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <SparklesIcon className="w-5 h-5" />
                    Get AI Feedback
                  </button>
                )}

                {workboardStates[activeSubjectTab] === 'feedback' && (
                  <button
                    onClick={handleResetWorkboard}
                    className="w-full mt-4 py-3.5 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <UploadCloudIcon className="w-5 h-5" />
                    Upload Another File
                  </button>
                )}
              </div>

              {/* Right: AI Feedback Panel */}
              <div className="xl:col-span-2 bg-gray-800/30 border border-gray-800 rounded-2xl p-5 flex flex-col h-full min-h-[300px]">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-800">
                  <h3 className="font-bold flex items-center gap-2">
                    Feedback
                    {workboardStates[activeSubjectTab] === 'feedback' && (
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    )}
                  </h3>
                  {workboardStates[activeSubjectTab] === 'feedback' && (
                    <div className="bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-lg text-sm font-bold border border-amber-500/20">
                      85/100
                    </div>
                  )}
                </div>

                <div className="flex-grow flex flex-col">
                  {(workboardStates[activeSubjectTab] === 'empty' ||
                    workboardStates[activeSubjectTab] === 'uploaded') && (
                    <div className="flex-grow flex flex-col items-center justify-center text-center p-4">
                      <BotIcon className="w-12 h-12 text-gray-600 mb-4" />
                      <p className="text-gray-400 text-sm">
                        Upload your work to receive detailed feedback from our
                        AI tutor
                      </p>
                    </div>
                  )}

                  {workboardStates[activeSubjectTab] === 'analyzing' && (
                    <div className="flex-grow flex flex-col items-center justify-center">
                      <div className="flex gap-1 mb-4">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-amber-400 rounded-full"
                            animate={{
                              y: [0, -10, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm">
                        Maestro is reviewing your steps...
                      </p>
                    </div>
                  )}

                  {workboardStates[activeSubjectTab] === 'feedback' && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      className="space-y-4 overflow-y-auto pr-2"
                    >
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 bg-green-500/5 p-3 rounded-xl border border-green-500/10">
                          <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                            {activeSubjectTab === 'physics' &&
                              "Correct application of Newton's Second Law"}
                            {activeSubjectTab === 'mathematics' &&
                              'Correct setup of the definite integral'}
                            {activeSubjectTab === 'chemistry' &&
                              'Properly identified the limiting reactant'}
                          </p>
                        </div>
                        <div className="flex items-start gap-3 bg-green-500/5 p-3 rounded-xl border border-green-500/10">
                          <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                            {activeSubjectTab === 'physics' &&
                              'Proper unit conversion from km/h to m/s'}
                            {activeSubjectTab === 'mathematics' &&
                              'Excellent use of u-substitution'}
                            {activeSubjectTab === 'chemistry' &&
                              'Correct molar mass calculation'}
                          </p>
                        </div>
                        <div className="flex items-start gap-3 bg-red-500/5 p-3 rounded-xl border border-red-500/10">
                          <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300">
                            {activeSubjectTab === 'physics' &&
                              'Check your final calculation — the acceleration should be 4.5 m/s²'}
                            {activeSubjectTab === 'mathematics' &&
                              "Don't forget to add the constant of integration (+C)"}
                            {activeSubjectTab === 'chemistry' &&
                              'Check the balancing of oxygen atoms on the product side'}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-800">
                        <h4 className="text-sm font-bold text-gray-400 mb-3 flex items-center gap-2">
                          <LightbulbIcon className="w-4 h-4 text-amber-400" />
                          Suggestions
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          You've got the concepts down perfectly! Just
                          double-check your arithmetic in the final step. Try
                          breaking the problem into smaller parts to avoid
                          simple errors.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Maestro AI Floating Chatbot (Kept exactly as requested) */}
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {chatOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                  transformOrigin: 'bottom right',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: 20,
                }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                }}
                className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[500px] max-h-[calc(100vh-8rem)] bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Chat Header */}
                <div className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 p-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <BotIcon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#111827] rounded-full" />
                    </div>
                    <div>
                      <h3 className="font-bold flex items-center gap-1.5">
                        Maestro AI{' '}
                        <SparklesIcon className="w-3.5 h-3.5 text-amber-400" />
                      </h3>
                      <p className="text-xs text-gray-400">
                        Your AI Study Assistant
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setChatOpen(false)}
                    className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-grow overflow-y-auto p-4 space-y-4 flex flex-col">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-amber-500/10 text-amber-100 border border-amber-500/20 rounded-tr-sm' : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-sm'}`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl rounded-tl-sm flex gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                            animate={{
                              y: [0, -4, 0],
                            }}
                            transition={{
                              duration: 0.6,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Suggestions (only show if just 1 message) */}
                  {chatMessages.length === 1 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {[
                        "Explain Newton's Laws",
                        'Help with Calculus',
                        'Quiz me on Physics',
                      ].map((suggestion, i) => (
                        <button
                          key={i}
                          onClick={() => handleQuickSuggestion(suggestion)}
                          className="text-xs bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 px-3 py-1.5 rounded-full transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-gray-900/50 border-t border-gray-800">
                  <form onSubmit={handleSendMessage} className="relative">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask Maestro anything..."
                      className="w-full bg-[#1a1f2e] border border-gray-700 rounded-xl pl-4 pr-12 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={!chatInput.trim() || isTyping}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-amber-500 hover:text-amber-400 disabled:text-gray-600 disabled:cursor-not-allowed transition-colors"
                    >
                      <SendIcon className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            onClick={() => setChatOpen(!chatOpen)}
            className="relative w-14 h-14 sm:w-16 sm:h-16 bg-amber-500 hover:bg-amber-400 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20 transition-colors z-50"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            {/* Pulse ring */}
            {!chatOpen && (
              <span className="absolute inset-0 rounded-full border-2 border-amber-500 animate-ping opacity-75" />
            )}

            {chatOpen ? (
              <XIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
            ) : (
              <BotIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-900" />
            )}
          </motion.button>
        </div>
      </main>
    </div>
  )
}
