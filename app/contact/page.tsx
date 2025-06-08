"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitMessage("Thank you for your message! I will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Clear success message after 5 seconds
    setTimeout(() => {
      setSubmitMessage("")
    }, 5000)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hello, I'll try my best to get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">(123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 mt-0.5" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Your City, State</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </span>
              )}
            </Button>

            {submitMessage && (
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-md text-center">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
