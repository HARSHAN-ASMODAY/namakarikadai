import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Heart, Award, Users, Clock } from 'lucide-react'

const AboutSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Heart,
      title: 'Passion for Food',
      description: 'Every dish is crafted with love and attention to detail'
    },
    {
      icon: Award,
      title: 'Quality Ingredients',
      description: 'We source only the finest and freshest ingredients'
    },
    {
      icon: Users,
      title: 'Family Tradition',
      description: 'Recipes passed down through generations of our family'
    },
    {
      icon: Clock,
      title: 'Timeless Service',
      description: 'Dedicated to providing exceptional dining experiences'
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-earthy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-earthy-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-lg text-earthy-600 dark:text-earthy-400 mb-6 leading-relaxed">
              NAMA KARI KADAI was born from a simple dream: to bring the authentic 
              flavors of India to every table. What started as a small family kitchen 
              has grown into a beloved culinary destination, where every dish tells a 
              story of tradition, passion, and love for food.
            </p>
            <p className="text-lg text-earthy-600 dark:text-earthy-400 mb-8 leading-relaxed">
              Our journey began in the bustling streets of Mumbai, where our grandmother 
              would cook for the entire neighborhood. Today, we continue her legacy by 
              serving the same authentic recipes that have been passed down through 
              generations, now with a modern twist that appeals to contemporary palates.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-earthy-600 dark:text-earthy-400">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-earthy-600 dark:text-earthy-400">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-saffron-100 dark:from-primary-900 dark:to-saffron-900 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🍛</div>
                <h3 className="text-2xl font-display font-semibold text-earthy-900 dark:text-white mb-2">
                  Authentic Indian Cuisine
                </h3>
                <p className="text-earthy-600 dark:text-earthy-400">
                  Every dish tells a story
                </p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-saffron-500 text-white p-3 rounded-full">
              <Award className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-600 text-white p-3 rounded-full">
              <Heart className="w-6 h-6" />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12 text-earthy-900 dark:text-white">
            Our Values
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-saffron-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-earthy-900 dark:text-white">
                  {value.title}
                </h4>
                <p className="text-earthy-600 dark:text-earthy-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-saffron-500 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              To create memorable dining experiences by serving authentic Indian cuisine 
              with warmth, hospitality, and uncompromising quality. We believe that food 
              has the power to bring people together and create lasting connections.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 