import { Brain, LineChart, Award, CheckCircle, Sparkles, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Questions adapt to your skill level, ensuring optimal challenge and growth.",
    color: "text-purple-400",
    bgColor: "bg-purple-950"
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Visualize your improvement with detailed analytics and performance insights.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-950"
  },
  {
    icon: Award,
    title: "Instant Feedback",
    description: "Get immediate explanations for each answer to understand concepts better.",
    color: "text-green-400",
    bgColor: "bg-green-950"
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Coverage",
    description: "All topics from basics to advanced levels in Physics and Mathematics.",
    color: "text-orange-400",
    bgColor: "bg-orange-950"
  },
  {
    icon: Sparkles,
    title: "Smart Recommendations",
    description: "AI-powered suggestions on what to study next based on your performance.",
    color: "text-pink-400",
    bgColor: "bg-pink-950"
  },
  {
    icon: Target,
    title: "Exam-Focused",
    description: "Practice with questions modeled after real exam formats and difficulty.",
    color: "text-indigo-400",
    bgColor: "bg-indigo-950"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge technology with proven learning methods
            to help you master Physics and Mathematics.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={item}>
                <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full hover:border-gray-400">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}