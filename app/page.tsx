import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import StorySection from "@/components/story-section"
import AboutSection from "@/components/about-section"
import ChefSection from "@/components/chef-section"
import ReservationSection from "@/components/reservation-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f0e8]">
   
      <HeroSection />
      <StorySection />
      <AboutSection />
      <ChefSection />
      <ReservationSection />

    </div>
  )
}

