import React from "react";
import HeroSection from "@/components/HeroSection";
import reliability_image from "../../../public/reliability.jpg";
export default function ReliabilityPage(): React.JSX.Element {
  return (
    <div className="">
      <HeroSection
        title="You can rely on us, we won't let you down"
        image={reliability_image}
        alt="PerformancePage"
      />
    </div>
  );
}
