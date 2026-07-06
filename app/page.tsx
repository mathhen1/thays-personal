"use client"

import { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import AboutMeMore from "./Components/AboutMeMore";
import NavBar from "./Components/NavBar";
import Achieves from "./Components/Achieves";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Formacao from "./Components/Formacao";
import TeamTH from "./Components/TeamTH";
import MoreTeamTH from "./Components/MoreTeamTH";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function Home() {

  useEffect(() => {

    const root = document.querySelectorAll(".reveal, .reveal2")

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("reveal")) {
            entry.target.classList.add("animate-reveal")
          }
          if (entry.target.classList.contains("reveal2")) {
            entry.target.classList.add("animate-reveal-r")
          }
        }
      })
    }, { threshold: 0.2 })

    root.forEach(node => {
      obs.observe(node)
    })
  }, [])

  return (
    <div className="flex flex-col h-full w-full overflow-clip text-black font-mono">
      <NavBar />
      <AboutMe />
      <AboutMeMore />
      <Achieves />
      <Services />
      <TeamTH />
      <MoreTeamTH />
      <Experience />
      <Contact />
      <Footer />
      {/* <Formacao /> */}
    </div>
  );
}
