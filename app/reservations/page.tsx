"use client"

import { useState } from "react"

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Make a Reservation</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Date Input */}
            <div className="space-y-2">
              <label htmlFor="date" className="block text-sm font-medium text-[#cc3333]">
                Date
              </label>
              <input
                id="date"
                type="date"
                required
                className="block w-full border text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>

            {/* Time Input */}
            <div className="space-y-2">
              <label htmlFor="time" className="block text-sm font-medium text-[#cc3333]">
                Time
              </label>
              <input
                id="time"
                type="time"
                required
                className="block w-full border  text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>

            {/* Guests Select */}
            <div className="space-y-2">
              <label htmlFor="guests" className="block text-sm font-medium text-[#cc3333]">
                Number of Guests
              </label>
              <select
                id="guests"
                className="block w-full border rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                defaultValue="2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>

            {/* Name Input */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-[#cc3333]">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="block w-full border text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#cc3333]">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="block w-full border text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-[#cc3333]">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                className="block w-full border text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          {/* Special Requests Textarea */}
          <div className="space-y-2">
            <label htmlFor="specialRequests" className="block text-sm font-medium text-[#cc3333]">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              rows={4}
              className="block w-full border text-black rounded-md px-3 py-2 border-[#cc3333]/20 focus:border-[#cc3333] focus:ring-[#cc3333]"
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#cc3333] hover:bg-[#cc3333]/90 text-white px-8 py-3 rounded-full"
            >
              Make Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
