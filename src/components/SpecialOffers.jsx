import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Clock, Flame, Star, ArrowRight } from 'lucide-react'
import CountdownTimer from './CountdownTimer'

const SpecialOffers = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const offers = [
    {
      id: 1,
      title: 'Lunch Special Combo',
      description: 'Butter Chicken + Naan + Dal + Rice + Dessert',
      originalPrice: 32.99,
      discountedPrice: 24.99,
      savings: 'Save $8',
      timeLeft: '2 hours',
      itemsLeft: 5,
      popular: true,
      spicy: false
    },
    {
      id: 2,
      title: 'Spicy Delight Pack',
      description: 'Chicken Tikka Masala + 2 Naan + Raita + Pickle',
      originalPrice: 28.99,
      discountedPrice: 19.99,
      savings: 'Save $9',
      timeLeft: '4 hours',
      itemsLeft: 3,
      popular: false,
      spicy: true
    },
    {
      id: 3,
      title: 'Vegetarian Feast',
      description: 'Palak Paneer + Dal Makhani + 2 Roti + Salad',
      originalPrice: 25.99,
      discountedPrice: 18.99,
      savings: 'Save $7',
      timeLeft: '6 hours',
      itemsLeft: 8,
      popular: false,
      spicy: false
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-saffron-50 dark:from-primary-900/20 dark:to-saffron-900/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            🔥 Limited Time Offers
          </h2>
          <p className="text-earthy-600 dark:text-earthy-400 text-lg max-w-2xl mx-auto">
            Don't miss out on these exclusive deals! Order now before they're gone.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card relative overflow-hidden"
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                  Most Popular
                </div>
              )}

              {/* Spicy Badge */}
              {offer.spicy && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium z-10 flex items-center">
                  <Flame className="w-3 h-3 mr-1" />
                  Spicy
                </div>
              )}

              {/* FOMO Banner */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 text-sm font-medium">
                ⚡ Only {offer.itemsLeft} left!
              </div>

              <div className="p-6 pt-12">
                {/* Title */}
                <h3 className="text-xl font-semibold text-earthy-900 dark:text-white mb-2">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-earthy-600 dark:text-earthy-400 mb-4">
                  {offer.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    ${offer.discountedPrice}
                  </span>
                  <span className="text-earthy-400 line-through">
                    ${offer.originalPrice}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
                    {offer.savings}
                  </span>
                </div>

                {/* Time Left */}
                <div className="flex items-center space-x-2 mb-4 text-earthy-600 dark:text-earthy-400">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Time left: {offer.timeLeft}</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-earthy-500 dark:text-earthy-400 mb-1">
                    <span>Available</span>
                    <span>{offer.itemsLeft}/10</span>
                  </div>
                  <div className="w-full bg-earthy-200 dark:bg-earthy-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-saffron-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(offer.itemsLeft / 10) * 100}%` }}
                    />
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>Order Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-earthy-900 dark:text-white mb-4">
              ⏰ Today's Offers End In:
            </h3>
            <CountdownTimer />
            <p className="text-earthy-600 dark:text-earthy-400 text-sm mt-4">
              New offers refresh daily at midnight
            </p>
          </div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              🎉 First Time Customer?
            </h3>
            <p className="text-white/90 mb-4">
              Get 10% off your first order! Use code: <strong>WELCOME10</strong>
            </p>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
              Claim Your Discount
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecialOffers 