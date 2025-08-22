
// import AboutSection from "@/components/home-page/about/about-section";
import { AnimatedGridPatternDemo } from "@/components/home-page/about/animated-grid-pattern.-background";
import ContactSection from "@/components/home-page/contact/contact-section";
import FaqSection from "@/components/home-page/faq/faq-section";
import HeroSection from "@/components/home-page/hero/hero-section";
import ProjectsSection from "@/components/home-page/projects/projects-section";
import ScrollingTextSection from "@/components/home-page/scrolling-text/scrolling-text-section";
import ServicesSection from "@/components/home-page/services/services-section";
import StatisticsSection from "@/components/home-page/statistics/statistics-section";
import VideoSection from "@/components/home-page/video/video-section";
// import Head from "@/components/home-page/why-us/head";
import WhyUsSection from "@/components/home-page/why-us/why-us-section";
import ScrollToTop from "@/components/scroll-to-top/scroll-to-top";
import { AnimatedGridPatternDemoFaq } from '../components/home-page/faq/animated-grid-pattern.-background';
// import { Testimonials } from "@/components/home-page/testimonials/testimonials";
import NewsSection from "@/components/home-page/news/news-section";
import TestimonialsSection from "@/components/home-page/testimonialsV2/testimonials-section";






export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <VideoSection />
      <ServicesSection />
      <ContactSection />
      <AnimatedGridPatternDemo />
      <ProjectsSection />
      <WhyUsSection />
      <ScrollingTextSection />
      <StatisticsSection />
      <AnimatedGridPatternDemoFaq />
      {/* <Testimonials /> */}
      <TestimonialsSection />
      <NewsSection />
      <ScrollToTop />
    </main>
  )
}
