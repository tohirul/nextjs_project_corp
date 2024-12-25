import React, { JSX } from "react";
import home_image from "../../public/home.jpg";
import HeroSection from "../components/HeroSection";

export default function Home(): JSX.Element {
  return (
    <div className="">
      <HeroSection
        title="Professional Cloud Hosting Services"
        image={home_image}
        alt="Home"
      />
    </div>
  );
}
