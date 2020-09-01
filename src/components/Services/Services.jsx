import React, {useEffect} from 'react';
import './Services.css';
import Button from '../Button/Button';
import Service from '../Service/Service';
import { loadServices } from '../../redux/actions';

import {connect} from 'react-redux';

const Services = (props) => {
  const {services, loadServices} = props;

  useEffect(()=>{
    loadServices(); 
  }, [])

  let serviceList = services.map(service=>{
    return (<Service key={service._id} info={service}/>)
  })

    return (
      <div className="Services">
        <div className="wrapper">
          <h3>My Services</h3>
          <p className="Services__intro">
            All the code is in my repository, take a look 💖
          </p>
          <div className="Services__container">{serviceList}</div>
          <a href="https://github.com/shaponpal6" target="_blank">
            <Button text="View All Projects" faIcon="fa fa-fire" />
          </a>
        </div>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    services: state.services.services
  }
}

export default connect(mapStateToProps, {loadServices})(Services);
