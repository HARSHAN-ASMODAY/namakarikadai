import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Play, Star, Clock, MapPin } from 'lucide-react'

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    // Simulate video loading for demo
    const timer = setTimeout(() => {
      setIsVideoLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-saffron-900/80 z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-20"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-saffron-500/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/30 rounded-full animate-bounce-slow"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-saffron-500/30 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-primary-400/30 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-saffron-400/30 rounded-full animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Spice Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-saffron-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="text-gradient bg-gradient-to-r from-white to-saffron-200 bg-clip-text text-transparent">
              NAMA KARI KADAI
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-white/90"
          >
            Experience the authentic taste of India
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto"
          >
            From traditional curries to modern fusion, every dish tells a story of passion, 
            tradition, and culinary excellence. Join us for an unforgettable dining experience.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-saffron-400" />
            <span className="text-white/90">4.8/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 text-saffron-400" />
            <span className="text-white/90">15 Min Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-saffron-400" />
            <span className="text-white/90">Free Delivery</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/menu"
            className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
          >
            <span>Explore Menu</span>
            <Play className="w-5 h-5" />
          </Link>
          
          <Link
            to="/reservation"
            className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
          >
            Book Table
          </Link>
        </motion.div>

        {/* FOMO Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
        >
          <div className="flex items-center justify-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-white/90">
              🔥 Limited Time: Get 20% off on all combos! Only 5 orders left today
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection 