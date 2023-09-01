import React from 'react';
import './Button.css';

const Button = ({ background, text }) => {
  return <button className="custom-button" style={{ backgroundColor: background }}>{text}</button>;
};

export default Button;
