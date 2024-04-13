import { useRef } from "react";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import MediaLinks from "./components/MediaLinks";

function App() {
  return (
    <>
      {/* background */}
      <div className="h-screen fixed top-0 blur-sm w-screen bg-cover bg-no-repeat bg-[url(src\ass\background.jpg)] -z-10 border-none"></div>

      {/* Components */}
      <div className="">
        <Navbar />
        <HeroSection />
        <MediaLinks />
        <Skills />
        <ProjectList />
        <Contact />
      </div>
    </>
  );
}

export default App;
