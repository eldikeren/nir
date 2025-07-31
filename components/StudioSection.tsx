'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMicrophone, FaHeadphones, FaMusic, FaPodcast, FaQuoteLeft } from 'react-icons/fa'

const StudioSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const studioFeatures = [
    {
      icon: FaMicrophone,
      title: 'דיבוב מקצועי',
      description: 'אולפן מתקדם לדיבוב סרטים, סדרות ופרסומות'
    },
    {
      icon: FaPodcast,
      title: 'הקלטת פודקאסטים',
      description: 'איכות Broadcast עם ציוד מקצועי'
    },
    {
      icon: FaMusic,
      title: 'הפקה מוזיקלית',
      description: 'הקלטות מוזיקה ואודיו באיכות גבוהה'
    },
    {
      icon: FaHeadphones,
      title: 'עריכה והפקה',
      description: 'שירותי עריכה והפקה מלאים'
    }
  ]

  const testimonials = [
    {
      name: 'דוד כהן',
      role: 'יוצר פודקאסט',
      text: 'האולפן של ניר הוא המקום המושלם להקלטת פודקאסטים. האיכות מקצועית והאווירה נוחה.',
      rating: 5
    },
    {
      name: 'שרה לוי',
      role: 'מדבבת',
      text: 'עבדתי באולפנים רבים, אבל האולפן של ניר הוא הטוב ביותר. הציוד מתקדם והתוצאות מדהימות.',
      rating: 5
    },
    {
      name: 'מיכאל רוזן',
      role: 'מפיק מוזיקלי',
      text: 'האולפן מציע את כל מה שצריך להפקה מקצועית. ניר מקצועי ומנוסה מאוד.',
      rating: 5
    }
  ]

  return (
    <section id="studio" className="py-20 bg-gradient-to-b from-matte-black to-dark-gray relative overflow-hidden">
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
             האולפן של ניר
           </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
          >
            הקול שכולנו מכירים ואוהבים
          </motion.p>
        </motion.div>

        {/* Studio Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
                     <div className="space-y-6">
             <div className="flex items-center justify-center mb-6">
                               <img
                  src="/דיבוב.png"
                  alt="קור דיבוב ניר פרידמן"
                  className="h-16 w-auto object-contain"
                />
             </div>
             <h3 className="text-3xl font-bebas neon-glow-blue hebrew-text mb-6">
               הבית לדיבוב ופודקאסטים
             </h3>
            <div className="space-y-4 text-lg text-gray-300 font-opensans hebrew-text leading-relaxed">
              <p>
                ניר פרידמן הוא אחד היוצרים הרב־תחומיים הבולטים בישראל. מהמסך הקטן בסדרות אייקוניות כמו פלורנטין ועד הבמות הגדולות עם הלהקות המצליחות שלו, ומעולם המדבבים לעולם הקריינות והפודקאסטים – ניר חי ונושם יצירה.
              </p>
              <p>
                מייסד להקת השוונג של הפיתה, ניר מביא בכל פרויקט שילוב נדיר של תשוקה, מקצועיות ואנרגיה שלא משאירה אף אחד אדיש.
              </p>
              <p>
                באולפן ההקלטות של ניר פרידמן הדגש הוא על דיוק, איכות וביצועים מקצועיים. בין אם מדובר בדיבוב לסדרות וסרטים, קריינות לקמפיינים גדולים או הפקה מלאה של פודקאסטים – זה המקום שבו קול ואומנות נפגשים.
              </p>
            </div>
          </div>

                     <div className="relative">
                            <motion.img
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.3 }}
                 src="/אוזניות.JPG"
                 alt="ניר פרידמן"
                 className="w-full h-[400px] object-cover rounded-2xl"
               />
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
           </div>
        </motion.div>

        {/* Studio Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {studioFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-6 glass-effect rounded-xl border border-neon-blue/30"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-4 mx-auto"
              >
                <feature.icon className="w-6 h-6 text-neon-blue" />
              </motion.div>
              <h4 className="text-lg font-semibold text-white hebrew-text mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-400 hebrew-text">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bebas neon-glow text-center hebrew-text mb-12">
            לקוחות מרוצים מספרים
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.1 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 glass-effect rounded-xl border border-neon-purple/30"
              >
                <FaQuoteLeft className="w-8 h-8 text-neon-purple/50 mb-4" />
                <p className="text-gray-300 font-opensans hebrew-text leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-white hebrew-text">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-gray-400 hebrew-text">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex space-x-1 space-x-reverse">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 2.5 + index * 0.2 + i * 0.1 }}
                        className="w-4 h-4 bg-neon-purple rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudioSection 