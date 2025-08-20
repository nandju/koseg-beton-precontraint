import ContactSection from "@/components/contact/contact-section";
import HeroSection from "@/components/hero/hero-section";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import ServicesSection from "@/components/services/services-section";
import VideoSection from "@/components/video/video-section";




export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  )
}
