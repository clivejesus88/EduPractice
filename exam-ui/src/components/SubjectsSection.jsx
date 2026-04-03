import React from 'react';
import { AtomIcon, CalculatorIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const subjects = [
{
  icon: AtomIcon,
  name: 'Physics',
  questions: '25,000+',
  levels: ['Foundation', 'Intermediate', 'Advanced'],
  color: 'emerald',
  accent: 'text-emerald-400',
  bg: 'bg-emerald-400',
  bgLight: 'bg-emerald-900',
  borderHover: 'hover:border-emerald-400',
  graphic:
  <motion.svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-10 -right-10 opacity-20 pointer-events-none"
    animate={{
      rotate: 360
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: 'linear'
    }}>
    
        <ellipse
      cx="100"
      cy="100"
      rx="40"
      ry="90"
      transform="rotate(30 100 100)"
      stroke="#34d399"
      strokeWidth="4" />
    
        <ellipse
      cx="100"
      cy="100"
      rx="40"
      ry="90"
      transform="rotate(90 100 100)"
      stroke="#34d399"
      strokeWidth="4" />
    
        <ellipse
      cx="100"
      cy="100"
      rx="40"
      ry="90"
      transform="rotate(150 100 100)"
      stroke="#34d399"
      strokeWidth="4" />
    
        <circle cx="100" cy="100" r="15" fill="#34d399" />
      </motion.svg>

},
{
  icon: CalculatorIcon,
  name: 'Mathematics',
  questions: '25,000+',
  levels: ['Algebra', 'Calculus', 'Statistics'],
  color: 'amber',
  accent: 'text-amber-400',
  bg: 'bg-amber-400',
  bgLight: 'bg-amber-900',
  borderHover: 'hover:border-amber-400',
  graphic:
  <motion.svg
    width="200"
    height="100"
    viewBox="0 0 200 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-10 -right-10 opacity-20 pointer-events-none"
    animate={{
      x: [-20, 20, -20]
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: 'easeInOut'
    }}>
    
        <path
      d="M0 50 Q 50 0, 100 50 T 200 50"
      stroke="#fbbf24"
      strokeWidth="8"
      fill="none"
      strokeLinecap="round" />
    
      </motion.svg>

}];

export function SubjectsSection() {
  return (
    <section
      id="subjects"
      className="bg-slate-950 py-20 md:py-32 overflow-hidden relative">
      
      {/* Background dot grid */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="darkDotGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              
              <circle cx="2" cy="2" r="1.5" fill="#1e293b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#darkDotGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 overflow-hidden">
          <motion.h2
            initial={{
              y: 100
            }}
            whileInView={{
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-4">
            
            Choose Your Subject
          </motion.h2>
          <motion.p
            initial={{
              y: 100
            }}
            whileInView={{
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.1
            }}
            className="text-xl text-slate-400 max-w-2xl mx-auto">
            
            Dive deep into Physics or Mathematics with our comprehensive
            question banks
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) =>
          <motion.div
            key={subject.name}
            initial={{
              x: index === 0 ? -200 : 200,
              scale: 0.9
            }}
            whileInView={{
              x: 0,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              type: 'spring',
              stiffness: 80,
              damping: 20,
              delay: 0.1
            }}
            whileHover={{
              scale: 1.03,
              y: -10
            }}
            className={`bg-slate-900 border-2 border-slate-800 rounded-3xl p-10 transition-colors duration-300 ${subject.borderHover} group relative overflow-hidden`}>
            
              {subject.graphic}

              <motion.div
              whileHover={{
                rotate: 180,
                scale: 1.1
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15
              }}
              className={`w-16 h-16 ${subject.bgLight} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
              
                <subject.icon className={`w-8 h-8 ${subject.accent}`} />
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                {subject.name}
              </h3>
              <p className="text-slate-400 mb-6 relative z-10">
                {subject.questions} practice questions
              </p>

              <div className="space-y-3 mb-8 relative z-10">
                <div className="text-sm text-slate-500 font-medium">
                  Difficulty Levels:
                </div>
                <div className="flex flex-wrap gap-2">
                  {subject.levels.map((level, i) =>
                <motion.span
                  key={level}
                  initial={{
                    scale: 0
                  }}
                  whileInView={{
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + i * 0.1
                  }}
                  whileHover={{
                    scale: 1.1
                  }}
                  className="px-4 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium cursor-default">
                  
                      {level}
                    </motion.span>
                )}
                </div>
              </div>

              <motion.button
              whileHover="hover"
              whileTap={{
                scale: 0.95
              }}
              className={`w-full ${subject.bg} text-slate-950 px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 overflow-hidden relative z-10`}>
              
                <motion.span
                variants={{
                  hover: {
                    x: -10
                  }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}>
                
                  Start Practicing
                </motion.span>
                <motion.div
                variants={{
                  hover: {
                    x: 0,
                    scale: 1
                  },
                  initial: {
                    x: 20,
                    scale: 0.5
                  }
                }}
                initial="initial"
                className="absolute right-1/4"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}>
                
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}