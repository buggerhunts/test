import React, { useState } from 'react';
import './Roadmap.css';

function Roadmap() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="roadmap">
      <img src="/roadmap.png" alt="Roadmap" onClick={togglePopup} />

      {showPopup && (
        <div className="popup">
          <p>Roadmap Information</p>
          {/* Add roadmap details here */}
        </div>
      )}
    </div>
  );
}

export default Roadmap;
