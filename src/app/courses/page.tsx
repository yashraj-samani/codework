"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const courses = [
  {
    id: "cpp",
    title: "C++ Programming",
    description: "Master C++ from basics to advanced concepts with practical projects.",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    duration: "12 weeks",
    level: "Beginner to Advanced",
  },
  {
    id: "java",
    title: "Java Development",
    description: "Learn Java programming and build enterprise applications.",
    icon: "☕",
    color: "from-green-500 to-green-600",
    duration: "10 weeks",
    level: "Intermediate",
  },
  {
    id: "javascript",
    title: "JavaScript Mastery",
    description: "Become proficient in JavaScript and modern web development.",
    icon: "🌐",
    color: "from-yellow-500 to-yellow-600",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: "react",
    title: "React Framework",
    description: "Build interactive UIs with React and related technologies.",
    icon: "⚛️",
    color: "from-cyan-500 to-cyan-600",
    duration: "8 weeks",
    level: "Intermediate",
  },
  {
    id: "nodejs",
    title: "Node.js",
    description: "Create scalable backend applications with Node.js.",
    icon: "🚀",
    color: "from-green-600 to-green-700",
    duration: "6 weeks",
    level: "Intermediate",
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Explore ML algorithms and implement AI solutions.",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
    duration: "14 weeks",
    level: "Advanced",
  },
  {
    id: "python",
    title: "Python Programming",
    description: "Learn Python for data science, web development, and automation.",
    icon: "🐍",
    color: "from-blue-400 to-blue-500",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
  },
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    description: "Comprehensive course covering both frontend and backend technologies.",
    icon: "🌍",
    color: "from-pink-500 to-pink-600",
    duration: "16 weeks",
    level: "Beginner to Advanced",
  },
]

export default function CoursesPage() {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Our Courses
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of IT courses designed to boost your tech career
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <Link key={course.id} href={`/courses/${course.id}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <div className="p-4 sm:p-6">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{course.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{course.description}</p>
                    <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                      <span>{course.duration}</span>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium text-sm sm:text-base">
                      <span>View details</span>
                      <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

