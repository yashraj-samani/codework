"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, GraduationCap, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const coursesData = {
  cpp: {
    title: "C++ Programming",
    description: "Master C++ from basics to advanced concepts with practical projects.",
    icon: "💻",
    color: "from-blue-500 to-blue-600",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    certification: "C++ Professional Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This comprehensive C++ course takes you from the fundamentals to advanced concepts. You'll learn object-oriented programming, memory management, STL, and modern C++ features while building real-world applications.",
    keyTopics: [
      "C++ Fundamentals and Syntax",
      "Object-Oriented Programming in C++",
      "Memory Management and Pointers",
      "Standard Template Library (STL)",
      "Modern C++ Features (C++11/14/17/20)",
      "Data Structures and Algorithms Implementation",
      "Multithreading and Concurrency",
      "Design Patterns in C++",
    ],
    whoShouldEnroll:
      "This course is perfect for beginners with no prior programming experience, as well as intermediate programmers looking to enhance their C++ skills. It's also suitable for computer science students and professionals wanting to deepen their understanding of low-level programming concepts.",
  },
  java: {
    title: "Java Development",
    description: "Learn Java programming and build enterprise applications.",
    icon: "☕",
    color: "from-green-500 to-green-600",
    duration: "10 weeks",
    level: "Intermediate",
    certification: "Java Developer Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This Java course covers core Java programming, object-oriented principles, and enterprise application development. You'll learn to build robust, scalable applications using Java and related frameworks.",
    keyTopics: [
      "Java Syntax and Core Concepts",
      "Object-Oriented Programming Principles",
      "Collections Framework",
      "Exception Handling",
      "Multithreading and Concurrency",
      "File I/O and Serialization",
      "JDBC for Database Connectivity",
      "Introduction to Spring Framework",
    ],
    whoShouldEnroll:
      "This course is designed for programmers with some experience who want to learn Java, as well as Java beginners looking to advance their skills. It's ideal for those interested in enterprise software development, Android app development, or backend web services.",
  },
  javascript: {
    title: "JavaScript Mastery",
    description: "Become proficient in JavaScript and modern web development.",
    icon: "🌐",
    color: "from-yellow-500 to-yellow-600",
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    certification: "JavaScript Developer Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This JavaScript course takes you from the basics to advanced concepts. You'll learn modern JavaScript (ES6+), DOM manipulation, asynchronous programming, and how to build interactive web applications.",
    keyTopics: [
      "JavaScript Fundamentals and ES6+ Features",
      "DOM Manipulation and Events",
      "Asynchronous JavaScript (Promises, Async/Await)",
      "Fetch API and AJAX",
      "Error Handling and Debugging",
      "Object-Oriented JavaScript",
      "Functional Programming Concepts",
      "Modern JavaScript Tools and Workflows",
    ],
    whoShouldEnroll:
      "This course is perfect for web development beginners, designers looking to add interactivity to their websites, and developers from other languages wanting to learn JavaScript. It provides a solid foundation for those who want to progress to frameworks like React, Angular, or Vue.js.",
  },
  react: {
    title: "React Framework",
    description: "Build interactive UIs with React and related technologies.",
    icon: "⚛️",
    color: "from-cyan-500 to-cyan-600",
    duration: "8 weeks",
    level: "Intermediate",
    certification: "React Developer Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This React course teaches you how to build modern, interactive user interfaces. You'll learn component-based architecture, state management, hooks, and how to create single-page applications with the most popular frontend library.",
    keyTopics: [
      "React Fundamentals and JSX",
      "Component Architecture",
      "State and Props Management",
      "React Hooks",
      "Context API and Redux",
      "Routing with React Router",
      "API Integration and Data Fetching",
      "Testing and Deploying React Applications",
    ],
    whoShouldEnroll:
      "This course is ideal for JavaScript developers looking to specialize in frontend development, web developers wanting to upgrade their skills, and professionals interested in building modern web applications. Basic JavaScript knowledge is required.",
  },
  nodejs: {
    title: "Node.js",
    description: "Create scalable backend applications with Node.js.",
    icon: "🚀",
    color: "from-green-600 to-green-700",
    duration: "6 weeks",
    level: "Intermediate",
    certification: "Node.js Developer Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This Node.js course focuses on server-side JavaScript development. You'll learn how to build scalable, high-performance backend applications, RESTful APIs, and real-time services using Node.js and related frameworks.",
    keyTopics: [
      "Node.js Fundamentals",
      "Express.js Framework",
      "RESTful API Development",
      "Database Integration (MongoDB, SQL)",
      "Authentication and Authorization",
      "Real-time Applications with Socket.io",
      "Error Handling and Debugging",
      "Deployment and DevOps Basics",
    ],
    whoShouldEnroll:
      "This course is designed for JavaScript developers interested in backend development, full-stack developers wanting to complete their skill set, and professionals looking to build scalable web services. Prior JavaScript knowledge is recommended.",
  },
  ml: {
    title: "Machine Learning",
    description: "Explore ML algorithms and implement AI solutions.",
    icon: "🤖",
    color: "from-purple-500 to-purple-600",
    duration: "14 weeks",
    level: "Advanced",
    certification: "Machine Learning Specialist Certification",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "This Machine Learning course covers the theory and practical implementation of ML algorithms. You'll learn data preprocessing, model training, evaluation, and deployment while working on real-world AI projects.",
    keyTopics: [
      "Supervised and Unsupervised Learning",
      "Neural Networks and Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Model Evaluation and Hyperparameter Tuning",
      "Feature Engineering",
      "ML Model Deployment",
    ],
    whoShouldEnroll:
      "This course is ideal for programmers with strong mathematical backgrounds, data scientists looking to expand their skills, and professionals interested in AI and automation. Prior programming experience and basic statistics knowledge are required.",
  },
}

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const course = coursesData[params.slug as keyof typeof coursesData]

  if (!course) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="mb-8">The course you're looking for doesn't exist or has been removed.</p>
          <Link href="/courses">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4">
          <Link href="/courses" className="inline-flex items-center text-blue-600 hover:underline mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Link>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{course.icon}</div>
                    <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
                  </div>

                  <div className="relative w-full h-64 md:h-80 mb-8 rounded-lg overflow-hidden">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold mb-4 text-gray-900">Course Overview</h2>
                      <p className="text-gray-600">{course.overview}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4 text-gray-900">Key Topics</h2>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {course.keyTopics.map((topic, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-4 text-gray-900">Who Should Enroll</h2>
                      <p className="text-gray-600">{course.whoShouldEnroll}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 md:sticky md:top-24">
                <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-6 text-gray-900">Course Details</h2>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium text-gray-900">{course.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Level</p>
                        <p className="font-medium text-gray-900">{course.level}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Certification</p>
                        <p className="font-medium text-gray-900">{course.certification}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 h-auto text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

