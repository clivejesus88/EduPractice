import { Button } from "../Button";
import { BookOpen, GraduationCap } from "lucide-react";
import { motion }  from "framer-motion";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 bg-gray-800 text-gray-100 px-4 py-2 rounded-full border border-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">Master Science Subjects</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Practice Makes <span className="text-gray-300">Perfect</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Sharpen your skills in Physics and Mathematics with thousands of practice questions. 
              Get instant feedback, track your progress, and ace your exams with confidence.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Link to="/login">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 hover:scale-105 transition-transform">
                Start Practicing Free
              </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-sm text-gray-400">Practice Questions</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">100K+</div>
                <div className="text-sm text-gray-400">Students Worldwide</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-sm text-gray-400">User Rating</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-gray-700 to-gray-600 rounded-2xl transform rotate-3"
              animate={{ rotate: [3, 6, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <img 
              src="https://images.unsplash.com/photo-1758685733737-71f8945decf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBzY2llbmNlfGVufDF8fHx8MTc2ODkxNTkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Student studying science"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}