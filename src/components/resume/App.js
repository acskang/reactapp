import "./App.css";
import Profile from "./profile";
import About from "./information/about"
import Services from "./information/services"
import Skills from "./information/skills"
import Experience from "./information/experience"
import Contact from "./information/contact"

const app = () => {
  return (
    <div className="container">
      <Profile />
      <div className="information">
        <About />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default app;
