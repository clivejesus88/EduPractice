import React, { useEffect, useState } from 'react';
import { GraduationCapIcon, StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
function Counter({
  from,
  to,
  delay = 0,
  duration = 2,
  suffix = ''

}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      delay: delay,
      ease: 'easeOut'
    });
    return controls.stop;
  }, [count, to, delay, duration]);
  return <motion.span>{rounded}</motion.span>;
}
function DecimalCounter({
  from,
  to,
  delay = 0,
  duration = 2


}) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));
  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      delay: delay,
      ease: 'easeOut'
    });
    return controls.stop;
  }, [count, to, delay, duration]);
  return <motion.span>{rounded}</motion.span>;
}
export function HeroSection() {
  const headlineWords = ['Practice', 'Makes'];
  return (
    <section className="relative bg-slate-950 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />

      {/* Grid dot pattern */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="dotGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              
              <circle cx="2" cy="2" r="1.5" fill="#334155" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" />
        </svg>
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          rotate: 360,
          y: [-20, 20, -20],
          x: [-20, 20, -20]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/4 left-10 z-0">
        
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <circle
            cx="30"
            cy="30"
            r="28"
            stroke="#fbbf24"
            strokeWidth="2"
            strokeDasharray="8 8" />
          
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
          y: [30, -30, 30],
          x: [30, -30, 30]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute bottom-1/4 right-10 z-0">
        
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <rect
            x="2"
            y="2"
            width="46"
            height="46"
            stroke="#34d399"
            strokeWidth="2" />
          
        </svg>
      </motion.div>

      <motion.div
        animate={{
          rotate: 360,
          y: [-40, 40, -40],
          x: [40, -40, 40]
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-1/2 left-1/3 z-0">
        
        <svg
          width="40"
          height="35"
          viewBox="0 0 40 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          
          <path d="M20 2L38 33H2L20 2Z" stroke="#fbbf24" strokeWidth="2" />
        </svg>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{
                  y: 50
                }}
                animate={{
                  y: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20
                }}
                className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-2">
                
                <motion.div
                  animate={{
                    rotate: [0, -10, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}>
                  
                  <GraduationCapIcon className="w-4 h-4 text-amber-400" />
                </motion.div>
                <span className="text-slate-300 text-sm font-medium">
                  Master Science Subjects
                </span>
              </motion.div>
            </div>

            <div className="space-y-4 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight flex flex-wrap gap-x-4 gap-y-2 relative z-10">
                {headlineWords.map((word, i) =>
                <div key={i} className="overflow-hidden">
                    <motion.span
                    className="inline-block"
                    initial={{
                      y: 100
                    }}
                    animate={{
                      y: 0
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 20,
                      delay: i * 0.1 + 0.1
                    }}>
                    
                      {word}
                    </motion.span>
                  </div>
                )}
                <div className="overflow-hidden relative">
                  <motion.span
                    className="inline-block text-amber-400 relative z-10"
                    initial={{
                      y: 100
                    }}
                    animate={{
                      y: 0
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 20,
                      delay: 0.3
                    }}>
                    
                    Perfect
                  </motion.span>
                  {/* Curved line accent */}
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-4 z-0"
                    viewBox="0 0 200 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none">
                    
                    <motion.path
                      d="M2 18C50 2 150 2 198 18"
                      stroke="#fbbf24"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0
                      }}
                      animate={{
                        pathLength: 1
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.8,
                        ease: 'easeOut'
                      }} />
                    
                  </motion.svg>
                </div>
              </h1>

              <div className="overflow-hidden">
                <motion.p
                  className="text-lg md:text-xl text-slate-400 max-w-xl"
                  initial={{
                    y: 50
                  }}
                  animate={{
                    y: 0
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    delay: 0.4
                  }}>
                  
                  Sharpen your skills in Physics and Mathematics with thousands
                  of practice questions. Get instant feedback, track your
                  progress, and ace your exams with confidence.
                </motion.p>
              </div>
            </div>

            <div className="overflow-hidden pt-2">
              <motion.div
                initial={{
                  y: 50
                }}
                animate={{
                  y: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 150,
                  damping: 20,
                  delay: 0.5
                }}>
                <Link to="/login">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-950 transition-colors duration-300">
                  
                  Start Practicing Free
                </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              {[
              {
                label: 'Practice Questions',
                value: <Counter from={0} to={50} delay={0.6} suffix="K+" />
              },
              {
                label: 'Students Worldwide',
                value: <Counter from={0} to={100} delay={0.7} suffix="K+" />
              },
              {
                label: 'User Rating',
                value:
                <div className="flex items-center space-x-1">
                      <DecimalCounter from={0} to={4.9} delay={0.8} />
                      <motion.div
                    initial={{
                      scale: 0,
                      rotate: -180
                    }}
                    animate={{
                      scale: 1,
                      rotate: 0
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: 1.2
                    }}>
                    
                        <StarIcon className="w-6 h-6 text-amber-400 fill-amber-400" />
                      </motion.div>
                    </div>

              }].
              map((stat, i) =>
              <div key={i} className="overflow-hidden">
                  <motion.div
                  className="space-y-1"
                  initial={{
                    y: 50
                  }}
                  animate={{
                    y: 0
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 20,
                    delay: 0.6 + i * 0.1
                  }}>
                  
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{
              x: 100,
              scale: 0.8
            }}
            animate={{
              x: 0,
              scale: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
              delay: 0.3
            }}
            className="relative hidden lg:block">
            
            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [-1, 2, -1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative">
              
              {/* Glassmorphism background card */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-emerald-500/30 backdrop-blur-xl rounded-3xl"
                animate={{
                  rotate: [3, 5, 3],
                  scale: [1.05, 1.08, 1.05]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />
              

              {/* Image */}
              <div className="relative transform -rotate-2 rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <motion.img
                  whileHover={{
                    scale: 1.05
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25
                  }}
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
                  alt="Student studying"
                  className="w-full h-auto" />
                
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}