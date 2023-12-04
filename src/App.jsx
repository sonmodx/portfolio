import "./App.css";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import projectData from "./data.json";
function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <Hero />
        </header>
        <main className="main">
          <section id="about" className="about section-target">
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
          <section id="projects" className="projects section-target">
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
