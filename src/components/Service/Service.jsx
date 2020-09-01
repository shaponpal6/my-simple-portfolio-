import React from "react";
import ServiceTag from "../ServiceTag/ServiceTag";
import "./Service.css";

const Service = (props) => {
  const {
    name,
    tags,
    shortDescription,
    description,
    buttonText,
    fontAwesome,
    targetUrl,
  } = props.info;

  let tagsList = tags.map(tag=>{
    return (<ServiceTag key={tag} tag={tag}/>)
  })

  return (
    <div className="Service mb-3 relative">
      <div className="Service__box">
        <div className="Service__icon">
          <i className={fontAwesome}></i>
        </div>
        <div className="Service__name">
          <h2>{name}</h2>
        </div>
        <div className="Service__description">
          <h4>{shortDescription}</h4>
        </div>
        {/* <ServiceTag tags={tags} /> */}
        <div className="ServiceTags">{tagsList}</div>
        <div className="Service__cursor">
          <span className="Service__projects">
            <i className="fa fa-plus"></i>
          </span>
          <div className="Service-project-description">
            <h4>{description}</h4>
          </div>
        </div>
      </div>
      <div className="Service__bar">
        <a href={targetUrl}>
          <h4>
            <i className="fa fa-github"></i> {buttonText}
          </h4>
        </a>
      </div>
    </div>
  );
};

export default Service;
