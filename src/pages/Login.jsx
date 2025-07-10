import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import toast from 'react-hot-toast'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    
    try {
      const result = await login(data.email, data.password)
      
      if (result.success) {
        toast.success('Login successful!')
        navigate('/')
      } else {
        toast.error(result.error || 'Login failed. Please try again.')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const demoCredentials = [
    { email: 'admin@namakarikadai.com', password: 'admin123', role: 'Admin' },
    { email: 'staff@namakarikadai.com', password: 'staff123', role: 'Staff' }
  ]

  const handleDemoLogin = (email, password) => {
    const emailInput = document.querySelector('input[name="email"]')
    const passwordInput = document.querySelector('input[name="password"]')
    
    if (emailInput && passwordInput) {
      emailInput.value = email
      passwordInput.value = password
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-saffron-500 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">N</span>
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            NAMA KARI KADAI
          </h1>
          <p className="text-white/80">Staff & Admin Portal</p>
        </div>

        {/* Login Form */}
        <div className="bg-white dark:bg-earthy-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-display font-bold text-earthy-900 dark:text-white mb-6 text-center">
            Sign In
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earthy-400" size={20} />
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full pl-10 pr-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                Password *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earthy-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password', { 
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters'
                    }
                  })}
                  className="w-full pl-10 pr-12 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-earthy-400 hover:text-earthy-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-earthy-50 dark:bg-earthy-700 rounded-lg">
            <h3 className="text-sm font-semibold text-earthy-900 dark:text-white mb-3">
              Demo Credentials:
            </h3>
            <div className="space-y-2">
              {demoCredentials.map((cred, index) => (
                <button
                  key={index}
                  onClick={() => handleDemoLogin(cred.email, cred.password)}
                  className="w-full text-left p-2 rounded border border-earthy-200 dark:border-earthy-600 hover:bg-earthy-100 dark:hover:bg-earthy-600 transition-colors duration-200"
                >
                  <div className="text-xs font-medium text-earthy-900 dark:text-white">
                    {cred.role}
                  </div>
                  <div className="text-xs text-earthy-600 dark:text-earthy-400">
                    {cred.email} / {cred.password}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            © 2024 NAMA KARI KADAI. All rights reserved.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default Login 