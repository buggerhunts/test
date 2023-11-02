import React, { useState } from 'react';
import './Jane.css';
function Jane() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="jane">
      <img src="/jane.png" alt="Jane" onClick={togglePopup} />

      {showPopup && (
        <div className="popup">
          <p>Jane's Information</p>
          {/* Add Jane's details here */}
        </div>
      )}
    </div>
  );
}

export default Jane;
