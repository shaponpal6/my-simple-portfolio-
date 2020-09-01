import React, {useEffect} from 'react';
import './Skills.css';
import Button from '../Button/Button';
import SkillTable from '../SkillTable/SkillTable';
import {connect} from 'react-redux';
import {loadSkills} from '../../redux/actions';
import Loader from '../Loader/Loader';
import { Link } from "react-scroll";

const Skills = (props) => {

    useEffect(()=>{
      props.loadSkills(2000)
    },[]);

    const data = (props.loading)? <Loader/>: <SkillTable skills={props.skills}/>

    return (
      <section className="Skills">
        <div className="wrapper">
          <div className="Skills__text">
            <h2 className="mb-2">My Services:</h2>
            <p className="mb-3 content">
            # Advance WordPress Plugin Development<br/>
            # Single page Application Development using webpack<br/>
            # Realtime Web Application using node js and socket.io<br/>
            # Chat Application development using firebase / socket.io<br/>
            # Live Steaming Project using node js, socket.io, webRTC.<br/>
            # Web Application development using core PHP/Laravel/codeigniter<br/>
            # Web scraping with python/javascript/PHP<br/>
            </p>
            <div className="Skills__btn-container mb-3">
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button text="acerca de mi" faIcon="fa fa-fire" />
              </Link>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <Button text="mis proyectos" faIcon="fa fa-suitcase" />
              </Link>
            </div>
          </div>
          <div className="Skills__skill-table">{data}</div>
        </div>
      </section>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    skills: state.skills.skills,
    loading: state.loading.loading
  }
}

export default connect(mapStateToProps, {loadSkills})(Skills);
