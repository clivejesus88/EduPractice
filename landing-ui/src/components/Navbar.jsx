import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GraduationCapIcon, MenuIcon, XIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
// interface NavbarProps {
//   variant?: 'landing' | 'dashboard'
// }
export function Navbar({ variant = 'landing' }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="w-full px-4 sm:px-6 py-4 flex items-center justify-between relative">
      <Link to="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
          <GraduationCapIcon className="w-6 h-6 text-gray-900" />
        </div>
        <span className="text-xl font-bold text-white">EduPractice</span>
      </Link>

      {variant === 'landing' && (
        <>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#subjects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Subjects
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/login"
              className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 bg-[#111827] border-b border-gray-800 p-6 flex flex-col gap-4 z-50 md:hidden"
                initial={{
                  opacity: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <a
                  href="#features"
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#subjects"
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Subjects
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  How It Works
                </a>
                <div className="border-t border-gray-700 pt-4 flex flex-col gap-3">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-white transition-colors py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/login"
                    className="px-6 py-2.5 bg-white text-gray-900 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Start Free
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </nav>
  )
}
