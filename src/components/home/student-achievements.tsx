"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const companyLogos = [
  { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Amazon", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Apple", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Facebook", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Netflix", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Tesla", logo: "/placeholder.svg?height=60&width=120" },
  { name: "IBM", logo: "/placeholder.svg?height=60&width=120" },
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    logo: "/placeholder.svg?height=80&width=80",
    student: "Alex Johnson",
  },
  {
    name: "Google Cloud Professional",
    logo: "/placeholder.svg?height=80&width=80",
    student: "Maria Garcia",
  },
  {
    name: "Microsoft Certified: Azure Developer",
    logo: "/placeholder.svg?height=80&width=80",
    student: "David Chen",
  },
  {
    name: "Oracle Certified Professional",
    logo: "/placeholder.svg?height=80&width=80",
    student: "Sarah Williams",
  },
  {
    name: "Cisco Certified Network Professional",
    logo: "/placeholder.svg?height=80&width=80",
    student: "James Wilson",
  },
  {
    name: "CompTIA Security+",
    logo: "/placeholder.svg?height=80&width=80",
    student: "Emily Brown",
  },
];

export default function StudentAchievements() {
  const [activeTab, setActiveTab] = useState<"placements" | "certifications">(
    "placements"
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (!sliderRef.current) return;

    const items = activeTab === "placements" ? companyLogos : certifications;
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(items.length / 4));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  const prevSlide = () => {
    if (!sliderRef.current) return;

    const items = activeTab === "placements" ? companyLogos : certifications;
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(items.length / 4)) % Math.ceil(items.length / 4)
    );
  };

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
            Student Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our students excel in their careers and earn prestigious
            certifications
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
            <button
              onClick={() => {
                setActiveTab("placements");
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "placements"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Hired Students
            </button>
            <button
              onClick={() => {
                setActiveTab("certifications");
                setCurrentSlide(0);
              }}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === "certifications"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              International Certifications
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div
            ref={sliderRef}
            className="overflow-hidden rounded-xl bg-white p-8 shadow-lg border border-gray-100"
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {activeTab === "placements" ? (
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
                    {companyLogos
                      .slice(0, Math.min(8, companyLogos.length))
                      .map((company, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all"
                        >
                          <Image
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            width={120}
                            height={60}
                            className="object-contain h-12"
                          />
                        </motion.div>
                      ))}
                  </div>
                </div>
              ) : (
                <div className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {certifications
                      .slice(0, Math.min(6, certifications.length))
                      .map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all"
                        >
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={cert.name}
                            width={80}
                            height={80}
                            className="object-contain h-16 w-16 mb-3"
                          />
                          <h3 className="text-sm font-medium text-gray-900 text-center">
                            {cert.name}
                          </h3>
                          <p className="text-xs text-gray-500 mt-1">
                            {cert.student}
                          </p>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md z-10 hidden sm:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md z-10 hidden sm:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-2 sm:hidden">
          {Array.from({
            length: Math.ceil(
              (activeTab === "placements"
                ? companyLogos.length
                : certifications.length) / 4
            ),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
