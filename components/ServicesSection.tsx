'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTheaterMasks, FaMicrophone, FaHeadphones, FaPlay } from 'react-icons/fa'

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const services = [
    {
      icon: FaTheaterMasks,
      title: '🎭 שחקן',
      description: 'משחק שמחבר בין אמת לרגש – ויוצר חוויות בלתי נשכחות.',
      content: 'קטעי וידאו מסדרות וסרטים',
      color: 'neon-purple',
                  videoUrl: 'https://www.youtube.com/embed/mSTd9kqWuVQ',
      projects: ['פלורנטין', 'עניין של זמן', 'סרטים עלילתיים']
    },
    {
      icon: FaMicrophone,
      title: '🎤 זמר',
      description: 'מהבמות של תל אביב ועד לאוזניות שלכם – המוזיקה של ניר חיה ונושמת גראנג\' ורוק עם נשמה ישראלית.',
      content: 'נגן Spotify/YouTube עם שירים בולטים',
      color: 'neon-red',
      spotifyUrl: 'https://www.youtube.com/embed/6xBLnhd5Ta4',
      projects: ['הופעות חיות', 'אלבומי סטודיו', 'שיתופי פעולה']
    },
    {
      icon: FaHeadphones,
      title: '🎙 מדבב',
      description: 'מאחורי הדמויות האהובות והפרסומות הגדולות – הקול שמכיר את כל הטריקים כדי לסחוף את המאזין.',
      content: 'הטמעת דמואים קוליים עם אנימציית Waveform',
      color: 'neon-blue',
      audioUrl: '/audio/voice-demo.mp3',
      projects: ['דיבוב סרטים', 'סדרות טלוויזיה', 'פרסומות']
    }
  ]

  return (
    <section id="services" className="py-20 bg-matte-black relative overflow-hidden">
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
             תחומי פעילות
           </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
          >
            שלושה עולמות, אמן אחד – ניר פרידמן מביא את כל הכישורים שלו לכל פרויקט
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl glass-effect border border-${service.color}/30 hover:border-${service.color}/60 transition-all duration-300 h-full`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-full bg-gradient-to-r from-${service.color}/20 to-${service.color}/40 flex items-center justify-center mb-6 mx-auto`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h3 className={`text-2xl font-bebas neon-glow-${service.color.split('-')[1]} hebrew-text`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 font-opensans hebrew-text leading-relaxed">
                    {service.description}
                  </p>

                  {/* Projects List */}
                  <div className="flex flex-wrap justify-center gap-2 pt-4">
                    {service.projects.map((project, idx) => (
                      <span
                        key={project}
                        className={`px-3 py-1 text-xs bg-${service.color}/10 border border-${service.color}/30 rounded-full text-${service.color}`}
                      >
                        {project}
                      </span>
                    ))}
                  </div>

                  {/* Media Content */}
                  <div className="mt-6">
                    {service.videoUrl && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src={service.videoUrl}
                          title={service.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                    
                    {service.spotifyUrl && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src={service.spotifyUrl}
                          title={service.title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="encrypted-media"
                        />
                      </div>
                    )}
                    
                    {service.audioUrl && (
                      <div className="relative p-4 bg-dark-gray rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400 hebrew-text">דמו קולי</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-10 h-10 rounded-full bg-${service.color} flex items-center justify-center`}
                          >
                            <FaPlay className="w-4 h-4 text-white" />
                          </motion.button>
                        </div>
                        {/* Waveform Animation */}
                        <div className="flex items-center justify-center space-x-1 space-x-reverse mt-4">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                height: [10, 30, 10],
                                opacity: [0.5, 1, 0.5]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.1
                              }}
                              className={`w-1 bg-${service.color} rounded-full`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-${service.color}/5 to-${service.color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 