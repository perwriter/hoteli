import Link from "next/link"

export default function StorySection() {
  return (
    <section className="py-24 px-4 bg-[#f5f0e8]">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="text-[#cc3333] text-2xl mb-2">✷</div>
        <h2 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-8">Every dish tells a story.</h2>
        <p className="text-[#cc3333] text-lg mb-8 max-w-3xl mx-auto">
          At Bucca di Beppo, every dish tells a story. From the carefully crafted recipes passed down through
          generations to the locally-sourced ingredients that showcase the bounty of our region, each dish we serve is a
          tribute to the rich history and culture of Italian cuisine.
        </p>
        <Link
          href="/our-story"
          className="inline-block border border-[#cc3333] text-[#cc3333] px-8 py-3 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors"
        >
          Read our story
        </Link>
      </div>
    </section>
  )
}

