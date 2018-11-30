import React from 'react';

const ClickableLayout = ({onClick}) => {
  return (
    <div onClick={onClick} style={{display: 'block', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'transparent'}} />
  );
};

export default ClickableLayout;
