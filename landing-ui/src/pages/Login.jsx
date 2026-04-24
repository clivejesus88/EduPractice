import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCapIcon, MailIcon, LockIcon } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isLoaded, setIsLoaded] = useState(true)

  // Check if Supabase is initialized
  if (!supabase) {
    return (
      <div className="min-h-screen w-full bg-[#0B1120] flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-red-400 mb-4">Failed to load authentication. Please refresh the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-amber-500 text-gray-900 rounded-lg font-semibold hover:bg-amber-400"
          >
            Refresh
          </button>
        </div>
      </div>
    )
  }

  // Email + Password sign-in
  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,  
      });

      if (signInError) {
        setError(signInError.message || 'Sign in failed. Please try again.')
        return
      }

      if (data?.user) {
        window.location.href='https://appedupractice.vercel.app/'
      }
    } catch (err) {
      setError(err.message || 'Sign in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Google OAuth
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `https://appedupractice.vercel.app/`, // Custom scheme for mobile deep linking
        },
      });

      if (error) {
        setError(error.message || 'Google sign in failed.')
      }
    } catch (err) {
      setError(err.message || 'Google sign in failed.')
    }
  }



  // Forgot password
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!email) {
      setError('Enter your email address above first.')
      return
    }

    setError('')
    setLoading(true)

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) {
        setError(error.message || 'Could not send reset email.')
      } else {
        const verifyResetCode = async (email, code) => {
          const { data, error } = await supabase.auth.verifyOtp({
            email,
            token: code,
            type: 'recovery',
          });
          if (error) {
            console.error('Error verifying reset code:', error);
          } else {
            window.location.href = `https://appedupractice.vercel.app/`;
          }
        }
        setError('Password reset email sent! Check your inbox.')
      }
    } catch (err) {
      setError(err.message || 'Could not send reset email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-[#0B1120] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-2 mb-6 sm:mb-8"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center">
            <GraduationCapIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-900" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-white">
            EduPractice
          </span>
        </Link>

        {/* Login Card */}
        <div className="bg-[#111827] border border-gray-800 rounded-2xl p-5 sm:p-8">
          {!isLoaded ? (
            // Loading skeleton
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="h-8 bg-gray-700/50 rounded-lg animate-pulse"></div>
                <div className="h-4 bg-gray-700/50 rounded-lg animate-pulse w-3/4 mx-auto"></div>
              </div>

              {/* Email input skeleton */}
              <div className="h-11 bg-gray-700/50 rounded-lg animate-pulse"></div>

              {/* Password input skeleton */}
              <div className="h-11 bg-gray-700/50 rounded-lg animate-pulse"></div>

              {/* Forgot password skeleton */}
              <div className="h-4 bg-gray-700/50 rounded-lg animate-pulse w-1/3 ml-auto"></div>

              {/* Button skeleton */}
              <div className="h-11 bg-amber-500/50 rounded-lg animate-pulse"></div>

              {/* Divider skeleton */}
              <div className="h-px bg-gray-700/50"></div>

              {/* Social buttons skeleton */}
              <div className="grid grid-cols-2 gap-3">
                <div className="h-11 bg-gray-700/50 rounded-lg animate-pulse"></div>
                <div className="h-11 bg-gray-700/50 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">
                Welcome Back
              </h1>
              <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8">
                Sign in to continue your learning journey
              </p>

              {/* Error message */}
              {error && (
                <div className="mb-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
                  {error}
                </div>
              )}

              <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm sm:text-base"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-[#1a1f2e] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors text-sm sm:text-base"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleForgotPassword}
                    className="text-sm text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-amber-500 text-gray-900 rounded-lg font-semibold hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Signing in…' : 'Sign In'}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-5 sm:my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-[#111827] text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="flex justify-center">
                {/* Google */}
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className=" w-md py-2.5 px-6 bg-[#1a1f2e] border border-gray-700 rounded-lg text-gray-300 hover:border-gray-500 transition-colors flex items-center justify-center  "
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-sm font-medium">Google</span>
                </button>
              </div>

              {/* Sign Up Link */}
              <p className="text-center text-gray-400 text-sm mt-5 sm:mt-6">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors"
                >
                   Sign up
                </Link>
              </p>
            </>
          )}
        </div>

        {/* Back to Home */}
        <Link
          to="/"
          className="block text-center text-gray-400 hover:text-white text-sm mt-5 sm:mt-6 transition-colors"
        >
          ← Back to home
        </Link>
      </motion.div>
    </div>
  )
}