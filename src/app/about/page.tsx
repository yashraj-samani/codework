"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Code } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              About CodeWork
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Empowering the next generation of tech leaders through expert guidance and innovative education
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, CodeWork began with a simple mission: to bridge the gap between theoretical knowledge
                and practical industry requirements in tech education.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small coding bootcamp has grown into a comprehensive tech education platform, helping
                thousands of students launch successful careers in the technology sector.
              </p>
              <p className="text-gray-600">
                Our approach combines rigorous academic foundations with hands-on project experience, ensuring our
                students are not just job-ready but future-ready.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 md:h-auto rounded-xl overflow-hidden shadow-xl"
            >
              <Image src="/placeholder.svg?height=400&width=600" alt="CodeWork Campus" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: <Code className="h-10 w-10" />,
                title: "Innovation",
                description:
                  "We constantly evolve our curriculum to reflect the latest industry trends and technologies.",
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Community",
                description: "We foster a supportive learning environment where collaboration and networking thrive.",
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Excellence",
                description: "We maintain the highest standards in our teaching methods and learning outcomes.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The experts behind our successful IT education program</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 mb-16"
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(1000px)",
            }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Dr. John Smith</h3>
                <p className="text-gray-600 mb-6">
                  With over 15 years of industry experience and 10 years in academia, Dr. Smith combines practical
                  knowledge with effective teaching methodologies to prepare students for real-world challenges in the
                  tech industry.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800">Software Engineering</Badge>
                      <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800">Web Development</Badge>
                      <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800">Machine Learning</Badge>
                      <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800">Cloud Computing</Badge>
                      <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800">Data Structures</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Education</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>Ph.D. in Computer Science, Stanford University</li>
                      <li>M.S. in Software Engineering, MIT</li>
                      <li>B.Tech in Information Technology, IIT</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="relative h-64 sm:h-full min-h-[250px] md:min-h-[400px]">
                <Image src="/placeholder.svg?height=600&width=500" alt="Dr. John Smith" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Instructor, Web Development",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Chen",
                role: "Senior Instructor, Data Science",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Emily Rodriguez",
                role: "Instructor, Mobile Development",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                role: "Instructor, Cloud Computing",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-10 shadow-xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Join Our Growing Community</h2>
            <p className="text-white/90 mb-6 sm:mb-8">
              Become part of a network of tech professionals and enthusiasts dedicated to continuous learning and
              growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact#get-in-touch">
                <div className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Courses
                </div>
              </Link>
              <Link href="/contact#get-in-touch">
                <div className="bg-transparent text-white border border-white hover:bg-white/10 font-bold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

