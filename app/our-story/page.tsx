import Image from "next/image"

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Our Story</h1>

        <div className="space-y-16">
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/about.svg"
                alt="Restaurant interior"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-4">Our Beginning</h2>
              <p className="text-[#cc3333]/80 leading-relaxed">
                Founded in 1989, Bucca di Beppo began as a small family restaurant in the heart of Little Italy. Our
                commitment to authentic Italian cuisine and warm hospitality has remained unchanged for over three
                decades.
              </p>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/about.svg"
                  alt="Chef preparing food"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-4">Our Philosophy</h2>
              <p className="text-[#cc3333]/80 leading-relaxed">
                At Bucca di Beppo, we believe that every dish tells a story. Our recipes have been passed down through
                generations, each one carrying the rich traditions and flavors of Italian cuisine.
              </p>
            </div>
          </section>

          <section className="text-center max-w-2xl mx-auto">
            <div className="text-[#cc3333] text-2xl mb-4">✷</div>
            <p className="text-[#cc3333]/80 leading-relaxed">
              Today, we continue to serve our community with the same passion and dedication that inspired our founding.
              Every meal we serve is a celebration of Italian culture and tradition.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

