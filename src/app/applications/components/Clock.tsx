'use client'

import { useEffect, useState } from "react"

export default function Clock() {
  const [now, setNow] = useState<string | null>(null)

  // ======================
  // CLOCK LOGIC
  // ======================
  useEffect(() => {
    const formatNow = () => {
      const date = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
      )

      const h = String(date.getHours()).padStart(2, "0")
      const m = String(date.getMinutes()).padStart(2, "0")
      const s = String(date.getSeconds()).padStart(2, "0")

      return `${h} : ${m} : ${s}`
    }

    setNow(formatNow())
    const interval = setInterval(() => {
      setNow(formatNow())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-50 pointer-events-auto"
      aria-live="polite"
      aria-label={`Waktu Indonesia: ${now ?? "--:--:--"}`}
      suppressHydrationWarning
    >
      <div
        className="
          group relative flex items-center gap-2 sm:gap-2.5 md:gap-3
          rounded-full 
          px-3 py-1.5
          sm:px-4 sm:py-2
          md:px-5 md:py-2.5
          text-base sm:text-lg md:text-xl font-semibold tracking-wide

          bg-black/50
          border border-black/80
          backdrop-blur-md

          shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          transition-all duration-500 ease-out

          hover:scale-[1.03]
        "
      >
        {/* Glow Layer on Hover */}
        <div
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-r from-black/30 via-black/30 to-black/30
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            pointer-events-none
          "
        />

        {/* Time Display */}
        <span
          className="relative text-white transition-colors duration-500"
          suppressHydrationWarning
        >
          {now ?? "--:--:--"}
        </span>
      </div>
    </div>
  )
}