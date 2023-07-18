import React, { useEffect, useState } from "react";
import './WorkOverlay.css'

function WorkOverlays() {
  const [showWorkOverlay, setShowWorkOverlay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const workSection = document.getElementById("work");
      const elementToFocus = document.getElementById("ui-developer");

      if (workSection) {
        const rect = workSection.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          setShowWorkOverlay(true);
          elementToFocus.focus();
          elementToFocus.style.filter = "brightness(1.5)";
        } else {
          setShowWorkOverlay(false);
          elementToFocus.blur();
          elementToFocus.style.filter = "";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleWorkOverlayClick = () => {
    setShowWorkOverlay(false);
    const elementToFocus = document.getElementById("ui-developer");
    document.body.style.filter = "";
    elementToFocus.style.filter = "";
  };

  return (
    <>
      {showWorkOverlay && (
        <div
          id="workOverlay"
          className="work-overlay"
          onClick={handleWorkOverlayClick}
        >
          <div className="work-overlay-content">
            <p>Click the above box to learn more!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkOverlays;
