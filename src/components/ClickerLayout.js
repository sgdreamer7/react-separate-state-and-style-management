import React from 'react';

const ClickerLayout = ({className="", ...props}) => {
  return (
    <div {...props} className={`clickerLayout ${className}`}/>
  );
};

export default ClickerLayout;