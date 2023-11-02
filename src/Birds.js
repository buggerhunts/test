import React from 'react';
import './Birds.css';

function Birds() {
  const handleBirdsClick = () => {
    window.open('https://twitter.com', '_blank');
  };

  return (
    <div className="birds">
      <img src="/birds.png" alt="Birds" onClick={handleBirdsClick} />
    </div>
  );
}

export default Birds;
