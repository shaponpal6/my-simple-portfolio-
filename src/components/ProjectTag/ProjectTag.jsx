import React from "react";
import "./ProjectTag.css";
import Button from "../Button/Button";

const ProjectTag = props => {
  const { name, urlWebsite, urlImage, urlRepository } = props.info;
  // console.log(props)
  return (
    <button onClick={props.onClick}>{name}</button>
  );
};

export default ProjectTag;
