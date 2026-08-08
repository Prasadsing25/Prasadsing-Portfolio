import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Certificate from "./components/Certificate/Certificate.jsx";
import Project from "./components/Projects/Projects.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

import BlurBlob from "./BlurBlob.jsx";

const App = () => {

  return (
    
    <div className="bg-[#050414]">
      <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%'}} />
      <div className="bg-[#050414]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Certificate />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App;
