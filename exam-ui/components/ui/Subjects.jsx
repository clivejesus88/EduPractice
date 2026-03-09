import { Atom, Calculator, ChevronRight } from "lucide-react";
import { Card } from "@/components/Card";
import { Button } from "../Button";
import { Badge } from "@/components/Badge";
import { motion } from "framer-motion";

const subjects = [
  {
    icon: Atom,
    title: "Physics",
    description: "Master the laws of nature with comprehensive practice",
    topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    color: "from-gray-800 to-gray-900",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-900"
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description: "Build strong mathematical foundations and problem-solving skills",
    topics: ["Algebra", "Calculus", "Trigonometry", "Statistics", "Geometry"],
    color: "from-gray-700 to-black",
    iconBg: "bg-gray-200",
    iconColor: "text-gray-900"
  }
];

export function Subjects() {
  return (
    <section className="py-20 bg-gray-50" id="subjects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Master Core Science Subjects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Deep dive into Physics and Mathematics with structured practice sessions
            covering all essential topics.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <Card className="relative overflow-hidden border-none shadow-lg h-full hover:shadow-2xl transition-shadow duration-300">
                  <motion.div 
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${subject.color} opacity-10 rounded-bl-full`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                  
                  <div className="p-8 relative">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl ${subject.iconBg} flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-8 h-8 ${subject.iconColor}`} />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {subject.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      {subject.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3">
                        Topics Covered:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {subject.topics.map((topic, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <Badge variant="secondary" className="hover:bg-gray-200 transition-colors cursor-default">
                              {topic}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group hover:bg-gray-100 transition-colors">
                      Explore {subject.title}
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}