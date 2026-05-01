import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GraduationCapIcon, MailIcon, LockIcon, UserIcon } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function Signup() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const getReturnUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('return') || 'https://appedupractice.vercel.app/';
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) return setError("Passwords don't match");
    
    setLoading(true);
    setError('');

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: { data: { first_name: formData.firstName, last_name: formData.lastName } }
    });

    setLoading(false);
    if (signUpError) setError(signUpError.message);
    else if (data?.user) setVerifying(true);
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { data, error: vError } = await supabase.auth.verifyOtp({
      email: formData.email,
      token: otpCode,
      type: 'signup'
    });

    if (vError) {
      setError(vError.message);
      setLoading(false);
    } else if (data?.session) {
      const dest = new URL(getReturnUrl());
      dest.searchParams.set('token', data.session.access_token);
      window.location.href = dest.toString();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-md bg-[#111827] border border-gray-800 p-8 rounded-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="p-3 bg-white rounded-xl mb-4">
            <GraduationCapIcon className="text-gray-900 w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {verifying ? 'Check your email' : 'Create Account'}
          </h1>
        </div>

        {error && <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg mb-4 text-sm">{error}</div>}

        {!verifying ? (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" placeholder="First Name" required 
                className="bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white"
                onChange={e => setFormData({...formData, firstName: e.target.value})}
              />
              <input 
                type="text" placeholder="Last Name" required 
                className="bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white"
                onChange={e => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
            <input 
              type="email" placeholder="Email" required 
              className="w-full bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white"
              onChange={e => setFormData({...formData, email: e.target.value})}
            />
            <input 
              type="password" placeholder="Password (min 8 chars)" required 
              className="w-full bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white"
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
            <input 
              type="password" placeholder="Confirm Password" required 
              className="w-full bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white"
              onChange={e => setFormData({...formData, confirm: e.target.value})}
            />
            <button disabled={loading} className="w-full bg-amber-500 p-3 rounded-lg font-bold hover:bg-amber-400 transition-colors">
              {loading ? 'Processing...' : 'Sign Up'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <input 
              type="text" placeholder="8-digit code" required maxLength="8"
              className="w-full bg-[#1a1f2e] border border-gray-700 p-3 rounded-lg text-white text-center tracking-widest"
              onChange={e => setOtpCode(e.target.value)}
            />
            <button className="w-full bg-amber-500 p-3 rounded-lg font-bold">Verify & Continue</button>
            <button type="button" onClick={() => setVerifying(false)} className="w-full text-gray-400 text-sm">← Back</button>
          </form>
        )}
      </motion.div>
    </div>
  );
}