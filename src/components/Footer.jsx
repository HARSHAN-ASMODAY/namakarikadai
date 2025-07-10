import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earthy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-display font-bold text-gradient">
                NAMA KARI KADAI
              </span>
            </div>
            <p className="text-earthy-300 mb-6">
              Experience authentic Indian cuisine with the perfect blend of tradition 
              and innovation. Every dish tells a story of passion and culinary excellence.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/combos" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  Special Combos
                </Link>
              </li>
              <li>
                <Link 
                  to="/reservation" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  Book Table
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-earthy-300">
                  123 Spice Street<br />
                  Curry District, CD 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:info@namakarikadai.com" 
                  className="text-earthy-300 hover:text-white transition-colors duration-200"
                >
                  info@namakarikadai.com
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <div className="text-earthy-300">
                    <span className="font-medium">Monday - Friday:</span><br />
                    11:00 AM - 11:00 PM
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <div className="text-earthy-300">
                    <span className="font-medium">Saturday - Sunday:</span><br />
                    10:00 AM - 12:00 AM
                  </div>
                </div>
              </div>
            </div>
            
            {/* Special Notice */}
            <div className="mt-6 p-3 bg-primary-600/20 rounded-lg border border-primary-600/30">
              <p className="text-sm text-earthy-300">
                🚚 Free delivery on orders above $30<br />
                ⏰ 15-minute pickup guarantee
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earthy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-earthy-400 text-sm mb-4 md:mb-0">
            © {currentYear} NAMA KARI KADAI. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <Link to="/privacy" className="text-earthy-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-earthy-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-earthy-400 hover:text-white transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 z-50"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer 