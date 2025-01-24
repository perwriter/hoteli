import Link from "next/link"


export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-[#cc3333] text-2xl mb-4">✷</div>
        <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-6">404</h1>
        <h2 className="font-serif italic text-[#cc3333] text-3xl mb-8">Page Not Found</h2>
        <p className="text-[#cc3333]/80 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <button className="bg-[#cc3333] hover:bg-[#cc3333]/90 text-white px-8 py-3 rounded-full">
          <Link href="/">Return Home</Link>
        </button>
      </div>
    </div>
  )
}

