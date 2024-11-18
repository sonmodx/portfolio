import React from "react";
import "./Hero.css";
const Hero = ({ isActive }) => {
  return (
    <div className="hero">
      <div className="group">
        <h1 className="name">Sattachon Homhual</h1>
        <h2 className="role">Frontend Developer</h2>
        <p className="description">
          Hello! I'm a 4th-year student at KMITL, about to graduate, and I'm
          seeking exciting opportunities in front-end development. I have a
          strong passion for creating user-friendly interfaces and love to write
          clean, efficient code. I'm eager to bring my skills and creativity to
          a dynamic team. Let's connect!
        </p>
      </div>

      <nav className="navbar">
        <ul className="menu-list">
          <li className="list">
            <a href="#about" className={isActive.about ? "active" : ""}>
              <div className="line"></div>
              <div className="name-link">About</div>
            </a>
          </li>
          <li className="list">
            <a href="#projects" className={isActive.projects ? "active" : ""}>
              <div className="line"></div>
              <div className="name-link">Projects</div>
            </a>
          </li>
          {/* <li className="list">
            <a href="#contact">
              <div className="line"></div>
              <div className="name-link">Contact</div>
            </a>
          </li> */}
        </ul>
      </nav>
      <ul className="contact-list">
        <li className="list">
          <a href="mailto:sonmodx@gmail.com" target="_blank">
            <i className="icon fa-solid fa-envelope"></i>
          </a>
        </li>
        <li className="list">
          <a href="https://github.com/sonmodx" target="_blank">
            <i className="icon fa-brands fa-github"></i>
          </a>
        </li>
        {/* <li className="list">
          <a href="" target="_blank">
            <i className="icon fa-brands fa-linkedin"></i>
          </a>
        </li> */}
      </ul>
    </div>
  );
};

export default Hero;
