import React from 'react';
import './NetworkItem.css';

const NetworkItem = ({faIcon, title, url}) => {
    return (
      <div className="NetworkItem mb-1">
        <a href={url} target="_blank" className={faIcon} />
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
    );
}

export default NetworkItem;
