
// import AboutSection from "@/components/home-page/about/about-section";
import { AnimatedGridPatternDemo } from "@/components/home-page/about/animated-grid-pattern.-background";
import ContactSection from "@/components/home-page/contact/contact-section";
import HeroSection from "@/components/home-page/hero/hero-section";
import ProjectsSection from "@/components/home-page/projects/projects-section";
import ServicesSection from "@/components/home-page/services/services-section";
import VideoSection from "@/components/home-page/video/video-section";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";





export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ContactSection />
      <AnimatedGridPatternDemo />
      <ProjectsSection />
      <ScrollToTop />
    </main>
  )
}
