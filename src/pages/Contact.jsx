import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import toast from 'react-hot-toast'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast.success('Message sent successfully! We\'ll get back to you soon.')
      reset()
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Spice Street, Curry District, CD 12345',
      link: 'https://maps.google.com/?q=123+Spice+Street+Curry+District'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      link: 'tel:+1234567890'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@namakarikadai.com',
      link: 'mailto:info@namakarikadai.com'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 11:00 AM - 11:00 PM\nSat-Sun: 10:00 AM - 12:00 AM'
    }
  ]

  return (
    <div className="min-h-screen bg-earthy-50 dark:bg-earthy-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Get in touch with us for reservations, 
            feedback, or any questions you might have.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-earthy-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-earthy-900 dark:text-white mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  Subject *
                </label>
                <select
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="reservation">Reservation Inquiry</option>
                  <option value="feedback">Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters'
                    }
                  })}
                  rows="5"
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-earthy-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-earthy-600 dark:text-earthy-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-earthy-600 dark:text-earthy-400 whitespace-pre-line">
                          {info.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="font-semibold text-earthy-900 dark:text-white mb-4">
                📍 Find Us
              </h3>
              <div className="bg-gradient-to-br from-primary-100 to-saffron-100 dark:from-primary-900 dark:to-saffron-900 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-earthy-600 dark:text-earthy-400">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-sm text-earthy-500 dark:text-earthy-500 mt-2">
                    123 Spice Street, Curry District
                  </p>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-br from-primary-50 to-saffron-50 dark:from-primary-900/20 dark:to-saffron-900/20 rounded-xl p-6"
            >
              <h3 className="font-semibold text-earthy-900 dark:text-white mb-4">
                💡 Frequently Asked Questions
              </h3>
              <div className="space-y-3 text-sm text-earthy-600 dark:text-earthy-400">
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Do you offer delivery? Yes, we deliver within 5 miles</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Can I make reservations online? Yes, use our reservation form</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Do you accommodate dietary restrictions? Yes, please let us know</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Is parking available? Yes, we have free parking</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Follow Us on Social Media
            </h3>
            <p className="text-white/90 mb-6">
              Stay updated with our latest dishes, special offers, and behind-the-scenes content
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200">
                📘 Facebook
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200">
                📷 Instagram
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200">
                🐦 Twitter
              </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors duration-200">
                📺 YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 