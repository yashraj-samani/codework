"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const courses = [
  {
    id: "cpp",
    title: "C++ Programming",
    description: "Master C++ from basics to advanced concepts with practical projects.",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "java",
    title: "Java Development",
    description: "Learn Java programming and build enterprise applications.",
    icon: "☕",
    color: "from-green-500 to-green-600",
  },
  {
    id: "javascript",
    title: "JavaScript Mastery",
    description: "Become proficient in JavaScript and modern web development.",
    icon: "🌐",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    id: "react",
    title: "React Framework",
    description: "Build interactive UIs with React and related technologies.",
    icon: "⚛️",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Create scalable backend applications with Node.js.",
    icon: "🚀",
    color: "from-green-600 to-green-700",
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Explore ML algorithms and implement AI solutions.",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
  },
]

export default function PopularCourses() {
  return (
    <section id="courses" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Popular Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most sought-after courses designed to boost your tech career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link href={`/courses/${course.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <div className="p-4 sm:p-6">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{course.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>
                    <div className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

