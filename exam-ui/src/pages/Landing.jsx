import React from 'react'
import { motion } from 'framer-motion';
import { Navbar } from '@/src/components/Navbar'
import {
  GraduationCapIcon,
  ZapIcon,
  TrendingUpIcon,
  AwardIcon,
  BookOpenIcon,
  StarIcon,
  AtomIcon,
  CalculatorIcon,
  FlaskConicalIcon,
  PenToolIcon,
  BarChart3Icon,
  QuoteIcon,
  ArrowRightIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <div className="min-h-screen w-full bg-[#0B1120] text-white overflow-hidden">
      <Navbar variant="landing" />

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-20 max-w-7xl mx-auto">
        {/* Subtle decorative element - hidden on small screens */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 border-2 border-dashed border-amber-500/20 rounded-full hidden sm:block"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full mb-4 sm:mb-6"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <GraduationCapIcon className="w-4 h-4 text-amber-400" />
              <span className="text-xs sm:text-sm text-gray-300">
                Master Science Subjects
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Practice Makes{' '}
              <span className="text-amber-400 italic relative">
                Perfect
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M0 5 Q 100 0, 200 5"
                    stroke="#FBBF24"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Sharpen your skills in Physics and Mathematics with thousands of
              practice questions. Get instant feedback, track your progress, and
              ace your exams with confidence.
            </p>

            <Link
              to="/login"
              className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-all text-sm sm:text-base"
            >
              Start Practicing Free
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  Practice Questions
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  100K+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  Students Worldwide
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex items-center gap-1">
                  4.9
                  <StarIcon className="w-4 h-4 sm:w-6 sm:h-6 text-amber-400 fill-amber-400" />
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1">
                  User Rating
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative order-first md:order-last"
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-teal-500/10 z-10" />
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                alt="Education materials"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Why Choose EduPractice?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Everything you need to excel in your studies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: ZapIcon,
                title: 'Instant Feedback',
                description:
                  'Get immediate explanations and corrections for every answer',
              },
              {
                icon: TrendingUpIcon,
                title: 'Progress Tracking',
                description:
                  'Monitor your improvement with detailed analytics and insights',
              },
              {
                icon: AwardIcon,
                title: 'Exam Preparation',
                description:
                  'Practice with real exam-style questions and scenarios',
              },
              {
                icon: BookOpenIcon,
                title: 'Subject Variety',
                description:
                  'Comprehensive coverage of Physics and Mathematics topics',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-5 sm:p-6 bg-[#111827] border border-gray-800 rounded-xl hover:border-amber-500/50 transition-all"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Explore Our Subjects
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Deep dive into comprehensive study materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Physics Card */}
            <motion.div
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-amber-500/30 transition-all"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                <AtomIcon className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">Physics</h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Mechanics, Thermodynamics, Waves, Optics, Electromagnetism and
                more.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <span className="text-amber-400">15K+</span> Questions
                </div>
                <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300">
                  All Levels
                </div>
              </div>
              <button className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                Start Practicing <ArrowRightIcon className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Mathematics Card */}
            <motion.div
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-amber-500/30 transition-all relative overflow-hidden"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full -z-10" />
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6">
                <CalculatorIcon className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Mathematics
              </h3>
              <p className="text-gray-400 mb-6 flex-grow">
                Algebra, Calculus, Geometry, Statistics, Trigonometry and more.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <span className="text-amber-400">20K+</span> Questions
                </div>
                <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300">
                  All Levels
                </div>
              </div>
              <button className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-gray-900 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2">
                Start Practicing <ArrowRightIcon className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Chemistry Card */}
            <motion.div
              className="bg-[#111827] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-amber-500/30 transition-all relative"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
              }}
            >
              <div className="absolute top-6 right-6 bg-teal-500/20 text-teal-400 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Coming Soon
              </div>
              <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <FlaskConicalIcon className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-300">
                Chemistry
              </h3>
              <p className="text-gray-500 mb-6 flex-grow">
                Organic, Inorganic, Physical Chemistry, Biochemistry and more.
              </p>
              <div className="flex items-center gap-4 mb-8 opacity-50">
                <div className="bg-gray-800/50 px-3 py-1.5 rounded-lg text-sm font-medium">
                  <span className="text-gray-400">15K+</span> Questions
                </div>
              </div>
              <button
                disabled
                className="w-full py-3 bg-gray-800/50 text-gray-500 rounded-xl font-medium cursor-not-allowed flex items-center justify-center gap-2"
              >
                Notify Me
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-900/30"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16 sm:mb-24"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Get started in 3 simple steps
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
              {[
                {
                  step: '1',
                  icon: BookOpenIcon,
                  title: 'Choose Your Subject',
                  description:
                    'Select from Physics, Mathematics, or Chemistry to begin your practice journey.',
                },
                {
                  step: '2',
                  icon: PenToolIcon,
                  title: 'Practice Questions',
                  description:
                    'Answer carefully curated questions with varying difficulty levels.',
                },
                {
                  step: '3',
                  icon: BarChart3Icon,
                  title: 'Track Progress',
                  description:
                    'Monitor your improvement with detailed analytics and performance insights.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.2,
                  }}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#111827] border-4 border-[#0B1120] rounded-full flex items-center justify-center mb-6 relative shadow-xl">
                    <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-amber-500 text-gray-900 rounded-full flex items-center justify-center font-bold text-sm sm:text-base border-2 border-[#0B1120]">
                      {item.step}
                    </div>
                    <item.icon className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 max-w-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              What Students Say
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Join thousands of successful students
            </p>
          </motion.div>
        </div>

        {(() => {
          const row1 = [
            {
              quote:
                'EduPractice helped me score 95% in my Physics exam. The practice questions are incredibly well-curated.',
              name: 'Sarah K.',
              role: 'Physics Student',
              color: 'bg-blue-500',
              initials: 'SK',
            },
            {
              quote:
                'The progress tracking feature keeps me motivated. I can see my improvement day by day.',
              name: 'James M.',
              role: 'Mathematics Student',
              color: 'bg-amber-500',
              initials: 'JM',
            },
            {
              quote:
                'Best exam prep platform I have used. The instant feedback is a game changer.',
              name: 'Priya R.',
              role: 'Pre-Med Student',
              color: 'bg-teal-500',
              initials: 'PR',
            },
            {
              quote:
                'I went from struggling with calculus to topping my class. This platform is a lifesaver!',
              name: 'David L.',
              role: 'Engineering Student',
              color: 'bg-rose-500',
              initials: 'DL',
            },
            {
              quote:
                'The question variety is amazing. Every session feels fresh and challenging.',
              name: 'Aisha N.',
              role: 'Science Student',
              color: 'bg-violet-500',
              initials: 'AN',
            },
          ]
          const row2 = [
            {
              quote:
                'I love how the difficulty adapts to my level. It pushes me just enough to keep improving.',
              name: 'Marcus T.',
              role: 'Physics Major',
              color: 'bg-emerald-500',
              initials: 'MT',
            },
            {
              quote:
                'Studied for just 2 weeks on EduPractice and improved my mock exam score by 20%.',
              name: 'Fatima Z.',
              role: 'Medical Aspirant',
              color: 'bg-pink-500',
              initials: 'FZ',
            },
            {
              quote:
                'The detailed explanations after each question helped me understand concepts I had been struggling with for months.',
              name: 'Ryan C.',
              role: 'High School Senior',
              color: 'bg-cyan-500',
              initials: 'RC',
            },
            {
              quote:
                'My go-to platform for exam prep. Clean interface and quality content.',
              name: 'Mei W.',
              role: 'Mathematics Student',
              color: 'bg-orange-500',
              initials: 'MW',
            },
            {
              quote:
                'The streak feature keeps me coming back every day. 45 days and counting!',
              name: 'Tom B.',
              role: 'A-Level Student',
              color: 'bg-indigo-500',
              initials: 'TB',
            },
          ]
          const TestimonialCard = ({
            testimonial,
          }) => (
            <div className="w-[320px] sm:w-[380px] flex-shrink-0 bg-[#111827] border border-gray-800 rounded-2xl p-6 relative group hover:border-amber-500/30 transition-all">
              <QuoteIcon className="absolute top-5 right-5 w-7 h-7 text-gray-800/60" />
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm ${testimonial.color}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          )
          return (
            <div className="relative">
              {/* Edge fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B1120] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B1120] to-transparent z-10 pointer-events-none" />

              {/* Row 1 — scrolls left */}
              <div className="mb-6">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    x: {
                      duration: 40,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...row1, ...row1].map((t, i) => (
                    <TestimonialCard key={`r1-${i}`} testimonial={t} />
                  ))}
                </motion.div>
              </div>

              {/* Row 2 — scrolls right */}
              <div>
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: ['-50%', '0%'],
                  }}
                  transition={{
                    x: {
                      duration: 45,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...row2, ...row2].map((t, i) => (
                    <TestimonialCard key={`r2-${i}`} testimonial={t} />
                  ))}
                </motion.div>
              </div>
            </div>
          )
        })()}
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-500/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Ace Your Exams?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join over 100,000 students who are already improving their grades
              with EduPractice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/login"
                className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-gray-900 rounded-xl font-bold hover:bg-amber-400 transition-colors text-lg"
              >
                Get Started Free
              </Link>
              <Link
                to="#features"
                className="w-full sm:w-auto px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-[#0B1120] border-t border-gray-800 pt-16 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <GraduationCapIcon className="w-6 h-6 text-gray-900" />
                </div>
                <span className="text-xl font-bold text-white">
                  EduPractice
                </span>
              </Link>
              <p className="text-gray-400 mb-8 max-w-sm">
                The ultimate platform for mastering Physics and Mathematics.
                Practice smarter, score higher, and achieve your academic goals.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition-all"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-gray-900 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold mb-6">Product</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#subjects"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Subjects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} EduPractice. All rights
              reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
