import Image from "next/image";
import Link from "next/link";

export default function ChefSection() {
  return (
    <section className="py-24 px-4 bg-[#f5f0e8]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-t-full overflow-hidden  border-[#cc3333]">
            <Image
              src="/chef.svg"
              alt="Chef Beppo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute -top-2 right-4 text-[#cc3333] text-2xl">
              ✷
            </div>
          </div>
        </div>

        <div>
          <span className="text-[#cc3333] uppercase tracking-wider">
            OUR STORY
          </span>
          <h2 className="font-serif italic text-[#cc3333] text-5xl mb-6 mt-2">
            Chef Beppo
          </h2>
          <p className="text-[#cc3333] mb-8 max-w-xl">
            With over 50 years of experience in the culinary industry, Chef
            Beppo is an expert in crafting exceptional dishes that showcase the
            best of Italian cuisine. His passion for cooking and dedication to
            using only the finest, freshest ingredients is what sets our
            restaurant apart.
          </p>
          <Link
            href="/staff"
            className="inline-block border border-[#cc3333] text-[#cc3333] px-8 py-3 rounded-full hover:bg-[#cc3333] hover:text-white transition-colors"
          >
            See our staff
          </Link>
        </div>
      </div>
    </section>
  );
}
