import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import FaqSection from "./faq-section";


export function AnimatedGridPatternDemoFaq() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-[#FEFEFE]">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full skew-y-12",
        )}
      />
      <div className="relative z-10 w-full">
        <FaqSection />
      </div>
    </div>
  );
}