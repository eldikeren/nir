'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'טלפון',
      value: '+972-50-123-4567',
      link: 'tel:+972501234567',
      color: 'neon-green'
    },
    {
      icon: FaEnvelope,
      title: 'אימייל',
      value: 'nir@nirfriedman.com',
      link: 'mailto:nir@nirfriedman.com',
      color: 'neon-blue'
    },
    {
      icon: FaWhatsapp,
      title: 'ווטסאפ',
      value: '+972-50-123-4567',
      link: 'https://wa.me/972501234567',
      color: 'neon-green'
    }
  ]

  const socialLinks = [
    {
      icon: FaInstagram,
      name: 'Instagram אישי',
      link: 'https://www.instagram.com/nir_friedman/',
      color: 'neon-purple'
    },
    {
      icon: FaInstagram,
      name: 'Instagram דיבוב',
      link: 'https://www.instagram.com/nir_friedman_dubbing/',
      color: 'neon-blue'
    },
    {
      icon: FaFacebook,
      name: 'Facebook',
      link: 'https://www.facebook.com/nirfridman/?locale=he_IL',
      color: 'neon-blue'
    },
    {
      icon: FaYoutube,
      name: 'YouTube',
      link: 'https://www.youtube.com/@Niro53/featured',
      color: 'neon-red'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-gray to-stage-black relative overflow-hidden">
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
             בואו נעשה את זה יחד
           </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
          >
            מוכנים לשדרג את ההפקה הבאה שלכם עם קול מנצח?
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg text-gray-500 font-opensans hebrew-text max-w-2xl mx-auto mt-4"
          >
            בין אם מדובר בדיבוב, פודקאסט, קריינות או פרויקט מוזיקלי – זה הזמן להתחיל
          </motion.p>
        </motion.div>

        {/* Main CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(139, 92, 246, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center px-12 py-6 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full text-white font-bold text-xl overflow-hidden"
          >
            <span className="relative z-10">
              צרו קשר עכשיו
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-red to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 border-neon-purple"
            />
          </motion.button>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group text-center p-6 glass-effect rounded-xl border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 rounded-full bg-gradient-to-r from-${method.color}/20 to-${method.color}/40 flex items-center justify-center mb-4 mx-auto`}
              >
                <method.icon className={`w-8 h-8 text-${method.color}`} />
              </motion.div>
              <h4 className="text-lg font-semibold text-white hebrew-text mb-2">
                {method.title}
              </h4>
              <p className="text-gray-400 font-opensans hebrew-text">
                {method.value}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bebas neon-glow hebrew-text mb-8">
            עקבו אחרי ניר ברשתות החברתיות
          </h3>
          <div className="flex justify-center space-x-6 space-x-reverse">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.4 + index * 0.2 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-14 h-14 rounded-full bg-gradient-to-r from-${social.color}/20 to-${social.color}/40 border border-${social.color}/30 flex items-center justify-center hover:border-${social.color}/60 transition-all duration-300`}
              >
                <social.icon className={`w-6 h-6 text-${social.color}`} />
              </motion.a>
            ))}
          </div>
        </motion.div>

                 {/* Footer */}
         <motion.div
           initial={{ opacity: 0 }}
           animate={inView ? { opacity: 1 } : {}}
           transition={{ duration: 1, delay: 2.7 }}
           className="text-center mt-16 pt-8 border-t border-gray-800"
         >
           <p className="text-gray-500 font-opensans hebrew-text">
             © 2025 ניר פרידמן. כל הזכויות שמורות.
           </p>
           <p className="text-gray-600 font-opensans hebrew-text text-sm mt-2">
             תתנו לקול של ניר לעבוד בשבילכם - בהיאהאא
           </p>
           <p className="text-gray-600 font-opensans hebrew-text text-xs mt-4">
             האתר נבנה ע"י{' '}
             <a 
               href="mailto:info@eladkeren.com" 
               className="text-neon-purple hover:text-neon-blue transition-colors duration-300"
             >
               אלעד קרן
             </a>
           </p>
         </motion.div>
      </div>
    </section>
  )
}

export default CTASection 