import { useRef } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectSection/ProjectList";
import Skills from "./components/Skills";
import MediaLinks from "./components/MediaLinks";

function App() {
  return (
    <>
      <div className="w-full h-screen fixed top-0 items-center bg-cover bg-no-repeat bg-black -z-10 blur-sm border-none"></div>
      <div className="text-white ">
        <Navbar />
        <HeroSection />
        <MediaLinks />
        <Skills />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
