"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Code, Globe, Smartphone } from "lucide-react"

const services = [
  {
    id: "web-development",
    title: "Website Development",
    description: "Custom websites built with modern technologies to meet your specific business needs.",
    icon: <Globe className="h-12 w-12" />,
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Responsive design for all devices",
      "SEO optimization",
      "Content management systems",
      "E-commerce functionality",
      "Performance optimization",
      "Maintenance and support",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom software solutions to automate processes and improve efficiency.",
    icon: <Code className="h-12 w-12" />,
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Desktop applications",
      "Enterprise software",
      "Database design and management",
      "API development and integration",
      "Cloud-based solutions",
      "Legacy system modernization",
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <Smartphone className="h-12 w-12" />,
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "UI/UX design",
      "Backend integration",
      "App store submission",
      "Maintenance and updates",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-between pt-24">
      <section className="w-full py-12 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              Our Tech Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional technology services to help businesses grow and innovate
            </p>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="text-blue-600 mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center"
                      >
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/contact#get-in-touch">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start Your Next Tech Project?
            </h2>
            <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">
              Contact us today to discuss how we can help bring your ideas to life.
            </p>
            <Link href="/contact#get-in-touch">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300"
              >
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

