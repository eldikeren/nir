'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useState } from 'react'

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const videoHighlights = [
    {
      title: 'פלורנטין',
      description: 'פלורנטין',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/mSTd9kqWuVQ'
    },
    {
      title: 'הופעה חיה',
      description: 'הופעה חיה',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/6xBLnhd5Ta4'
    },
    {
      title: 'דיבוב מקצועי',
      description: 'הקול שמאחורי הדמויות האהובות',
      thumbnail: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      videoUrl: 'https://www.youtube.com/embed/mSTd9kqWuVQ'
    }
  ]

  return (
    <section id="video" className="py-20 bg-dark-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
                     <motion.h2
             initial={{ opacity: 0 }}
             animate={inView ? { opacity: 1 } : {}}
             transition={{ duration: 1, delay: 0.3 }}
             className="text-5xl md:text-7xl lg:text-8xl font-bebas neon-glow mb-6 hebrew-text"
           >
             צפו בניר בפעולה
           </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
          >
            מקטעי משחק חזקים ועד הופעות חיות שמרעידות את הבמה – הכל במקום אחד
          </motion.p>
        </motion.div>

        {/* Main Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="relative mb-16"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden glass-effect border border-neon-purple/30">
            <iframe
              src="https://www.youtube.com/embed/mSTd9kqWuVQ?autoplay=0&mute=1&controls=1"
              title="ניר פרידמן - פלורנטין"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            
            {/* Video Controls Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-neon-purple flex items-center justify-center"
                  >
                    {isPlaying ? <FaPause className="w-5 h-5 text-white" /> : <FaPlay className="w-5 h-5 text-white" />}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full bg-neon-blue flex items-center justify-center"
                  >
                    {isMuted ? <FaVolumeMute className="w-4 h-4 text-white" /> : <FaVolumeUp className="w-4 h-4 text-white" />}
                  </motion.button>
                </div>
                
                <div className="text-white font-semibold hebrew-text">
                  Showreel 2024
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Video Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videoHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl glass-effect border border-neon-purple/30">
                <div className="aspect-video relative">
                  <img
                    src={highlight.thumbnail}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon-purple/80 flex items-center justify-center backdrop-blur-sm">
                      <FaPlay className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bebas neon-glow hebrew-text mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-400 font-opensans hebrew-text text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.1 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://www.youtube.com/@Niro53/videos"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full text-white font-bold text-lg"
          >
            <FaPlay className="w-5 h-5 mr-3" />
            צפו בעוד קטעים
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection 