import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Users, 
  ListTodo,
  Plus,
  Edit,
  Eye
} from 'lucide-react'

const StaffDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const todayBookings = [
    {
      id: 1,
      name: 'Sarah Johnson',
      time: '7:00 PM',
      guests: 4,
      table: 'A12',
      status: 'confirmed',
      specialRequests: 'Birthday celebration'
    },
    {
      id: 2,
      name: 'Michael Chen',
      time: '8:30 PM',
      guests: 2,
      table: 'B8',
      status: 'confirmed',
      specialRequests: 'Window seat preferred'
    },
    {
      id: 3,
      name: 'Priya Patel',
      time: '6:00 PM',
      guests: 6,
      table: 'C15',
      status: 'pending',
      specialRequests: 'Vegetarian options'
    }
  ]

  const tasks = [
    {
      id: 1,
      title: 'Prepare table A12 for 7:00 PM booking',
      priority: 'high',
      status: 'completed',
      time: '6:30 PM'
    },
    {
      id: 2,
      title: 'Check inventory for popular dishes',
      priority: 'medium',
      status: 'pending',
      time: '5:00 PM'
    },
    {
      id: 3,
      title: 'Update menu board with daily specials',
      priority: 'low',
      status: 'pending',
      time: '4:00 PM'
    },
    {
      id: 4,
      title: 'Prepare welcome drinks for VIP guests',
      priority: 'high',
      status: 'in-progress',
      time: '6:45 PM'
    }
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-200'
      case 'medium':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      case 'low':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      default:
        return 'text-earthy-600 bg-earthy-100 dark:bg-earthy-700 dark:text-earthy-200'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-200'
      case 'in-progress':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-200'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-200'
      default:
        return 'text-earthy-600 bg-earthy-100 dark:bg-earthy-700 dark:text-earthy-200'
    }
  }

  return (
    <div className="min-h-screen bg-earthy-50 dark:bg-earthy-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">
                Staff Dashboard
              </h1>
              <p className="text-white/80">
                Manage daily operations and customer service
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white/80 text-sm">Today's Date</p>
                <p className="font-semibold">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-earthy-800 rounded-xl shadow-lg p-1 mb-8">
          <div className="flex space-x-1">
            {['overview', 'bookings', 'tasks', 'notes'].map((tab) => (
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

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-earthy-600 dark:text-earthy-400 text-sm">Today's Bookings</p>
                <p className="text-2xl font-bold text-earthy-900 dark:text-white">12</p>
              </div>
              <Calendar className="w-8 h-8 text-primary-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-earthy-600 dark:text-earthy-400 text-sm">Pending Tasks</p>
                <p className="text-2xl font-bold text-earthy-900 dark:text-white">3</p>
              </div>
              <ListTodo className="w-8 h-8 text-yellow-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-earthy-600 dark:text-earthy-400 text-sm">Current Guests</p>
                <p className="text-2xl font-bold text-earthy-900 dark:text-white">28</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-earthy-600 dark:text-earthy-400 text-sm">Avg. Wait Time</p>
                <p className="text-2xl font-bold text-earthy-900 dark:text-white">15m</p>
              </div>
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>
        </div>

        {/* Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Today's Bookings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                  Today's Bookings
                </h2>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {todayBookings.map((booking) => (
                  <div key={booking.id} className="p-4 bg-earthy-50 dark:bg-earthy-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-earthy-900 dark:text-white">
                        {booking.name}
                      </h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-earthy-600 dark:text-earthy-400">
                      <div className="flex items-center space-x-4">
                        <span>🕐 {booking.time}</span>
                        <span>👥 {booking.guests} guests</span>
                        <span>🪑 Table {booking.table}</span>
                      </div>
                      <button className="text-earthy-400 hover:text-primary-600">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    {booking.specialRequests && (
                      <p className="text-xs text-earthy-500 dark:text-earthy-500 mt-2">
                        📝 {booking.specialRequests}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tasks */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                  Today's Tasks
                </h2>
                <button className="btn-primary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Task
                </button>
              </div>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="p-4 bg-earthy-50 dark:bg-earthy-700 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-earthy-900 dark:text-white">
                        {task.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                          {task.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-earthy-600 dark:text-earthy-400">
                      <span>🕐 {task.time}</span>
                      <div className="flex items-center space-x-2">
                        <button className="text-earthy-400 hover:text-green-600">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="text-earthy-400 hover:text-blue-600">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
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
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Time</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Guests</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Table</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-earthy-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todayBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-earthy-100 dark:border-earthy-800">
                      <td className="py-3 px-4 text-earthy-900 dark:text-white">{booking.name}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.time}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.guests}</td>
                      <td className="py-3 px-4 text-earthy-600 dark:text-earthy-400">{booking.table}</td>
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {activeTab === 'tasks' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                Task Management
              </h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => (
                <div key={task.id} className="bg-earthy-50 dark:bg-earthy-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-earthy-900 dark:text-white">
                      {task.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <button className="text-earthy-400 hover:text-green-600">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="text-earthy-400 hover:text-blue-600">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-earthy-600 dark:text-earthy-400">
                    <span>{task.time}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                        {task.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'notes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-earthy-900 dark:text-white">
                Staff Notes
              </h2>
              <button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Note
              </button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-earthy-900 dark:text-white mb-1">
                      Kitchen Alert
                    </h4>
                    <p className="text-sm text-earthy-600 dark:text-earthy-400">
                      Butter chicken is running low. Need to prepare more by 7:00 PM.
                    </p>
                    <p className="text-xs text-earthy-500 dark:text-earthy-500 mt-2">
                      Posted by Chef Raj • 2 hours ago
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-earthy-900 dark:text-white mb-1">
                      VIP Guest Arrival
                    </h4>
                    <p className="text-sm text-earthy-600 dark:text-earthy-400">
                      Mr. & Mrs. Johnson arriving at 8:00 PM. Prepare table A1 with rose petals.
                    </p>
                    <p className="text-xs text-earthy-500 dark:text-earthy-500 mt-2">
                      Posted by Manager Sarah • 1 hour ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default StaffDashboard 