import React from "react";
import "./ServiceTag.css";

const ServiceTag = props => {
  const tag = props.tag;

  return (
    <div className="ServiceTag">{tag}</div>
  );
};

export default ServiceTag;
