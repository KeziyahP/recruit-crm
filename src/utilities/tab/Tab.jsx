import React from 'react';
import './Tab.css'

const Tab = ({ children }) => {
  return (
    <div className="tab-content">
      {children}
    </div>
  );
};

export default Tab;


