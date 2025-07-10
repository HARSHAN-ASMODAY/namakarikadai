import React from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Flame, Heart } from 'lucide-react'

const MenuGrid = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🍽️</div>
        <h3 className="text-2xl font-semibold text-earthy-900 dark:text-white mb-2">
          No dishes found
        </h3>
        <p className="text-earthy-600 dark:text-earthy-400">
          Try adjusting your search or filter criteria
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="card overflow-hidden group"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-100 to-saffron-100 dark:from-primary-900 dark:to-saffron-900 flex items-center justify-center">
              <span className="text-4xl">🍽️</span>
            </div>
            
            {/* Popular Badge */}
            {item.popular && (
              <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Popular
              </div>
            )}
            
            {/* Spicy Badge */}
            {item.spicy && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                <Flame className="w-3 h-3 mr-1" />
                Spicy
              </div>
            )}
            
            {/* Favorite Button */}
            <button className="absolute top-2 right-2 md:right-12 bg-white/90 dark:bg-earthy-800/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Heart className="w-4 h-4 text-red-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-earthy-900 dark:text-white">
                {item.name}
              </h3>
              <span className="font-bold text-primary-600 text-lg">
                ${item.price}
              </span>
            </div>

            <p className="text-earthy-600 dark:text-earthy-400 text-sm mb-3 line-clamp-2">
              {item.description}
            </p>

            {/* Rating and Prep Time */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-saffron-500 fill-current" />
                <span className="text-sm font-medium text-earthy-700 dark:text-earthy-300">
                  {item.rating}
                </span>
              </div>
              <div className="flex items-center space-x-1 text-earthy-500 dark:text-earthy-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{item.prepTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
                Add to Cart
              </button>
              <button className="px-4 py-2 border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg text-sm font-medium transition-colors duration-200">
                Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default MenuGrid 