import React from 'react';
import { BookmarkIcon, PenToolIcon, TrendingUpIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const steps = [
{
  number: '01',
  icon: BookmarkIcon,
  title: 'Choose a Subject',
  description:
  'Pick from Physics or Mathematics based on your learning goals and exam requirements.'
},
{
  number: '02',
  icon: PenToolIcon,
  title: 'Practice Questions',
  description:
  'Answer curated questions at your own pace with instant feedback and detailed explanations.'
},
{
  number: '03',
  icon: TrendingUpIcon,
  title: 'Track & Improve',
  description:
  'Review analytics, identify weak areas, and watch your performance improve over time.'
}];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-white py-20 md:py-32 overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 overflow-hidden">
          <motion.h2
            initial={{
              y: 80
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
            className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            
            How It Works
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
            className="text-xl text-slate-600 max-w-2xl mx-auto">
            
            Three simple steps to start improving your grades today
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop only */}
          <motion.div
            initial={{
              scaleX: 0
            }}
            whileInView={{
              scaleX: 1
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 1.5,
              ease: 'circOut'
            }}
            className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-slate-100 origin-left"
            style={{
              width: 'calc(100% - 200px)',
              margin: '0 100px'
            }}>
            
            <motion.div
              className="h-full bg-amber-400 origin-left"
              initial={{
                scaleX: 0
              }}
              whileInView={{
                scaleX: 1
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 1.5,
                ease: 'circOut',
                delay: 0.5
              }} />
            
          </motion.div>

          {/* Decorative Chevrons between steps */}
          <div className="hidden lg:block absolute top-20 left-1/3 z-20 transform -translate-x-1/2">
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{
                x: -50,
                scale: 0
              }}
              whileInView={{
                x: 0,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 1.5
              }}>
              
              <path
                d="M9 5L16 12L9 19"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round" />
              
            </motion.svg>
          </div>
          <div className="hidden lg:block absolute top-20 left-2/3 z-20 transform -translate-x-1/2">
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{
                x: -50,
                scale: 0
              }}
              whileInView={{
                x: 0,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 1.8
              }}>
              
              <path
                d="M9 5L16 12L9 19"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round" />
              
            </motion.svg>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) =>
            <motion.div
              key={step.number}
              initial={{
                y: 150
              }}
              whileInView={{
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.2
              }}
              className="relative text-center group">
              
                {/* Number badge container */}
                <div className="relative inline-flex items-center justify-center mb-6 z-10">
                  {/* Decorative outer ring */}
                  <motion.svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.2 + 0.5
                  }}>
                  
                    <circle
                    cx="50"
                    cy="50"
                    r="48"
                    stroke="#fef3c7"
                    strokeWidth="4"
                    strokeDasharray="10 10" />
                  
                  </motion.svg>

                  <motion.div
                  initial={{
                    scale: 0,
                    rotate: -180
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 + 0.3
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10
                  }}
                  className="relative inline-flex items-center justify-center w-20 h-20 bg-amber-400 rounded-full shadow-lg">
                  
                    <span className="text-2xl font-bold text-slate-950">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Icon */}
                <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }}
                className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-50 transition-colors">
                
                  <step.icon className="w-8 h-8 text-slate-950 group-hover:text-amber-500 transition-colors" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}