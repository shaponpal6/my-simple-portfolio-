import React from 'react';
import './SkillItem.css';
import SkillBar from '../SkillBar/SkillBar';

const SkillItem = ({logo, title, percent}) => {
    return (
        <div className="SkillItem mb-1">
            <figure className="SkillItem__icon">
                <img src={logo} alt="skill_logo"/>
            </figure>
            <SkillBar title={title} percent={percent}/>
        </div>
    );
}

export default SkillItem;
