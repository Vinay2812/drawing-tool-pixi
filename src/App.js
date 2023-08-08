import React from 'react';
import FigmaRenderer from './components/FigmaRenderer';
import sample from './utils/sample';

const App = () => {
    // Assume figmaJson is the JSON data from Figma
    const figmaJson = sample;
  
    return (
      <div style={{ width: '100vw', height: '100vh', display:'grid', placeItems:'center' }}>
        <FigmaRenderer figmaJson={figmaJson} />
      </div>
    );
  };

export default App;
