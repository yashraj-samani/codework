"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Engineer at Google",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The programming courses were instrumental in helping me land my dream job. The professor's teaching style made complex concepts easy to understand.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "I went from knowing nothing about coding to becoming a professional developer in just 6 months. The hands-on projects were particularly valuable.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Data Scientist",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The machine learning course provided me with the skills I needed to transition into data science. The professor's industry insights were invaluable.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Even as a designer, understanding code has made me better at my job. The web development courses were perfect for my needs.",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Student Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our students have to say about their learning experience
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto sm:mx-0 sm:mr-4 mb-3 sm:mb-0 border-2 border-blue-500">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <div className="flex mt-1 justify-center sm:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 italic text-center sm:text-left">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md z-10 hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md z-10 hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

