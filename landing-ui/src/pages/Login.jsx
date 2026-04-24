import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCapIcon, MailIcon, LockIcon } from 'lucide-react'
import { useSignIn } from '@clerk/react';

export default function Login() {
  const navigate = useNavigate()
  const { signIn, isLoaded } = useSignIn()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Show init error if Clerk fails to load
  if (isLoaded === false) {
    // Still loading
  } else if (!signIn) {
    // Clerk initialization failed
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
    if (!isLoaded) return

    setError('')
    setLoading(true)

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === 'complete') {
        navigate('https://appedupractice.vercel.app')
      } else {
        // Handle multi-factor or other steps if needed
        console.log('Additional steps required:', result)
      }
    } catch (err) {
      setError(err.errors?.[0]?.longMessage || 'Sign in failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Google OAuth
  const handleGoogleSignIn = async () => {
    if (!isLoaded) return
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_google',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: 'https://appedupractice.vercel.app',
      })
    } catch (err) {
      setError(err.errors?.[0]?.longMessage || 'Google sign in failed.')
    }
  }

  // Apple OAuth
  const handleAppleSignIn = async () => {
    if (!isLoaded) return
    try {
      await signIn.authenticateWithRedirect({
        strategy: 'oauth_apple',
        redirectUrl: '/sso-callback',
        redirectUrlComplete: 'https://appedupractice.vercel.app',
      })
    } catch (err) {
      setError(err.errors?.[0]?.longMessage || 'Apple sign in failed.')
    }
  }

  // Forgot password — Clerk first-factor flow
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!isLoaded || !email) {
      setError('Enter your email address above first.')
      return
    }
    try {
      await signIn.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      setError('Password reset email sent! Check your inbox.')
    } catch (err) {
      setError(err.errors?.[0]?.longMessage || 'Could not send reset email.')
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
              disabled={loading || !isLoaded}
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
          <div className="grid grid-cols-2 gap-3">
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={!isLoaded}
              className="py-2.5 px-3 sm:px-4 bg-[#1a1f2e] border border-gray-700 rounded-lg text-gray-300 hover:border-gray-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-medium">Google</span>
            </button>

            {/* Apple */}
            <button
              type="button"
              onClick={handleAppleSignIn}
              disabled={!isLoaded}
              className="py-2.5 px-3 sm:px-4 bg-[#1a1f2e] border border-gray-700 rounded-lg text-gray-300 hover:border-gray-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.462 1.307c.12.919-.267 1.832-.784 2.508-.545.707-1.437 1.26-2.313 1.198-.133-.876.298-1.796.806-2.44.547-.695 1.49-1.226 2.291-1.266zm3.596 13.234c-.405.897-.6 1.298-1.122 2.09-.728 1.11-1.756 2.494-3.029 2.507-1.131.012-1.422-.736-2.956-.728-1.533.009-1.852.743-2.986.731-1.272-.013-2.243-1.26-2.972-2.372-2.04-3.103-2.254-6.748-.995-8.68.9-1.394 2.317-2.21 3.65-2.21 1.357 0 2.211.744 3.333.744 1.09 0 1.753-.747 3.324-.747 1.19 0 2.45.648 3.347 1.77-2.941 1.612-2.465 5.815.406 6.895z" />
              </svg>
              <span className="text-sm font-medium">Apple</span>
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