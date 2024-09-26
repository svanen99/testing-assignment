'use client'
import AboutMe from "@/components/About";
import Connect from "@/components/Connect";
import { about, connect, projects } from "@/utils/data";
import Navigation from "@/components/Navigation";
import React, { useState } from "react";


export default function Home() {
  const [activeSection, setActiveSection] = useState<"aboutMe" | "projects" | "connect">("aboutMe");

  const handleScrollToSection = (section: "aboutMe" | "projects" | "connect") => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navigation onScrollToSection={handleScrollToSection} activeSection={activeSection} />
      <AboutMe {...about} />
      <Connect {...connect} />
    </>
  );
}
