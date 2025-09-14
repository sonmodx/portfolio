import "./App.css";
import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import projectData from "./data.json";
function App() {
  const [isActive, setIsActive] = useState({ about: true, projects: false });
  const aboutRef = useRef();
  const projectsRef = useRef();
  const [offset, setOffset] = useState(0);
  const [isRainbowTheme, setIsRainbowTheme] = useState(false);

  useEffect(() => {
    const projectEleTop = projectsRef?.current.getBoundingClientRect().top;
    const aboutEleTop = aboutRef?.current.getBoundingClientRect().top;

    const onScroll = () => {
      setOffset(window.scrollY);

      if (projectEleTop <= 50) {
        setIsActive({ about: false, projects: true });
      } else if (aboutEleTop <= 0) {
        setIsActive({ about: true, projects: false });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  return (
    <div className={`app ${isRainbowTheme ? "rainbow-mode" : ""}`}>
      <div
        className="toggle-theme"
        onClick={() => setIsRainbowTheme((prev) => !prev)}
      >
        {!isRainbowTheme && <i className="fa-solid fa-rainbow"></i>}
        {isRainbowTheme && <i className="light fa-solid fa-lightbulb"></i>}
      </div>
      <div className="container">
        <header className="header">
          <Hero isActive={isActive} setIsActive={setIsActive} />
        </header>
        <main className="main">
          <section id="about" className="about section-target" ref={aboutRef}>
            <h3 className="title">ABOUT</h3>
            <div className="content">
              <p>
                Hello! I'm a fresh graduate from KMITL, looking for
                opportunities as a Full Stack Engineer. I have a solid
                foundation in both front-end and back-end development, and I'm
                passionate about building scalable, user-friendly applications.
                I enjoy writing clean, efficient code and collaborating on
                challenging projects. I'm eager to contribute my skills and grow
                with a dynamic team. Let's connect!
              </p>
            </div>
          </section>

          <section
            id="projects"
            className="projects section-target"
            ref={projectsRef}
          >
            <h3 className="title">PROJECTS</h3>
            <div className="group">
              {projectData?.map((data, idx) => (
                <Project
                  key={idx}
                  date={data.date}
                  name={data.name}
                  description={data.description}
                  devLangs={data.devLangs}
                  pictureLink={data.pictureLink}
                  githubLink={data.githubLink}
                  liveLink={data.liveLink}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
