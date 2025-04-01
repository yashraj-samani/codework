"use client";

import { Button } from "@/components/ui/button";
import HeroSection from "../components/home/hero-section";
import StudentAchievements from "../components/home/student-achievements";
import PopularCourses from "../components/home/popular-courses";
import WhyChooseUs from "../components/home/why-choose-us";
import Testimonials from "../components/home/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection />
      <StudentAchievements />
      <PopularCourses />
      <WhyChooseUs />
      <Testimonials />

      {/* Call-to-Action Section */}
      <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-blue-600 to-blue-400">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-10 shadow-xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              🚀 Take the First Step Towards Your Tech Career!
            </h2>
            <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg">
              Join our community of successful tech professionals and start your
              journey today.
            </p>
            <Link href="/courses" scroll={true}>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 sm:px-8 py-4 sm:py-6 h-auto text-base sm:text-lg rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300"
                onClick={() => {
                  // This will help ensure the page scrolls to top when navigating
                  if (typeof window !== "undefined") {
                    sessionStorage.setItem("scrollToTop", "true");
                  }
                }}
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
