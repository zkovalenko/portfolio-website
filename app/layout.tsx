import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name | Graphic Designer",
  description: "Portfolio of a graphic design graduate showcasing projects and skills",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navigation />
          <main className="min-h-screen pt-16">{children}</main>
          <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
