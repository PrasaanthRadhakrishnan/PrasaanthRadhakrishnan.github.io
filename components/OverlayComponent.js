import React from "react";
import "./OverlayComponent.css";

const OverlayComponent = ({
  isOpen,
  onClose,
  onNext,
  overlayIndex,
  className,
}) => {
    
  let title = "";
  let content = "";

  if (overlayIndex === 1) {
    title = "Welcome to the Antaris Staging Application";
    content = "Would you like a guided tour on the features available, and how to configure your first mission?";
  } else if (overlayIndex === 2) {
    title = "Account Management";
    content = "Click here to manage your Account Details";
  } else if (overlayIndex === 3) {
    title = "The Design Section";
    content = "Here, you can add and set the basic features of your satellite and mission parameters";
  } else if (overlayIndex === 4) {
    title = "Create Mission";
    content = "After filling in the mission details, click the 'Create Mission' button to go to the Simulate section.";
  }
  else {
    title = `Overlay Component ${overlayIndex}`;
    content = "This is the default overlay content.";
  }

  return (
    <div className={`overlay ${className} ${isOpen ? "open" : ""}`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{content}</p>
        <div className="button-container">
          <button onClick={onNext}>Next</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OverlayComponent;