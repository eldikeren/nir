'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaYoutube, FaPaperPlane } from 'react-icons/fa'

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const [isMobile, setIsMobile] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Prevent form jumping on mobile
  useEffect(() => {
    if (isMobile && formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, textarea, select')
      
      const handleFocus = (e: Event) => {
        const target = e.target as HTMLElement
        // Prevent default scroll behavior
        e.preventDefault()
        
        // Smooth scroll to input with offset
        setTimeout(() => {
          target.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          })
        }, 100)
      }
      
      const handleBlur = () => {
        // Reset scroll position if needed
        setTimeout(() => {
          window.scrollTo(0, window.scrollY)
        }, 100)
      }
      
      inputs.forEach(input => {
        input.addEventListener('focus', handleFocus)
        input.addEventListener('blur', handleBlur)
      })
      
      return () => {
        inputs.forEach(input => {
          input.removeEventListener('focus', handleFocus)
          input.removeEventListener('blur', handleBlur)
        })
      }
    }
  }, [isMobile])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailBody = `שלום ניר,

הגעתי אליך דרך האתר שלך.

פרטי הפנייה:
שם: ${formData.name}
אימייל: ${formData.email}
טלפון: ${formData.phone}
סיבת פנייה: ${formData.reason}

הודעה:
${formData.message}

תודה,
${formData.name}`
    
    const mailtoLink = `mailto:Nironaldo@gmail.com?subject=פנייה חדשה מ-${encodeURIComponent(formData.name)} - ${encodeURIComponent(formData.reason)}&body=${encodeURIComponent(emailBody)}`
    
    if (isMobile) {
      // On mobile, use direct mailto link
      window.location.href = mailtoLink
      setShowSuccess(true)
      setShowError(false)
      setTimeout(() => setShowSuccess(false), 5000)
    } else {
      // On desktop, try multiple methods
      let success = false
      
      // Method 1: Try window.open
      try {
        const newWindow = window.open(mailtoLink, '_blank')
        if (newWindow) {
          success = true
        }
      } catch (error) {
        console.log('window.open failed')
      }
      
      // Method 2: Try temporary link
      if (!success) {
        try {
          const tempLink = document.createElement('a')
          tempLink.href = mailtoLink
          tempLink.target = '_blank'
          tempLink.style.display = 'none'
          document.body.appendChild(tempLink)
          tempLink.click()
          document.body.removeChild(tempLink)
          success = true
        } catch (error) {
          console.log('temp link failed')
        }
      }
      
      // Method 3: Copy to clipboard as fallback
      if (!success) {
        try {
          navigator.clipboard.writeText(`To: Nironaldo@gmail.com\nSubject: פנייה חדשה מ-${formData.name} - ${formData.reason}\n\n${emailBody}`)
          setShowError(true)
          setShowSuccess(false)
          setTimeout(() => setShowError(false), 5000)
        } catch (error) {
          setShowError(true)
          setShowSuccess(false)
          setTimeout(() => setShowError(false), 5000)
        }
      } else {
        setShowSuccess(true)
        setShowError(false)
        setTimeout(() => setShowSuccess(false), 5000)
      }
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      reason: '',
      message: ''
    })
  }

  const handleEmailClick = (email: string, subject: string, body: string) => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    if (isMobile) {
      // On mobile, use direct mailto link
      window.location.href = mailtoLink
    } else {
      // On desktop, try multiple methods
      let success = false
      
      // Method 1: Try window.open
      try {
        const newWindow = window.open(mailtoLink, '_blank')
        if (newWindow) {
          success = true
        }
      } catch (error) {
        console.log('window.open failed')
      }
      
      // Method 2: Try temporary link
      if (!success) {
        try {
          const tempLink = document.createElement('a')
          tempLink.href = mailtoLink
          tempLink.target = '_blank'
          tempLink.style.display = 'none'
          document.body.appendChild(tempLink)
          tempLink.click()
          document.body.removeChild(tempLink)
          success = true
        } catch (error) {
          console.log('temp link failed')
        }
      }
      
      // Method 3: Copy to clipboard as fallback
      if (!success) {
        try {
          navigator.clipboard.writeText(`${email}\nSubject: ${subject}\n\n${body}`)
          alert(`כתובת האימייל הועתקה ללוח: ${email}`)
        } catch (error) {
          alert(`לא ניתן לפתוח אימייל. אנא שלח אימייל ישירות ל-${email}`)
        }
      }
    }
  }

  const contactMethods = [
    {
      icon: FaPhone,
      title: 'טלפון',
      value: '054-459-0633',
      link: 'tel:+972544590633',
      color: 'neon-green'
    },
    {
      icon: FaEnvelope,
      title: 'אימייל',
      value: 'Nironaldo@gmail.com',
      onClick: () => handleEmailClick(
        'Nironaldo@gmail.com',
        'פנייה מהאתר',
        'שלום ניר, הגעתי אליך דרך האתר שלך ואני מעוניין לתאם איתך פגישה. תודה'
      ),
      color: 'neon-blue'
    },
    {
      icon: FaWhatsapp,
      title: 'ווטסאפ',
      value: '054-459-0633',
      link: 'https://wa.me/972544590633?text=היי%20ניר%2C%20הגעתי%20אליך%20דרך%20האתר%20שלך%20ואני%20מעוניין%20לתאם%20איתך%20פגישה.%20תודה',
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

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center hebrew-text mb-6"
            >
              ✅ ההודעה נשלחה! אימייל נפתח עם כל הפרטים.
            </motion.div>
          )}

          {showError && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center hebrew-text mb-6"
            >
              ⚠️ לא ניתן לפתוח אימייל. פרטי ההודעה הועתקו ללוח.
            </motion.div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 hebrew-text">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 hebrew-text form-input"
                  placeholder="הכנס את שמך המלא"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 hebrew-text">
                  אימייל *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 hebrew-text form-input"
                  placeholder="הכנס את כתובת האימייל שלך"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 hebrew-text">
                  טלפון
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 hebrew-text form-input"
                  placeholder="הכנס את מספר הטלפון שלך"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2 hebrew-text">
                  סיבת הפנייה *
                </label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 hebrew-text form-input"
                >
                  <option value="">בחר סיבת פנייה</option>
                  <option value="דיבוב מקצועי">דיבוב מקצועי</option>
                  <option value="הקלטת פודקאסט">הקלטת פודקאסט</option>
                  <option value="קריינות לפרסומות">קריינות לפרסומות</option>
                  <option value="הפקה מוזיקלית">הפקה מוזיקלית</option>
                  <option value="הופעה מוזיקלית">הופעה מוזיקלית</option>
                  <option value="שיתוף פעולה">שיתוף פעולה</option>
                  <option value="אחר">אחר</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 hebrew-text">
                הודעה *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/20 transition-all duration-300 hebrew-text resize-none form-input"
                placeholder="ספר לנו על הפרויקט שלך..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 50px rgba(139, 92, 246, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-12 py-6 rounded-full text-white font-bold text-xl overflow-hidden transition-all duration-300 bg-gradient-to-r from-neon-purple to-neon-blue"
            >
              <span className="relative z-10 flex items-center">
                <FaPaperPlane className="mr-3" />
                שלח הודעה
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-red to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group text-center p-6 glass-effect rounded-xl border border-neon-purple/30 hover:border-neon-purple/60 transition-all duration-300 cursor-pointer"
              onClick={method.onClick}
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
            </motion.div>
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
           <p className="text-gray-600 font-opensans hebrew-text text-lg mt-4 neon-glow">
             האתר נבנה ע"י{' '}
             <button 
               onClick={() => handleEmailClick(
                 'info@eladkeren.com',
                 'פנייה מהאתר',
                 'שלום אלעד, הגעתי אליך דרך האתר של ניר פרידמן ואני מעוניין בשירותי פיתוח אתרים. תודה'
               )}
               className="text-neon-purple hover:text-neon-blue transition-colors duration-300 font-bold text-xl cursor-pointer"
             >
               אלעד קרן
             </button>
           </p>
         </motion.div>
      </div>
    </section>
  )
}

export default CTASection 