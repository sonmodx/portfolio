import React from "react";
import DevLang from "./components/DevLang";
import "./Project.css";

const Project = ({
  date,
  name,
  description,
  devLangs,
  pictureLink,
  githubLink,
  liveLink,
}) => {
  return (
    <div className="project">
      <div className="date">{date}</div>
      <div className="content">
        <h4 className="project-name">{name}</h4>
        <p className="description">{description}</p>
        <ul className="dev-langs">
          {devLangs?.map((devLang, idx) => (
            <DevLang key={idx} devLang={devLang} />
          ))}
        </ul>
        <div className="group-links">
          {pictureLink && (
            <div className="link">
              <a href={pictureLink} target="_blank">
                View pictures
                <i className="fa-solid fa-image"></i>
              </a>
            </div>
          )}
          {githubLink && (
            <div className="link">
              <a href={githubLink} target="_blank">
                View Code
                <i className="icon fa-brands fa-github"></i>
              </a>
            </div>
          )}
          {liveLink && (
            <div className="link">
              <a href={liveLink} target="_blank">
                Live Link
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
