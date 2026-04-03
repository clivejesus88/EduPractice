import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
export function CTASection() {
  return (
    <section className="relative bg-slate-950 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900 rounded-full blur-3xl" />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-900 rounded-full blur-3xl" />
        
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 overflow-hidden">
          <div className="overflow-hidden">
            <motion.h2
              // initial={{
              //   y: 100
              // }}
              // whileInView={{
              //   y: 0
              // }}
              // viewport={{
              //   once: true
              // }}
              // transition={{
              //   type: 'spring',
              //   stiffness: 100,
              //   damping: 20
              // }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight">
              
              Ready to Ace Your Exams?
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.p
              // initial={{
              //   y: 100
              // }}
              // whileInView={{
              //   y: 0
              // }}
              // viewport={{
              //   once: true
              // }}
              // transition={{
              //   type: 'spring',
              //   stiffness: 100,
              //   damping: 20,
              // }}
              className="text-xl md:text-2xl text-white">
              
              Join 100,000+ students already improving their grades
            </motion.p>
          </div>

          <motion.div
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
              stiffness: 200,
              damping: 20,
              delay: 0.2
            }}>
            <Link to="/login">
            <motion.button
              whileHover="hover"
              whileTap={{
                scale: 0.95
              }}
              className="inline-flex items-center space-x-3 bg-amber-400 text-slate-950 px-10 py-5 rounded-xl font-bold text-lg overflow-hidden relative">
              
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
                
                Get Started for Free
              </motion.span>
              <motion.div
                variants={{
                  hover: {
                    x: 0,
                    scale: 1
                  },
                  initial: {
                    x: 30,
                    scale: 0.5
                  }
                }}
                initial="initial"
                className="absolute right-6"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}>
                
                <ArrowRightIcon className="w-6 h-6" />
              </motion.div>
            </motion.button>
            </Link>
          </motion.div>

          <div className="overflow-hidden">
            <motion.p
              initial={{
                y: 50
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
                delay: 0.3
              }}
              className="text-sm text-slate-500">
              
              No credit card required • Start practicing in seconds
            </motion.p>
          </div>
        </div>
      </div>
    </section>);

}