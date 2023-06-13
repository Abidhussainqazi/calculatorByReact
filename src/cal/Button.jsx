import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(children)}>
      {children}
    </button>
  );
};

export default Button;
