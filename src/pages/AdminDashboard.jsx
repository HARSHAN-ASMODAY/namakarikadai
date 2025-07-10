import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  Star
} from 'lucide-react'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+12%',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+8%',
      icon: DollarSign,
      color: 'text-blue-600'
    },
    {
      title: 'Customers',
      value: '892',
      change: '+15%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Bookings',
      value: '156',
      change: '+5%',
      icon: Calendar,
      color: 'text-orange-600'
    }
  ]

  const recentBookings = [
    {
      id: 1,
      name: 'Sarah Johnson',
      date: '2024-01-15',
      time: '7:00 PM',
      guests: 4,
      status: 'confirmed'
    },
    {
      id: 2,
      name: 'Michael Chen',
      date: '2024-01-15',
      time: '8:30 PM',
      guests: 2,
      status: 'pending'
    },
    {
      id: 3,
      name: 'Priya Patel',
      date: '2024-01-16',
      time: '6:00 PM',
      guests: 6,
      status: 'confirmed'
    }
  ]

  const popularDishes = [
    { name: 'Butter Chicken', orders: 156, rating: 4.8 },
    { name: 'Chicken Tikka Masala', orders: 142, rating: 4.7 },
    { name: 'Masala Dosa', orders: 98, rating: 4.6 },
    { name: 'Samosa', orders: 87, rating: 4.5 }
  ]

  return (
    <div className="min-h-screen bg-earthy-50 dark:bg-earthy-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-white/80">
                Manage your restaurant operations
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-1 mb-8">
          <div className="flex space-x-1">
            {['overview', 'bookings', 'menu', 'analytics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-primary-600 text-white'
                    : 'text-earthy-600 dark:text-earthy-400 hover:bg-earthy-100 dark:hover:bg-earthy-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br from-primary-100 to-saffron-100 dark:from-primary-900 dark:to-saffron-900 rounded-lg flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-green-600">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-earthy-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-earthy-600 dark:text-earthy-400">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Bookings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                  Recent Bookings
                </h2>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-earthy-50 dark:bg-earthy-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-earthy-900 dark:text-white">
                        {booking.name}
                      </h4>
                      <p className="text-sm text-earthy-600 dark:text-earthy-400">
                        {booking.date} at {booking.time} • {booking.guests} guests
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Dishes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                  Popular Dishes
                </h2>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {popularDishes.map((dish, index) => (
                  <div key={dish.name} className="flex items-center justify-between p-4 bg-earthy-50 dark:bg-earthy-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-sm font-bold text-primary-600">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-earthy-900 dark:text-white">
                          {dish.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-saffron-500 fill-current" />
                            <span className="text-xs text-earthy-600 dark:text-earthy-400 ml-1">
                              {dish.rating}
                            </span>
                          </div>
                          <span className="text-xs text-earthy-500 dark:text-earthy-500">
                            {dish.orders} orders
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="text-earthy-400 hover:text-primary-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                All Bookings
              </h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Booking
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-earthy-200 dark:border-earthy-700">
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Date</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Time</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Guests</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-earthy-100 dark:border-earthy-800">
                      <td className="py-3 px-4 text-earthy-900 dark:text-white">{booking.name}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.date}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.time}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.guests}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-2">
                          <button className="text-earthy-400 hover:text-primary-600">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-earthy-400 hover:text-blue-600">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="text-earthy-400 hover:text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'menu' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                Menu Management
              </h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Dish
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularDishes.map((dish) => (
                <div key={dish.name} className="bg-earthy-50 dark:bg-earthy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-earthy-900 dark:text-white">
                      {dish.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <button className="text-earthy-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-earthy-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-earthy-600 dark:text-earthy-400">
                    <span>{dish.orders} orders</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-saffron-500 fill-current mr-1" />
                      <span>{dish.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <h2 className="text-xl font-semibold text-earthy-900 dark:text-white mb-6">
              Analytics Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary-50 to-saffron-50 dark:from-primary-900/20 dark:to-saffron-900/20 rounded-lg p-6">
                <h3 className="font-semibold text-earthy-900 dark:text-white mb-4">
                  Revenue Trends
                </h3>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  $45,678
                </div>
                <p className="text-earthy-600 dark:text-earthy-400">
                  +8% from last month
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
                <h3 className="font-semibold text-earthy-900 dark:text-white mb-4">
                  Customer Growth
                </h3>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  892
                </div>
                <p className="text-earthy-600 dark:text-earthy-400">
                  +15% from last month
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard 