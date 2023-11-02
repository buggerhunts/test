import React from 'react';
import './App.css'; // You can add a CSS file for your overall styling

// Import your custom components
import Birds from './Birds';
import Bookshelf from './Bookshelf';
import Dog from './Dog';
import Jane from './Jane';
import Poster from './Poster';
import Roadmap from './Roadmap';
import Room from './Room';
import Teaser from './Teaser';
import Window from './Window';

function App() {
  return (
      <div className="illustration-container">
        {/* Place your components here */}
        <Birds />
        <Bookshelf />
        <Dog />
        <Jane />
        <Poster />
        <Roadmap />
        <Room />
        <Teaser />
        <Window />
      </div>
  );
}

export default App;
