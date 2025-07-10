import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const Reservation = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedGuests, setSelectedGuests] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM'
  ]

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
  }

  const onSubmit = async (data) => {
    if (!selectedDate || !selectedTime || !selectedGuests) {
      toast.error('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast.success('Reservation submitted successfully! We\'ll confirm shortly.')
      reset()
      setSelectedDate('')
      setSelectedTime('')
      setSelectedGuests('')
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-earthy-50 dark:bg-earthy-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-earthy-800 rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center"
        >
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-display font-bold text-earthy-900 dark:text-white mb-4">
            Reservation Submitted!
          </h2>
          <p className="text-earthy-600 dark:text-earthy-400 mb-6">
            Thank you for choosing NAMA KARI KADAI. We'll send you a confirmation 
            email shortly with your reservation details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Make Another Reservation
          </button>
        </motion.div>
      </div>
    )
  }

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
            Book Your Table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Reserve your table for an unforgettable dining experience at NAMA KARI KADAI
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-earthy-800 rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-display font-bold text-earthy-900 dark:text-white mb-6">
              Make a Reservation
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Date *
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={getMinDate()}
                  max={getMaxDate()}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Time *
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              {/* Number of Guests */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Number of Guests *
                </label>
                <select
                  value={selectedGuests}
                  onChange={(e) => setSelectedGuests(e.target.value)}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select number of guests</option>
                  {guestOptions.map((guests) => (
                    <option key={guests} value={guests}>{guests} {guests === '1' ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

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
                  <Mail className="w-4 h-4 inline mr-2" />
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[\+]?[1-9][\d]{0,15}$/,
                      message: 'Invalid phone number'
                    }
                  })}
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-sm font-medium text-earthy-700 dark:text-earthy-300 mb-2">
                  Special Requests
                </label>
                <textarea
                  {...register('specialRequests')}
                  rows="3"
                  className="w-full px-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any special requests or dietary requirements?"
                />
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
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Book Table</span>
                )}
              </button>
            </form>
          </motion.div>

          {/* Information Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Restaurant Info */}
            <div className="bg-white dark:bg-earthy-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-display font-bold text-earthy-900 dark:text-white mb-4">
                Restaurant Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earthy-900 dark:text-white">Address</p>
                    <p className="text-earthy-600 dark:text-earthy-400">
                      123 Spice Street<br />
                      Curry District, CD 12345
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earthy-900 dark:text-white">Hours</p>
                    <p className="text-earthy-600 dark:text-earthy-400">
                      Mon-Fri: 11:00 AM - 11:00 PM<br />
                      Sat-Sun: 10:00 AM - 12:00 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-earthy-900 dark:text-white">Phone</p>
                    <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reservation Tips */}
            <div className="bg-gradient-to-br from-primary-50 to-saffron-50 dark:from-primary-900/20 dark:to-saffron-900/20 rounded-2xl p-6">
              <h3 className="text-xl font-display font-bold text-earthy-900 dark:text-white mb-4">
                💡 Reservation Tips
              </h3>
              <ul className="space-y-3 text-earthy-600 dark:text-earthy-400">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Reservations are held for 15 minutes past your booking time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>For groups of 8+, please call us directly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>We recommend booking 24 hours in advance for weekend dining</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Special dietary requirements can be accommodated with advance notice</span>
                </li>
              </ul>
            </div>

            {/* Special Offers */}
            <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white rounded-2xl p-6">
              <h3 className="text-xl font-display font-bold mb-4">
                🎉 Special Offers
              </h3>
              <div className="space-y-3">
                <p className="text-white/90">
                  • Free dessert for birthday celebrations
                </p>
                <p className="text-white/90">
                  • 10% off for first-time visitors
                </p>
                <p className="text-white/90">
                  • Complimentary appetizer for groups of 4+
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Reservation 