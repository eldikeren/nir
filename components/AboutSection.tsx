'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const highlightWords = ['שחקן', 'מדבב', 'זמר', 'יוצר']

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-gray to-matte-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/nir.jpg"
                alt="ניר פרידמן"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-neon-purple/30 animate-pulse"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-4 -right-4 w-16 h-16 border border-neon-blue/50 rounded-full opacity-60"
            />
            
            <motion.div
              animate={{ 
                rotate: [360, 0],
                y: [0, -10, 0]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-4 -left-4 w-12 h-12 border border-neon-red/50 rounded-full opacity-60"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-6 mb-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img
                    src="/nir.jpg"
                    alt="ניר פרידמן"
                    className="w-20 h-20 rounded-full object-cover border-2 border-neon-purple/50 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full border-2 border-neon-purple/30 animate-pulse"></div>
                </motion.div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas neon-glow hebrew-text">
                  מאחורי הקול והבמה
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="space-y-6 text-lg text-gray-300 font-opensans hebrew-text leading-relaxed"
              >
                <p>
                  ניר פרידמן הוא אחד היוצרים הרב־תחומיים הבולטים בישראל. מהמסך הקטן בסדרות אייקוניות כמו{' '}
                  <span className="neon-glow-red font-semibold">פלורנטין</span> ועד הבמות הגדולות עם הלהקות המצליחות שלו, ומעולם המדבבים לעולם הקריינות והפודקאסטים – ניר חי ונושם יצירה.
                </p>
                
                <p>
                  בכל פרויקט הוא מביא שילוב נדיר של תשוקה, מקצועיות ואנרגיה שלא משאירה אף אחד אדיש.
                </p>

                {/* Highlighted words */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {highlightWords.map((word, index) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/30 rounded-full text-neon-purple font-semibold neon-glow"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 1.5 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bebas neon-glow text-neon-purple">30+</div>
                <div className="text-sm text-gray-400 hebrew-text">שנות ניסיון</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bebas neon-glow text-neon-blue">100+</div>
                <div className="text-sm text-gray-400 hebrew-text">פרויקטים</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bebas neon-glow text-neon-red">50+</div>
                <div className="text-sm text-gray-400 hebrew-text">דמויות מדובבות</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bebas neon-glow text-neon-purple">∞</div>
                <div className="text-sm text-gray-400 hebrew-text">יצירתיות</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 