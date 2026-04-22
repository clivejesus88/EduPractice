import React from 'react';
import {
  GraduationCapIcon,
  TwitterIcon,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon } from
'lucide-react';
import { motion } from 'framer-motion';
const footerLinks = {
  Product: ['Features', 'Subjects', 'Pricing', 'Testimonials'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Support: ['Help Center', 'Contact', 'FAQ', 'Privacy Policy']
};
const socialLinks = [
{
  icon: TwitterIcon,
  href: '#',
  label: 'Twitter'
},
{
  icon: GithubIcon,
  href: '#',
  label: 'GitHub'
},
{
  icon: LinkedinIcon,
  href: '#',
  label: 'LinkedIn'
},
{
  icon: InstagramIcon,
  href: '#',
  label: 'Instagram'
}];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <motion.div
              initial={{
                x: -100
              }}
              whileInView={{
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20
              }}
              className="flex items-center space-x-2 cursor-pointer w-max"
              whileHover={{
                scale: 1.05
              }}>
              
              <div className="bg-white rounded-lg p-1.5 overflow-hidden">
                <motion.div
                  >
                  
                  <GraduationCapIcon className="w-6 h-6 text-slate-950" />
                </motion.div>
              </div>
              <span className="text-white font-bold text-xl">EduPractice</span>
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
                  delay: 0.1
                }}
                className="text-slate-400 max-w-sm leading-relaxed">
                
                Master Physics and Mathematics with thousands of practice
                questions, instant feedback, and comprehensive analytics.
              </motion.p>
            </div>

            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social, i) =>
              <motion.a
                key={social.label}
                href={social.href}
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
                  damping: 15,
                  delay: 0.2 + i * 0.1
                }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  rotate: 5
                }}
                whileTap={{
                  scale: 0.9
                }}
                className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-amber-500 transition-colors"
                aria-label={social.label}>
                
                  <social.icon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], colIndex) =>
          <div key={category} className="overflow-hidden">
              <motion.h3
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
                delay: 0.2 + colIndex * 0.1
              }}
              className="text-white font-semibold mb-4">
              
                {category}
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) =>
              <div key={link} className="overflow-hidden">
                    <motion.li
                  initial={{
                    x: -50
                  }}
                  whileInView={{
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    delay: 0.3 + colIndex * 0.1 + linkIndex * 0.05
                  }}>
                  
                      <motion.a
                    href="#"
                    whileHover={{
                      x: 8,
                      color: '#fbbf24'
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                    className="text-slate-400 inline-block">
                    
                        {link}
                      </motion.a>
                    </motion.li>
                  </div>
              )}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <motion.div
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
            delay: 0.5
          }}
          className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EduPractice. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <motion.a
              whileHover={{
                y: -2,
                color: '#fff'
              }}
              href="#"
              className="text-slate-500">
              
              Terms of Service
            </motion.a>
            <motion.a
              whileHover={{
                y: -2,
                color: '#fff'
              }}
              href="#"
              className="text-slate-500">
              
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>);

}