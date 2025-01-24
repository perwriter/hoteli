"use client"

import { useState } from "react"

export default function Cookies() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  })

  const handleSave = () => {
    console.log("Saved preferences:", preferences)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Cookie Settings</h1>

        <div className="space-y-8">
          <section className="space-y-4">
            {/* Necessary Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-[#cc3333] text-xl">Necessary Cookies</h2>
                <p className="text-[#cc3333]/80 text-sm">Required for the website to function properly</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.necessary}
                disabled
                className="h-6 w-6 text-[#cc3333] bg-gray-200 rounded-md cursor-not-allowed"
              />
            </div>

            {/* Functional Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-[#cc3333] text-xl">Functional Cookies</h2>
                <p className="text-[#cc3333]/80 text-sm">Remember your preferences and enhance your experience</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.functional}
                onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                className="h-6 w-6 text-[#cc3333] bg-gray-200 rounded-md focus:ring-[#cc3333]"
              />
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-[#cc3333] text-xl">Analytics Cookies</h2>
                <p className="text-[#cc3333]/80 text-sm">Help us understand how visitors interact with our website</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                className="h-6 w-6 text-[#cc3333] bg-gray-200 rounded-md focus:ring-[#cc3333]"
              />
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-serif text-[#cc3333] text-xl">Marketing Cookies</h2>
                <p className="text-[#cc3333]/80 text-sm">Used to deliver personalized advertisements</p>
              </div>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                className="h-6 w-6 text-[#cc3333] bg-gray-200 rounded-md focus:ring-[#cc3333]"
              />
            </div>
          </section>

          {/* Save Preferences Button */}
          <div className="text-center">
            <button
              onClick={handleSave}
              className="bg-[#cc3333] hover:bg-[#cc3333]/90 text-white px-8 py-3 rounded-full"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
