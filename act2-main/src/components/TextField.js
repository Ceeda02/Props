import React from 'react';
import './TextField.css';

const TextField = ({ id, classname, background }) => {
  return <input type="text" id={id} className={classname} style={{ backgroundColor: background }} />;
};

export default TextField;
