import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-4 mb-6 sm:mb-0">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              CodeWork
            </h3>
            <p className="text-gray-600 text-sm">
              Empowering future tech leaders through expert guidance and innovative teaching methods.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-600 hover:text-blue-600 text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/cpp" className="text-gray-600 hover:text-blue-600 text-sm">
                  C++ Programming
                </Link>
              </li>
              <li>
                <Link href="/courses/java" className="text-gray-600 hover:text-blue-600 text-sm">
                  Java Development
                </Link>
              </li>
              <li>
                <Link href="/courses/javascript" className="text-gray-600 hover:text-blue-600 text-sm">
                  JavaScript Mastery
                </Link>
              </li>
              <li>
                <Link href="/courses/react" className="text-gray-600 hover:text-blue-600 text-sm">
                  React Framework
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Education Ave, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600 text-sm">contact@codework.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} CodeWork. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

