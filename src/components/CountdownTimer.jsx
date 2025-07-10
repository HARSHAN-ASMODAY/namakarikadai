import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const endOfDay = new Date()
      endOfDay.setHours(23, 59, 59, 999)
      
      const difference = endOfDay - now
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        
        setTimeLeft({ hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <div className="flex justify-center space-x-4">
      <motion.div
        key={timeLeft.hours}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="bg-primary-600 text-white rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.hours)}</div>
          <div className="text-xs opacity-80">Hours</div>
        </div>
      </motion.div>

      <div className="flex items-center text-2xl font-bold text-primary-600">:</div>

      <motion.div
        key={timeLeft.minutes}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="bg-primary-600 text-white rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.minutes)}</div>
          <div className="text-xs opacity-80">Minutes</div>
        </div>
      </motion.div>

      <div className="flex items-center text-2xl font-bold text-primary-600">:</div>

      <motion.div
        key={timeLeft.seconds}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center"
      >
        <div className="bg-primary-600 text-white rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold">{formatNumber(timeLeft.seconds)}</div>
          <div className="text-xs opacity-80">Seconds</div>
        </div>
      </motion.div>
    </div>
  )
}

export default CountdownTimer 