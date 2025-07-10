import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Star, Clock, Flame } from 'lucide-react'
import MenuGrid from '../components/MenuGrid'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const categories = [
    { id: 'all', name: 'All Dishes', icon: '🍽️' },
    { id: 'breakfast', name: 'Breakfast', icon: '🌅' },
    { id: 'lunch', name: 'Lunch', icon: '🍛' },
    { id: 'dinner', name: 'Dinner', icon: '🌙' },
    { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
    { id: 'main-course', name: 'Main Course', icon: '🍲' },
    { id: 'breads', name: 'Breads', icon: '🫓' },
    { id: 'desserts', name: 'Desserts', icon: '🍰' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ]

  const menuData = [
    // Breakfast
    {
      id: 1,
      name: 'Masala Dosa',
      category: 'breakfast',
      price: 12.99,
      description: 'Crispy rice and lentil crepe filled with spiced potato mixture',
      image: '/images/masala-dosa.jpg',
      rating: 4.8,
      prepTime: '15 min',
      spicy: false,
      popular: true
    },
    {
      id: 2,
      name: 'Idli Sambar',
      category: 'breakfast',
      price: 8.99,
      description: 'Steamed rice cakes served with lentil soup and coconut chutney',
      image: '/images/idli-sambar.jpg',
      rating: 4.6,
      prepTime: '10 min',
      spicy: false,
      popular: false
    },
    {
      id: 3,
      name: 'Puri Bhaji',
      category: 'breakfast',
      price: 10.99,
      description: 'Deep-fried bread served with spiced potato curry',
      image: '/images/puri-bhaji.jpg',
      rating: 4.7,
      prepTime: '12 min',
      spicy: true,
      popular: true
    },

    // Appetizers
    {
      id: 4,
      name: 'Samosa',
      category: 'appetizers',
      price: 6.99,
      description: 'Crispy pastry filled with spiced potatoes and peas',
      image: '/images/samosa.jpg',
      rating: 4.9,
      prepTime: '8 min',
      spicy: true,
      popular: true
    },
    {
      id: 5,
      name: 'Pakora',
      category: 'appetizers',
      price: 5.99,
      description: 'Assorted vegetables dipped in chickpea batter and fried',
      image: '/images/pakora.jpg',
      rating: 4.5,
      prepTime: '10 min',
      spicy: false,
      popular: false
    },

    // Main Course
    {
      id: 6,
      name: 'Butter Chicken',
      category: 'main-course',
      price: 18.99,
      description: 'Tender chicken in rich tomato and butter gravy',
      image: '/images/butter-chicken.jpg',
      rating: 4.9,
      prepTime: '25 min',
      spicy: false,
      popular: true
    },
    {
      id: 7,
      name: 'Chicken Tikka Masala',
      category: 'main-course',
      price: 19.99,
      description: 'Grilled chicken in aromatic tomato and cream sauce',
      image: '/images/chicken-tikka-masala.jpg',
      rating: 4.8,
      prepTime: '30 min',
      spicy: true,
      popular: true
    },
    {
      id: 8,
      name: 'Palak Paneer',
      category: 'main-course',
      price: 14.99,
      description: 'Fresh spinach curry with homemade cottage cheese',
      image: '/images/palak-paneer.jpg',
      rating: 4.6,
      prepTime: '20 min',
      spicy: false,
      popular: false
    },
    {
      id: 9,
      name: 'Dal Makhani',
      category: 'main-course',
      price: 12.99,
      description: 'Slow-cooked black lentils with cream and butter',
      image: '/images/dal-makhani.jpg',
      rating: 4.7,
      prepTime: '35 min',
      spicy: false,
      popular: true
    },

    // Breads
    {
      id: 10,
      name: 'Naan',
      category: 'breads',
      price: 3.99,
      description: 'Soft leavened flatbread baked in tandoor',
      image: '/images/naan.jpg',
      rating: 4.5,
      prepTime: '8 min',
      spicy: false,
      popular: false
    },
    {
      id: 11,
      name: 'Roti',
      category: 'breads',
      price: 2.99,
      description: 'Whole wheat flatbread',
      image: '/images/roti.jpg',
      rating: 4.4,
      prepTime: '5 min',
      spicy: false,
      popular: false
    },

    // Desserts
    {
      id: 12,
      name: 'Gulab Jamun',
      category: 'desserts',
      price: 6.99,
      description: 'Sweet milk solids dumplings in sugar syrup',
      image: '/images/gulab-jamun.jpg',
      rating: 4.8,
      prepTime: '5 min',
      spicy: false,
      popular: true
    },
    {
      id: 13,
      name: 'Rasmalai',
      category: 'desserts',
      price: 7.99,
      description: 'Soft cottage cheese patties in sweetened milk',
      image: '/images/rasmalai.jpg',
      rating: 4.7,
      prepTime: '5 min',
      spicy: false,
      popular: false
    },

    // Beverages
    {
      id: 14,
      name: 'Masala Chai',
      category: 'beverages',
      price: 3.99,
      description: 'Spiced Indian tea with milk',
      image: '/images/masala-chai.jpg',
      rating: 4.6,
      prepTime: '5 min',
      spicy: false,
      popular: false
    },
    {
      id: 15,
      name: 'Lassi',
      category: 'beverages',
      price: 4.99,
      description: 'Sweet yogurt-based drink',
      image: '/images/lassi.jpg',
      rating: 4.5,
      prepTime: '3 min',
      spicy: false,
      popular: false
    }
  ]

  const filteredMenu = useMemo(() => {
    let filtered = menuData

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort by selected criteria
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [selectedCategory, searchQuery, sortBy])

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
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Discover our authentic Indian dishes, carefully crafted with traditional 
            recipes and the finest ingredients
          </motion.p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-earthy-400" size={20} />
              <input
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-earthy-900 dark:text-white">
              Categories
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

          {/* Sort Options */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-earthy-900 dark:text-white">
              Sort By
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-earthy-200 dark:border-earthy-700 rounded-lg bg-white dark:bg-earthy-900 text-earthy-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-earthy-600 dark:text-earthy-400">
            Showing {filteredMenu.length} of {menuData.length} dishes
          </p>
        </div>

        {/* Menu Grid */}
        <MenuGrid items={filteredMenu} />
      </div>
    </div>
  )
}

export default Menu 