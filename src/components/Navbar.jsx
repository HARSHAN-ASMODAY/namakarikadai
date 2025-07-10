import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import { useAuth } from '../contexts/AuthContext'
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  User, 
  LogOut,
  ShoppingCart,
  Phone
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()
  const { currentUser, userRole, logout } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Combos', path: '/combos' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-earthy-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-display font-bold text-gradient">
              NAMA KARI KADAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-earthy-700 dark:text-earthy-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-earthy-100 dark:bg-earthy-800 hover:bg-earthy-200 dark:hover:bg-earthy-700 transition-colors duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Quick Actions */}
            <Link
              to="/reservation"
              className="btn-primary text-sm py-2 px-4"
            >
              Book Table
            </Link>

            <a
              href="tel:+1234567890"
              className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">Call Now</span>
            </a>

            {/* Auth */}
            {currentUser ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-earthy-600 dark:text-earthy-400">
                  {userRole === 'admin' ? 'Admin' : userRole === 'staff' ? 'Staff' : 'Welcome'}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-earthy-600 hover:text-primary-600 transition-colors duration-200"
                >
                  <LogOut size={16} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 text-earthy-600 hover:text-primary-600 transition-colors duration-200"
              >
                <User size={16} />
                <span className="text-sm font-medium">Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-earthy-100 dark:bg-earthy-800 hover:bg-earthy-200 dark:hover:bg-earthy-700 transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-earthy-900 border-t border-earthy-200 dark:border-earthy-700"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-earthy-700 dark:text-earthy-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-earthy-200 dark:border-earthy-700 space-y-4">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 w-full p-2 rounded-lg bg-earthy-100 dark:bg-earthy-800 hover:bg-earthy-200 dark:hover:bg-earthy-700 transition-colors duration-200"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                {/* Quick Actions */}
                <Link
                  to="/reservation"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Book Table
                </Link>

                <a
                  href="tel:+1234567890"
                  className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  <Phone size={16} />
                  <span className="font-medium">Call Now</span>
                </a>

                {/* Auth */}
                {currentUser ? (
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 w-full text-earthy-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 text-earthy-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    <User size={16} />
                    <span>Login</span>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 