import Link from "next/link"

export default function ReservationSection() {
  return (
    <section className="py-24 px-4 bg-[#f5f0e8]">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="text-[#cc3333] text-2xl mb-2">✷</div>
        <h2 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-8">Reserve a table</h2>
        <p className="text-[#cc3333] text-lg mb-8 max-w-3xl mx-auto">
          Ready to experience the authentic flavors of Italy? Make a reservation at our restaurant today and let us take
          you on a culinary journey through the regions of Italy.
        </p>
        <Link
          href="/reservations"
          className="inline-block border border-[#cc3333] text-[#cc3333] px-8 py-3 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors"
        >
          Make a reservation
        </Link>
      </div>
    </section>
  )
}

