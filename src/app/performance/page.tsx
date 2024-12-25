import React from "react";
import HeroSection from "@/components/HeroSection";
import performance_image from "../../../public/performance.jpg";

export default function PerformancePage(): React.JSX.Element {
  return (
    <div className="">
      <HeroSection
        title="We provide the best performance"
        image={performance_image}
        alt="PerformancePage"
      />
    </div>
  );
}
