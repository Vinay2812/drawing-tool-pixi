import React, { useEffect } from 'react';
import FigmaRenderer from './components/FigmaRenderer';
import sample from './utils/sample';

const App = () => {
    // Assume figmaJson is the JSON data from Figma
    const figmaJson = sample;
    const [loading , setLoading] = React.useState(true);

    useEffect(() => {
        // Load Epilogue font
        const epilogueFont = new FontFace('Epilogue', 'url(https://fonts.gstatic.com/s/epilogue/v17/O4ZMFGj5hxF0EhjimngomvnCCtqb30OXMDPSC5_U.woff2)', {
            style: 'normal',
            weight: '400'
        });

        // Load the font
        epilogueFont.load().then(loadedFont => {
            document.fonts.add(loadedFont);
            console.log("Epilogue font loaded successfully");
            setLoading(false);
        }).catch(error => {
            console.log("Failed to load Epilogue font: " + error);
            setLoading(false);
        });

    }, [figmaJson]);
  
    return (
      <div style={{ width: '100vw', height: '100vh', display:'grid', placeItems:'center' }}>
        {loading ? "Loading ..." : (<FigmaRenderer figmaJson={figmaJson} />)}
      </div>
    );
  };

export default App;
