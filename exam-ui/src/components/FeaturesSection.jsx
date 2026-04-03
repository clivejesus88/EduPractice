import React from 'react';
import {
  ZapIcon,
  TrendingUpIcon,
  ClockIcon,
  BookOpenIcon,
  BarChart3Icon,
  SmartphoneIcon } from
'lucide-react';
import { motion } from 'framer-motion';
const features = [
{
  icon: ZapIcon,
  title: 'Instant Feedback',
  description:
  'Get real-time explanations for every answer, helping you learn from mistakes immediately.'
},
{
  icon: TrendingUpIcon,
  title: 'Progress Tracking',
  description:
  'Monitor your improvement over time with detailed progress charts and insights.'
},
{
  icon: ClockIcon,
  title: 'Timed Practice',
  description:
  'Simulate real exam conditions with customizable timers to build speed and confidence.'
},
{
  icon: BookOpenIcon,
  title: 'Detailed Solutions',
  description:
  'Access step-by-step breakdowns for every question to understand the methodology.'
},
{
  icon: BarChart3Icon,
  title: 'Performance Analytics',
  description:
  'Identify weak areas with comprehensive analytics and targeted recommendations.'
},
{
  icon: SmartphoneIcon,
  title: 'Mobile Friendly',
  description:
  'Practice anywhere, anytime with our fully responsive mobile-optimized platform.'
}];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white py-20 md:py-32 overflow-hidden relative">
      
      {/* Large decorative circle */}
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute -top-40 -right-40 z-0 pointer-events-none">
        
        <svg
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <circle
            cx="200"
            cy="200"
            r="198"
            stroke="#fbbf24"
            strokeWidth="4"
            strokeDasharray="20 20" />
          
        </svg>
      </motion.div>

      {/* Floating plus signs */}
      {[
      {
        top: '10%',
        left: '10%',
        delay: 0
      },
      {
        top: '40%',
        right: '5%',
        delay: 1
      },
      {
        bottom: '20%',
        left: '5%',
        delay: 2
      },
      {
        bottom: '10%',
        right: '15%',
        delay: 0.5
      }].
      map((pos, i) =>
      <motion.div
        key={i}
        animate={{
          y: [-15, 15, -15]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: pos.delay
        }}
        className="absolute z-0 pointer-events-none"
        style={pos}>
        
          <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
            <path
            d="M12 2V22M2 12H22"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeLinecap="round" />
          
          </svg>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 overflow-hidden flex flex-col items-center">
          <motion.h2
            initial={{
              y: 100
            }}
            whileInView={{
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20
            }}
            className="text-4xl md:text-5xl font-bold text-slate-950 mb-4 relative inline-block">
            
            Everything You Need to Excel
            {/* Accent line */}
            <motion.svg
              className="absolute -bottom-4 left-0 w-full h-2"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
              initial={{
                scaleX: 0
              }}
              whileInView={{
                scaleX: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: 'easeOut'
              }}
              style={{
                transformOrigin: 'left'
              }}>
              
              <path
                d="M0 5H100"
                stroke="#fbbf24"
                strokeWidth="4"
                strokeLinecap="round" />
              
            </motion.svg>
          </motion.h2>
          <motion.p
            initial={{
              y: 100
            }}
            whileInView={{
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.1
            }}
            className="text-xl text-slate-600 max-w-2xl mx-auto mt-6">
            
            Comprehensive tools designed to help you master Physics and
            Mathematics
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{
              y: 150,
              scale: 0.9
            }}
            whileInView={{
              y: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: index * 0.1
            }}
            whileHover={{
              y: -12,
              scale: 1.02
            }}
            className="bg-white border border-slate-200 rounded-2xl p-8 transition-colors duration-300 hover:border-amber-400 group relative overflow-hidden">
            
              <motion.div
              className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 origin-center relative z-10"
              whileHover={{
                rotate: 180,
                scale: 1.1
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}>
              
                <feature.icon className="w-7 h-7 text-amber-500" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-amber-500 transition-colors relative z-10">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}