import { Card } from "@/components/Card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/avatar";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mutebi Micheal",
    role: "High School Student",
    content: "This app transformed my physics grades! The instant feedback helped me understand concepts I struggled with for months.",
    rating: 5,
    avatar: "MM"
  },
  {
    name: "Namazzi Ruatha",
    role: "A-Level Candidate",
    content: "The adaptive learning is brilliant. It knows exactly what I need to work on. My calculus skills have improved dramatically.",
    rating: 5,
    avatar: "NR"
  },
  {
    name: "Emma Williams",
    role: "A-Level Student",
    content: "Passed my entrance exam with flying colors! The exam-focused questions prepared me perfectly for the real thing.",
    rating: 5,
    avatar: "EW"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Students Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have improved their grades and confidence
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <motion.div 
                  className="flex gap-1 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.15 + i * 0.05, type: "spring" }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <p className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-gray-800 to-black text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}