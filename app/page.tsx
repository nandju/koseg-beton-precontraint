import HeroSection from "@/components/hero/hero-section";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import VideoSection from "@/components/video/video-section";




export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VideoSection />
      <ScrollToTop />
    </main>
  )
}
