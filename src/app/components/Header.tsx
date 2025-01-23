"use client"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Al-Irfan Online Quran Academy
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-green-200 transition-colors">
            Contact
          </Link>
          <Link href="/courses" className="hover:text-green-200 transition-colors">
            Courses
          </Link>
        </nav>
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-700">
          <Link href="/" className="block px-4 py-2 hover:bg-green-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-green-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-green-600 transition-colors">
            Contact
          </Link>
          <Link href="/courses" className="block px-4 py-2 hover:bg-green-600 transition-colors">
            Courses
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

