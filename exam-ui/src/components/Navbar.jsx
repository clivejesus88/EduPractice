import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import {
  GraduationCapIcon,
  MenuIcon,
  XIcon,
  ArrowRightIcon } from
'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = ['Features', 'Subjects', 'How It Works'];
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'bg-slate-950 shadow-lg' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{
              scale: 1.05
            }}
            className="flex items-center space-x-2 cursor-pointer">
            
            <div className="bg-white rounded-lg p-1.5 overflow-hidden">
              <motion.div
               >
                
                <GraduationCapIcon className="w-6 h-6 text-slate-950" />
              </motion.div>
            </div>
            <span className="text-white font-bold text-xl">EduPractice</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 overflow-hidden">
            {navLinks.map((link, index) =>
            <motion.a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-slate-300 hover:text-white relative group py-2"
              initial={{
                y: -50
              }}
              animate={{
                y: 0
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: index * 0.1
              }}>
              
                {link}
                <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 origin-left"
                initial={{
                  scaleX: 0
                }}
                whileHover={{
                  scaleX: 1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25
                }} />
              
              </motion.a>
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href="login"
              className="text-slate-300 hover:text-white"
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{
                scale: 0.95
              }}>
              
              Sign In
            </motion.a>
            <Link to="/login">
            <motion.button
              whileHover="hover"
              whileTap={{
                scale: 0.95
              }}
              className="bg-white text-slate-950 px-6 py-2.5 rounded-lg font-semibold flex items-center overflow-hidden relative">
              
              <motion.span
                variants={{
                  hover: {
                    x: -8
                  }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}>
                
                Start Free
              </motion.span>
              <motion.div
                className="absolute right-3"
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
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}>
                
                <ArrowRightIcon className="w-4 h-4" />
              </motion.div>
            </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{
              scale: 0.9
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white">
            
            {isMobileMenuOpen ?
            <XIcon className="w-6 h-6" /> :

            <MenuIcon className="w-6 h-6" />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            y: '-100%'
          }}
          animate={{
            y: 0
          }}
          exit={{
            y: '-100%'
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 25
          }}
          className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-t border-slate-800 shadow-2xl z-40">
          
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) =>
            <div key={link} className="overflow-hidden">
                  <motion.a
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="block text-slate-300 hover:text-white py-2 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{
                  x: -50
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: i * 0.1
                }}>
                
                    {link}
                  </motion.a>
                </div>
            )}
              <div className="pt-4 space-y-3 border-t border-slate-800 overflow-hidden">
                <motion.a
                href="#signin"
                className="block text-slate-300 hover:text-white py-2 font-medium"
                initial={{
                  x: -50
                }}
                animate={{
                  x: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3
                }}>
                
                  Sign In
                </motion.a>
                <motion.button
                className="w-full bg-white text-slate-950 px-6 py-3 rounded-lg font-bold"
                initial={{
                  y: 50
                }}
                animate={{
                  y: 0
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: 0.4
                }}
                whileTap={{
                  scale: 0.95
                }}>
                
                  Start Free
                </motion.button>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}