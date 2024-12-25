import React from "react";
import HeroSection from "@/components/HeroSection";
import scale_image from "../../../public/scale.jpg";

export default function ScalePage(): React.JSX.Element {
  return (
    <div className="">
      <HeroSection
        title="Scaling is like our traditional approach"
        image={scale_image}
        alt="PerformancePage"
      />
    </div>
  );
}
