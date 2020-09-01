import React from 'react';
import './SkillBar.css';

const SkillBar = (props) => {
    const {title, percent} = props;
    return (
      <article className="SkillBar">
        <header className="SkillBar__text mb-1">
            <p>{title}</p>
            <p>{percent}%</p>
        </header>
        <div className="SkillBar__bar relative">
          <div className="SkillBar__thumb" style={{width:`${percent}%`}}></div>
          <div className="SkillBar__box"></div>
        </div>
      </article>
    );
}

export default SkillBar;
