'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const brands = [
    { name: 'אוסם', logo: '/אוסם.jpeg', type: 'image' },
    { name: 'סלקום', logo: '/סלקום.png', type: 'image' },
    { name: 'פפסי', logo: '/פפסי.png', type: 'image' },
    { name: 'קוקה-קולה', logo: '/קוקה לולה.png', type: 'image' },
    { name: 'יפאורה תבואי', logo: '/יפאורה.jpeg', type: 'image' },
    { name: 'בזק', logo: '/בזק.png', type: 'image' }
  ]

  const testimonials = [
    {
      name: 'קוקה-קולה ישראל',
      text: 'הקול של ניר הוסיף עוצמה וקסם לקמפיין שלנו. מקצועי, יצירתי ותמיד בזמן.',
      rating: 5
    },
    {
      name: 'סלקום',
      text: 'עבדנו עם ניר על מספר קמפיינים. התוצאות תמיד מדהימות והעבודה חלקה.',
      rating: 5
    },
    {
      name: 'בזק',
      text: 'ניר מביא איכות מקצועית גבוהה ויצירתיות ייחודית לכל פרויקט.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-matte-black relative overflow-hidden">
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
             מותגים ואנשים שסומכים על ניר
           </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl text-gray-400 font-opensans hebrew-text max-w-3xl mx-auto"
          >
                         אוסם, סלקום, פפסי, קוקה-קולה, יפאורה תבואי, בזק ועוד רבים – כולם כבר שמעו את הקול שמוביל קמפיינים מנצחים
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-6 glass-effect rounded-xl border border-neon-purple/30"
            >
                             <div className="mb-4 flex justify-center">
                 {brand.type === 'emoji' ? (
                   <div className="text-4xl">{brand.logo}</div>
                 ) : (
                                       <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="h-8 w-auto object-contain"
                    />
                 )}
               </div>
              <h4 className="text-sm font-semibold text-white hebrew-text">
                {brand.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
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
                transition={{ duration: 0.8, delay: 1.8 + index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative p-6 glass-effect rounded-xl border border-neon-blue/30"
              >
                <div className="flex items-center justify-between mb-4">
                  <h5 className="font-semibold text-white hebrew-text">
                    {testimonial.name}
                  </h5>
                  <div className="flex space-x-1 space-x-reverse">
                                         {[...Array(testimonial.rating)].map((_, i) => (
                       <motion.div
                         key={i}
                         initial={{ scale: 0 }}
                         animate={inView ? { scale: 1 } : {}}
                         transition={{ duration: 0.3, delay: 2.1 + index * 0.2 + i * 0.1 }}
                         className="text-neon-purple text-xl neon-glow"
                       >
                         ★
                       </motion.div>
                     ))}
                  </div>
                </div>
                <p className="text-gray-300 font-opensans hebrew-text leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bebas neon-glow text-neon-purple mb-2">50+</div>
            <div className="text-sm text-gray-400 hebrew-text">מותגים</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bebas neon-glow text-neon-blue mb-2">200+</div>
            <div className="text-sm text-gray-400 hebrew-text">קמפיינים</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bebas neon-glow text-neon-red mb-2">98%</div>
            <div className="text-sm text-gray-400 hebrew-text">שביעות רצון</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bebas neon-glow text-neon-purple mb-2">∞</div>
            <div className="text-sm text-gray-400 hebrew-text">יצירתיות</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 