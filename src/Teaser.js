import React, { useState } from 'react';
import './Teaser.css';

function Teaser() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="teaser">
      <img src="/teaser.png" alt="Teaser" onClick={togglePopup} />

      {showPopup && (
        <div className="popup">
          <p>Teaser Information</p>
          {/* Add details here */}
        </div>
      )}
    </div>
  );
}

export default Teaser;
