import React from "react";
import "./Project.css";

const Project = props => {
  const { name, urlWebsite, urlImage, urlRepository } = props.info;
  return (
    <div className="Project mb-3 relative">
      <div className="Project__cover">
        <img src={urlImage} alt="project__cover" />
      </div>
      <div className="Project__bar">
        <a href={urlRepository} target="_blank" className="fa fa-github" />
        <a href={urlWebsite} target="_blank"><h4>{name}</h4></a>
      </div>
    </div>
  );
};

export default Project;
