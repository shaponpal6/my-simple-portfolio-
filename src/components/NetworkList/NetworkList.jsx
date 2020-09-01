import React from 'react';
import NetworkItem from '../NetworkItem/NetworkItem';

const NetworkList = () => {
    return (
      <div>
        <NetworkItem
          title="linkedin"
          faIcon="fa fa-linkedin"
          url="https://www.linkedin.com/in/shapon-pal/"
        />
        <NetworkItem
          title="Github"
          faIcon="fa fa-github"
          url="https://github.com/shaponpal6"
        />
        <NetworkItem
          title="Facebook"
          faIcon="fa fa-facebook"
          url="https://www.facebook.com/shaponp"
        />
      </div>
    );
}

export default NetworkList;
