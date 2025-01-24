import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#f5f0e8] px-4 py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-start">
        {/* Left Title */}
        <div>
          <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl lg:text-7xl leading-tight">
            Bucca di
            <br />
            Beppo
          </h1>
        </div>

        {/* Center Image with Arch */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative">
            {/* Arch Border */}
            <div className=" aspect-[4/5] h-[60vh] sm:h-[60vh] md:h-[80vh] w-full max-w-[90%] sm:max-w-[70%] md:max-w-2xl mx-auto">
          
                <Image
                  src="hero.svg"
                  alt="Chef preparing a dish"
                  fill
                  className="object-contain rounded-t-full"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            
            </div>

            {/* Star Decoration */}
            <div className="absolute -top-4 right-8 text-[#cc3333] text-2xl">✷ </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Star and Welcome Text */}
          <div className="absolute top-0 right-0 text-right">
            <div className="text-[#cc3333] text-2xl mb-2">✷</div>
            <p className="text-[#cc3333] text-lg max-w-[200px]">
              Welcome to our home where every dish tells a story of our history and culture
            </p>
          </div>

          {/* Small Image */}
          <div className="hidden md:block absolute top-72 right-0">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0  overflow-hidden">
                <Image
                  src="/subhero.svg"
                  alt="Chef at work"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

