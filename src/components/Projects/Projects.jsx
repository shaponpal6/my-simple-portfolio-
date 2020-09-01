import React, { useEffect } from "react";
import "./Projects.css";
import Button from "../Button/Button";
import Project from "../Project/Project";
import ProjectTag from "../ProjectTag/ProjectTag";
import {
  loadProjects,
} from "../../redux/actions";

import { connect } from "react-redux";

const Projects = (props) => {
  const { projects, loadProjects} = props;

  useEffect(() => {
    loadProjects();
  }, []);

  // Load Project
  let projectList = projects.map((project) => {
    return <Project key={project._id} info={project} />;
  });


  return (
    <div className="Projects">
      <div className="wrapper">
        <h3>Portfolio Projects</h3>
        <p className="Projects__intro">
          All the code is in my repository, take a look 💖
        </p>
        {/* <div className="Projects__container">{projectTagList}</div> */}
        <div className="Projects__container">{projectList}</div>
        <a href="https://github.com/shaponpal6" target="_blank">
          <Button text="See All Repo" faIcon="fa fa-fire" />
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.projects.projects,
  };
};

export default connect(mapStateToProps, {loadProjects})(Projects);
