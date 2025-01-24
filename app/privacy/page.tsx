export default function Privacy() {
    return (
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif italic text-[#cc3333] text-5xl md:text-6xl mb-12 text-center">Privacy Policy</h1>
  
          <div className="prose prose-red max-w-none">
            <section className="mb-8">
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-4">Information We Collect</h2>
              <p className="text-[#cc3333]/80 leading-relaxed">
                We collect information that you provide directly to us, including when you make a reservation, sign up for
                our newsletter, or contact us. This may include your name, email address, phone number, and any other
                information you choose to provide.
              </p>
            </section>
  
            <section className="mb-8">
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-4">How We Use Your Information</h2>
              <p className="text-[#cc3333]/80 leading-relaxed">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-[#cc3333]/80">
                <li>Process and confirm your reservations</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Respond to your questions and comments</li>
                <li>Improve our services and website functionality</li>
              </ul>
            </section>
  
            <section className="mb-8">
              <h2 className="font-serif italic text-[#cc3333] text-3xl mb-4">Information Sharing</h2>
              <p className="text-[#cc3333]/80 leading-relaxed">
                We do not sell or share your personal information with third parties for their direct marketing purposes.
                We may share your information with service providers who assist us in operating our website and conducting
                our business.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  