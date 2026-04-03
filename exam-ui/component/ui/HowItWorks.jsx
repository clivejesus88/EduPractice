import { UserPlus, BookOpen, TrendingUp, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up Free",
    description: "Create your account in seconds and get instant access to our question bank.",
    step: "01"
  },
  {
    icon: BookOpen,
    title: "Choose Your Topic",
    description: "Select from Physics or Math topics that match your learning goals.",
    step: "02"
  },
  {
    icon: TrendingUp,
    title: "Practice & Learn",
    description: "Answer questions, get instant feedback, and track your improvement.",
    step: "03"
  },
  {
    icon: Trophy,
    title: "Ace Your Exams",
    description: "Build confidence and mastery to excel in your tests and examinations.",
    step: "04"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start your learning journey in four simple steps
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index} 
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  ></motion.div>
                )}
                
                <div className="text-center">
                  <motion.div 
                    className="relative inline-block mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(0, 0, 0, 0.4)",
                          "0 0 0 20px rgba(0, 0, 0, 0)",
                          "0 0 0 0 rgba(0, 0, 0, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-gray-900" />
                    </motion.div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 200 }}
                    >
                      {step.step}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}