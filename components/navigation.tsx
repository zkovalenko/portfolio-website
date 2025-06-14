"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${
                  pathname === item.path ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link href="/" className="text-xl font-bold">
            Katya Hassett
          </Link>
          <nav>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium text-gray-500 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
            >
              Resume
            </a>
          </nav>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button> */}

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="mr-2"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
