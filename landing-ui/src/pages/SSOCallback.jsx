import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSignUp, useSignIn } from '@clerk/react'

export default function SSOCallback() {
  const navigate = useNavigate()
  const { signUp } = useSignUp()
  const { signIn } = useSignIn()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Handle the OAuth callback
        if (signUp?.verifications?.externalAccount?.status === 'verified') {
          navigate('https://appedupractice.vercel.app')
        } else if (signIn?.status === 'complete') {
          navigate('https://appedupractice.vercel.app')
        } else {
          navigate('/signup')
        }
      } catch (err) {
        console.error('SSO callback error:', err)
        navigate('/signup')
      }
    }

    handleCallback()
  }, [navigate, signUp, signIn])

  return (
    <div className="min-h-screen w-full bg-[#0B1120] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Completing your sign up...</p>
      </div>
    </div>
  )
}
