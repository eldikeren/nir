'use client'

import { motion } from 'framer-motion'
import { FaVolumeUp } from 'react-icons/fa'

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
                 <img
           src="/רקע.jpg"
           alt="ניר פרידמן - רקע"
           className="w-full h-full object-cover opacity-70"
         />
                 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

             {/* Content */}
       <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
                     {/* Main Title */}
           <motion.h1
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.5 }}
             className="text-7xl md:text-9xl lg:text-[12rem] font-bebas neon-glow leading-none"
           >
             ניר פרידמן
           </motion.h1>

           {/* Subtitle */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-roboto hebrew-text"
           >
             שחקן. זמר. מדבב. יוצר.
           </motion.p>

           {/* Description */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1.5 }}
             className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
           >
             עולם של קול, במה ומוזיקה – במקום אחד.
           </motion.p>

          

                     {/* Scroll Indicator */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 2.5 }}
             className="mt-16"
           >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="group cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 border border-neon-purple/50 flex items-center justify-center backdrop-blur-sm group-hover:border-neon-purple group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300">
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-6 h-6 text-neon-purple group-hover:text-neon-blue transition-colors duration-300"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 3 }}
                className="text-xs text-neon-purple text-center mt-2 font-opensans hebrew-text opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              >
                גלול מטה
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 right-20 w-32 h-32 border border-neon-purple/30 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{ 
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 left-20 w-24 h-24 border border-neon-red/30 rounded-full opacity-20"
      />
    </section>
  )
}

export default HeroSection 