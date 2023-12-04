import React from "react";
import DevLang from "./components/DevLang";
import "./Project.css";

const Project = ({
  date,
  name,
  description,
  devLangs,
  pictureLink,
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
        {pictureLink && (
          <div className="picture-link">
            <a href={pictureLink} target="_blank">
              View pictures
              <i className="fa-solid fa-image"></i>
            </a>
          </div>
        )}
        {liveLink && (
          <div className="live-link">
            <a href={liveLink} target="_blank">
              Live Link
              <i className="icon-live-link fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
