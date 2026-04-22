import React, { memo } from 'react';
import { StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const testimonials = [
{
  quote:
  'EduPractice transformed my Physics grades. The instant feedback helped me understand concepts I struggled with for months. Went from a C to an A in one semester!',
  name: 'Sarah Chen',
  grade: 'Grade 12 Student',
  rating: 5
},
{
  quote:
  'The timed practice mode was a game-changer for my Math exams. I learned to manage my time better and now I finish exams with confidence and time to spare.',
  name: 'Marcus Johnson',
  grade: 'University Freshman',
  rating: 5
},
{
  quote:
  'I love the detailed solutions. Every step is explained clearly, which helped me not just memorize but truly understand the material. Highly recommend!',
  name: 'Priya Patel',
  grade: 'Grade 11 Student',
  rating: 5
}];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-32 overflow-hidden relative">
      {/* Decorative large quote mark */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 left-10 text-slate-200 z-0 pointer-events-none"
        initial={{
          y: -100
        }}
        whileInView={{
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20
        }}>
        
        <path
          d="M10 11L8 17H5L7 11H5V7H10V11ZM19 11L17 17H14L16 11H14V7H19V11Z"
          fill="currentColor" />
        
      </motion.svg>

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
            className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            
            What Students Say
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
            
            Join thousands of students who have improved their grades with
            EduPractice
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) =>
          <motion.div
            key={testimonial.name}
            initial={{
              x: 150,
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
              delay: index * 0.15
            }}
            whileHover={{
              y: -12,
              scale: 1.02
            }}
            className="bg-white border border-slate-200 rounded-2xl p-8 transition-colors duration-300 hover:border-amber-400 group relative">
            
              {/* Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) =>
              <motion.div
                key={i}
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
                  stiffness: 300,
                  damping: 15,
                  delay: index * 0.15 + 0.3 + i * 0.1
                }}>
                
                    <StarIcon className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </motion.div>
              )}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-200 pt-6">
                <div className="font-bold text-slate-950 group-hover:text-amber-500 transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-sm text-slate-600">
                  {testimonial.grade}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}