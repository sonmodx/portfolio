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
    <div className="app">
      <div className="container">
        <header className="header">
          <Hero isActive={isActive} setIsActive={setIsActive} />
        </header>
        <main className="main">
          <section id="about" className="about section-target" ref={aboutRef}>
            <h3 className="title">ABOUT</h3>
            <div className="content">
              <p>
                In the past, before entering university, I had no idea which
                faculty to choose. However, I decided to study computer
                engineering because I noticed it was trendy, and being someone
                who enjoys staying updated on technology, it seemed like a good
                fit.
              </p>
              <p>
                In my first year, I learned both hardware and software, but I
                found that I didn't particularly like hardware. But when I tried
                coding, I felt a strong connection and enjoyed solving problems.
              </p>
              <p>
                I experimented with various languages such as C, C++, Java,
                Python, and eventually ended up working with JavaScript. I also
                tried my hand at web development using HTML and CSS, discovering
                that I love to code for web application.
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
