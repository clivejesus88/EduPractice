"use client";

import * as React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [isLogin, setIsLogin] = React.useState(true);

  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    setErrors({});
    // Manual validation
    const newErrors = {};
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!data.password || data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    if (!isLogin) {
      if (!data.username || data.username.trim() === "") {
        newErrors.username = "Username is required.";
      }
      if (!data.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password.";
      } else if (data.password !== data.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match.";
      }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // Placeholder for onSubmit
      console.log(`${isLogin ? 'Login' : 'Sign up'} submitted:`, data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to dashboard
      window.location.href = '/dashboard';
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Left Panel: Form */}
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
        <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 shadow-2xl">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-white">Exam Hub</h2>
            <p className="text-gray-300 mt-2">
              {isLogin ? "Welcome back! Please sign in to your account." : "Create your account to get started."}
            </p>
          </div>

          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Username</label>
                <input
                  type="text"
                  {...register("username")}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
                  placeholder="johndoe123"
                  disabled={isLoading}
                />
                {errors.username && <p className="text-red-400 text-sm mt-1">{errors.username}</p>}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Email Address</label>
              <input
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
                placeholder="email@example.com"
                disabled={isLoading}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
              <input
                type="password"
                {...register("password")}
                className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
                placeholder="••••••••••••"
                disabled={isLoading}
              />
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Confirm Password</label>
                <input
                  type="password"
                  {...register("confirmPassword")}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition duration-200"
                  placeholder="••••••••••••"
                  disabled={isLoading}
                />
                {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("rememberMe")}
                    className="h-4 w-4 text-gray-300 focus:ring-gray-500 border-gray-600 rounded bg-gray-700"
                    disabled={isLoading}
                  />
                  <span className="ml-2 text-sm text-gray-300">Remember Me</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-white transition duration-200"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? (isLogin ? "Signing In..." : "Signing Up...") : (isLogin ? "Sign In" : "Sign Up")}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-400">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); setIsLogin(!isLogin); }}
              className="text-gray-300 hover:text-white font-medium transition duration-200"
            >
              {isLogin ? "Sign up here" : "Sign in here"}
            </a>
          </p>
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="Students studying"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-black/60"></div>
        <div className="absolute bottom-10 left-10 text-white">
          <h3 className="text-2xl font-bold mb-2">Empower Your Learning</h3>
          <p className="text-lg text-gray-200">Join thousands of students achieving their goals.</p>
        </div>
      </div>
    </div>
  );
}