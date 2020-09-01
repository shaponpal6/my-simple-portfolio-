import React from 'react';
import './SkillTable.css';
import SkillItem from '../SkillItem/SkillItem';

const SkillTable = (props) => {
    const {skills} = props;
    return (
        <div className="SkillTable">
            {skills.map((skill)=>{
                return <SkillItem title={skill.name} percent={skill.percent} logo={skill.urlImage} key={skill._id}/>
            })}
        </div>
    );
}

export default SkillTable;
