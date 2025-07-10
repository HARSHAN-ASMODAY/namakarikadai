import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      rating: 5,
      text: 'The best Indian restaurant I\'ve ever been to! The butter chicken is absolutely divine and the service is impeccable. Highly recommend!',
      avatar: '👩‍🦰',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Food Blogger',
      rating: 5,
      text: 'As a food blogger, I\'ve tried countless Indian restaurants, but NAMA KARI KADAI stands out. The authentic flavors and warm atmosphere make every visit special.',
      avatar: '👨‍💻',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Local Resident',
      rating: 5,
      text: 'Finally, authentic Indian food in our neighborhood! The masala dosa reminds me of home. The staff is so friendly and the prices are reasonable.',
      avatar: '👩‍🦱',
      date: '3 days ago'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Business Owner',
      rating: 5,
      text: 'I bring all my clients here for lunch meetings. The professional atmosphere combined with amazing food always impresses. The combo deals are fantastic!',
      avatar: '👨‍💼',
      date: '5 days ago'
    },
    {
      id: 5,
      name: 'Emma Thompson',
      role: 'Student',
      rating: 5,
      text: 'Perfect spot for students! Great portions, reasonable prices, and the delivery is super fast. The samosas are to die for!',
      avatar: '👩‍🎓',
      date: '1 day ago'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-earthy-900 dark:text-white mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-4xl">{testimonials[currentIndex].avatar}</div>
              <div className="text-left">
                <h4 className="font-semibold text-earthy-900 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-earthy-600 dark:text-earthy-400 text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-saffron-500 fill-current" />
              ))}
            </div>

            {/* Date */}
            <p className="text-earthy-500 dark:text-earthy-400 text-sm">
              {testimonials[currentIndex].date}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-primary-600 scale-125'
                : 'bg-earthy-300 dark:bg-earthy-600 hover:bg-primary-400'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-earthy-800 rounded-full shadow-lg flex items-center justify-center text-earthy-600 dark:text-earthy-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      >
        ←
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white dark:bg-earthy-800 rounded-full shadow-lg flex items-center justify-center text-earthy-600 dark:text-earthy-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
      >
        →
      </button>
    </div>
  )
}

export default TestimonialSlider 