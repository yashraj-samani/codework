"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutProfessor() {
  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            About CodeWork
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the expert team behind our successful IT education program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(1000px)",
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Dr. John Smith</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                With over 15 years of industry experience and 10 years in academia, Dr. Smith combines practical
                knowledge with effective teaching methodologies to prepare students for real-world challenges in the
                tech industry.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Expertise</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Software Engineering
                    </Badge>
                    <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Web Development
                    </Badge>
                    <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Machine Learning
                    </Badge>
                    <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Cloud Computing
                    </Badge>
                    <Badge className="text-xs sm:text-sm bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      Data Structures
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Education</h4>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                    <li>Ph.D. in Computer Science, Stanford University</li>
                    <li>M.S. in Software Engineering, MIT</li>
                    <li>B.Tech in Information Technology, IIT</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative h-64 sm:h-full min-h-[250px] md:min-h-[400px]">
              <Image src="/placeholder.svg?height=600&width=500" alt="CodeWork Expert" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

