import React from 'react';
import './Bookshelf.css'; // Import the CSS file

function Bookshelf() {
  const handleBookshelfClick = () => {
    window.open('https://medium.com', '_blank');
  };

  return (
    <div className="bookshelf">
      <img src="/bookshelf.png" alt="Bookshelf" onClick={handleBookshelfClick} />
    </div>
  );
}

export default Bookshelf;
