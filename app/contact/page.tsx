"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#cc3333] rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div>
                  <h2 className="font-serif text-[#cc3333] text-xl mb-2">Location</h2>
                  <p className="text-[#cc3333]/80">
                    123 Italian Street
                    <br />
                    New York, NY 10013
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#cc3333] rounded-full flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <h2 className="font-serif text-[#cc3333] text-xl mb-2">Hours</h2>
                  <p className="text-[#cc3333]/80">
                    Monday - Sunday
                    <br />
                    12:00 PM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#cc3333] rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div>
                  <h2 className="font-serif text-[#cc3333] text-xl mb-2">Phone</h2>
                  <p className="text-[#cc3333]/80">(212) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-[#cc3333] rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div>
                  <h2 className="font-serif text-[#cc3333] text-xl mb-2">Email</h2>
                  <p className="text-[#cc3333]/80">info@buccadibeppo.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-[#cc3333]">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="block w-full border rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#cc3333]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="block w-full border rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-[#cc3333]">
                  Subject
                </label>
                <input
                  id="subject"
                  required
                  className="block w-full border rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-[#cc3333]">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="block w-full border rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#cc3333] hover:bg-[#cc3333]/90 text-white rounded-full py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
