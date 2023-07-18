import React, { useState } from 'react';
import OverlayComponent from './OverlayComponent';

const ParentOverlayComponent = () => {
  const [overlays, setOverlays] = useState([true, false, false, false, false]);
  const [currentOverlay, setCurrentOverlay] = useState(0);

  const closeOverlay = () => {
    //const updatedOverlays = overlays.map((_, index) => index === currentOverlay ? false : overlays[index]);
    setCurrentOverlay(false);
  };

  const openNextOverlay = () => {
    const nextOverlay = currentOverlay + 1;
    const updatedOverlays = overlays.map((_, index) => index === nextOverlay ? true : false);
    setOverlays(updatedOverlays);
    setCurrentOverlay(nextOverlay);
  };

  return (
    <div>
      {overlays.map((isOpen, index) => (
        <OverlayComponent
          key={index}
          isOpen={isOpen}
          onClose={closeOverlay}
          onNext={openNextOverlay}
          overlayIndex={index + 1}
          className={`overlay-${index + 1} ${currentOverlay === index ? 'current-overlay' : 'hidden-overlay'}`}
        />
      ))}
    </div>
  );
};

export default ParentOverlayComponent;
