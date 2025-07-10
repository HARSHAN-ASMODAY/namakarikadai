import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/HeroSection'
import TestimonialSlider from '../components/TestimonialSlider'
import CountdownTimer from '../components/CountdownTimer'
import SpecialOffers from '../components/SpecialOffers'
import AboutSection from '../components/AboutSection'
import { Star, Clock, MapPin, Phone, ArrowRight } from 'lucide-react'

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(true)
  
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const isOpenNow = () => {
    const hour = currentTime.getHours()
    return hour >= 11 && hour < 23 // 11 AM to 11 PM
  }

  const stats = [
    { number: '500+', label: 'Happy Customers', icon: '👥' },
    { number: '50+', label: 'Dishes', icon: '🍽️' },
    { number: '5+', label: 'Years Experience', icon: '⭐' },
    { number: '4.8', label: 'Rating', icon: '🌟' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Status Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${isOpenNow() ? 'bg-green-400' : 'bg-red-400'}`}></div>
            <span>{isOpenNow() ? 'Open Now' : 'Closed'}</span>
          </div>
          <span>•</span>
          <span>11:00 AM - 11:00 PM</span>
          <span>•</span>
          <span>Free Delivery on Orders Above $30</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-earthy-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Order</h3>
              <p className="text-earthy-600 dark:text-earthy-400 mb-4">
                Order your favorite dishes online and pick up in 15 minutes
              </p>
              <Link to="/menu" className="btn-primary">
                Order Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-saffron-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Table</h3>
              <p className="text-earthy-600 dark:text-earthy-400 mb-4">
                Reserve your table for a perfect dining experience
              </p>
              <Link to="/reservation" className="btn-secondary">
                Book Now
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-earthy-600 dark:text-earthy-400 mb-4">
                Speak directly with our friendly staff
              </p>
              <a href="tel:+1234567890" className="btn-outline">
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Special Offers */}
      <SpecialOffers />

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-br from-primary-600 to-saffron-500">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Why Choose NAMA KARI KADAI?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience authentic Indian cuisine with the perfect blend of tradition and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Testimonials */}
      <section className="py-16 bg-earthy-50 dark:bg-earthy-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-earthy-600 dark:text-earthy-400 text-lg">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-saffron-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Experience Authentic Indian Cuisine?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join hundreds of satisfied customers who have discovered the true taste of India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="btn-secondary">
                Explore Menu
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/reservation" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                Book Your Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 