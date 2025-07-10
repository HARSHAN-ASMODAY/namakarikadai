import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, Flame, ArrowRight, ShoppingCart } from 'lucide-react'

const Combos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Combos', icon: '🍽️' },
    { id: 'lunch', name: 'Lunch Combos', icon: '🌅' },
    { id: 'dinner', name: 'Dinner Combos', icon: '🌙' },
    { id: 'family', name: 'Family Packs', icon: '👨‍👩‍👧‍👦' },
    { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' }
  ]

  const combos = [
    {
      id: 1,
      name: 'Royal Feast Combo',
      category: 'dinner',
      description: 'Perfect for a romantic dinner or special occasion',
      items: ['Butter Chicken', 'Chicken Tikka Masala', '2 Naan', 'Dal Makhani', 'Basmati Rice', 'Raita', 'Pickle', 'Gulab Jamun'],
      originalPrice: 45.99,
      discountedPrice: 34.99,
      savings: 'Save $11',
      prepTime: '25 min',
      serves: '2-3 people',
      popular: true,
      spicy: false,
      image: '/images/royal-feast.jpg'
    },
    {
      id: 2,
      name: 'Lunch Special Combo',
      category: 'lunch',
      description: 'Quick and satisfying lunch option',
      items: ['Butter Chicken', 'Naan', 'Dal', 'Rice', 'Dessert'],
      originalPrice: 32.99,
      discountedPrice: 24.99,
      savings: 'Save $8',
      prepTime: '15 min',
      serves: '1-2 people',
      popular: true,
      spicy: false,
      image: '/images/lunch-special.jpg'
    },
    {
      id: 3,
      name: 'Family Pack Deluxe',
      category: 'family',
      description: 'Feeds the whole family with variety',
      items: ['Butter Chicken', 'Palak Paneer', 'Chicken Tikka Masala', '4 Naan', 'Dal Makhani', 'Rice', 'Raita', 'Pickle', '2 Desserts'],
      originalPrice: 65.99,
      discountedPrice: 49.99,
      savings: 'Save $16',
      prepTime: '30 min',
      serves: '4-5 people',
      popular: false,
      spicy: false,
      image: '/images/family-pack.jpg'
    },
    {
      id: 4,
      name: 'Spicy Delight Pack',
      category: 'dinner',
      description: 'For those who love the heat',
      items: ['Chicken Tikka Masala', '2 Naan', 'Raita', 'Pickle', 'Masala Chai'],
      originalPrice: 28.99,
      discountedPrice: 19.99,
      savings: 'Save $9',
      prepTime: '20 min',
      serves: '2 people',
      popular: false,
      spicy: true,
      image: '/images/spicy-delight.jpg'
    },
    {
      id: 5,
      name: 'Vegetarian Feast',
      category: 'vegetarian',
      description: 'Complete vegetarian meal',
      items: ['Palak Paneer', 'Dal Makhani', '2 Roti', 'Salad', 'Raita', 'Dessert'],
      originalPrice: 25.99,
      discountedPrice: 18.99,
      savings: 'Save $7',
      prepTime: '18 min',
      serves: '2 people',
      popular: false,
      spicy: false,
      image: '/images/vegetarian-feast.jpg'
    },
    {
      id: 6,
      name: 'Quick Bite Combo',
      category: 'lunch',
      description: 'Perfect for a quick lunch break',
      items: ['Samosa', 'Pakora', 'Masala Chai', 'Dessert'],
      originalPrice: 15.99,
      discountedPrice: 11.99,
      savings: 'Save $4',
      prepTime: '8 min',
      serves: '1 person',
      popular: false,
      spicy: true,
      image: '/images/quick-bite.jpg'
    }
  ]

  const filteredCombos = selectedCategory === 'all' 
    ? combos 
    : combos.filter(combo => combo.category === selectedCategory)

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
            Special Combos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Curated meal combinations that offer the perfect balance of flavors, 
            variety, and value for money
          </motion.p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-earthy-900 dark:text-white">
            Filter by Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-earthy-100 dark:bg-earthy-700 text-earthy-700 dark:text-earthy-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-earthy-600 dark:text-earthy-400">
            Showing {filteredCombos.length} of {combos.length} combos
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCombos.map((combo, index) => (
            <motion.div
              key={combo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-saffron-100 dark:from-primary-900 dark:to-saffron-900 flex items-center justify-center">
                  <span className="text-4xl">🍽️</span>
                </div>
                
                {/* Badges */}
                {combo.popular && (
                  <div className="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                    Popular
                  </div>
                )}
                
                {combo.spicy && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium flex items-center">
                    <Flame className="w-3 h-3 mr-1" />
                    Spicy
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-earthy-900 dark:text-white mb-2">
                  {combo.name}
                </h3>
                
                <p className="text-earthy-600 dark:text-earthy-400 text-sm mb-4">
                  {combo.description}
                </p>

                {/* Items List */}
                <div className="mb-4">
                  <h4 className="font-medium text-earthy-900 dark:text-white mb-2">
                    Includes:
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="text-sm text-earthy-600 dark:text-earthy-400 flex items-center">
                        <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    ${combo.discountedPrice}
                  </span>
                  <span className="text-earthy-400 line-through">
                    ${combo.originalPrice}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full font-medium">
                    {combo.savings}
                  </span>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between mb-4 text-sm text-earthy-500 dark:text-earthy-400">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{combo.prepTime}</span>
                  </div>
                  <span>Serves {combo.serves}</span>
                </div>

                {/* CTA Button */}
                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              🎉 Special Offer for Combo Orders
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Order any combo and get a free dessert! Plus, free delivery on orders above $40.
            </p>
            <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600 flex items-center space-x-2 mx-auto">
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Combos 