"use client"

import { motion } from "framer-motion"
import { Award, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react"

const benefits = [
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Industry-Experienced Mentor",
    description: "Learn from professors with real-world industry experience and insights.",
  },
  {
    icon: <BookOpen className="h-10 w-10" />,
    title: "Career-Oriented Training",
    description: "Curriculum designed to prepare you for in-demand tech roles.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Hands-on Project-Based Learning",
    description: "Apply concepts through practical projects that build your portfolio.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Internationally Recognized Certifications",
    description: "Prepare for and earn certifications valued by employers worldwide.",
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Personalized Career Guidance",
    description: "Get tailored advice to navigate your unique career path in tech.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover the advantages that set our IT education apart</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-blue-600 mb-3 sm:mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

