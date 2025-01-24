import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-24 px-4 bg-[#f5f0e8]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-[#cc3333] uppercase tracking-wider">OUR STORY</span>
          <h2 className="font-serif italic text-[#cc3333] text-5xl mb-6 mt-2">About us</h2>
          <p className="text-[#cc3333] mb-8 max-w-xl">
            Since our inception, we have been committed to delivering a memorable dining experience that captures the
            essence of Italian culture. From our rustic decor to our menu featuring traditional favorites, we strive to
            create a warm and inviting atmosphere that transports our guests to the heart of Italy.
          </p>
          <Link
            href="/about"
            className="inline-block border border-[#cc3333] text-[#cc3333] px-8 py-3 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors"
          >
            Read about us
          </Link>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-t-full overflow-hidden border-[#cc3333]">
            <Image
              src="/about.svg"
              alt="Food preparation"
              fill
              className="objectcontain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -top-2 right-4 text-[#cc3333] text-2xl">✷</div>
          </div>
        </div>
      </div>
    </section>
  )
}

