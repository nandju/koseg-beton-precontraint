import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import AboutSection from "./about-section";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg border bg-[#F3EEE3]">
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
        <AboutSection />
      </div>
    </div>
  );
}