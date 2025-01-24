import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-[#cc3333]/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="text-[#cc3333] font-serif text-2xl italic mb-4 md:mb-0">
            Bucca di Beppo
          </Link>

          <nav className="flex space-x-8">
            <Link href="/our-story" className="text-[#cc3333] hover:text-[#aa2222]">
              Our story
            </Link>
            <Link href="/menu" className="text-[#cc3333] hover:text-[#aa2222]">
              Menu
            </Link>
            <Link href="/reservations" className="text-[#cc3333] hover:text-[#aa2222]">
              Reservations
            </Link>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-[#cc3333] hover:text-[#aa2222]">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#cc3333] hover:text-[#aa2222]">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#cc3333] hover:text-[#aa2222]">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-[#cc3333] hover:text-[#aa2222]">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="border-t border-[#cc3333]/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#cc3333]">
          <p>© 2025 Bucca di Beppo. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#aa2222]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#aa2222]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#aa2222]">
            Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


