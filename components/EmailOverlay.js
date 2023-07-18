import React, { useEffect, useState } from "react";
import './EmailOverlay.css'

function EmailOverlay() {
  const [showEmailOverlay, setShowEmailOverlay] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    setShowEmailOverlay(false);
    event.preventDefault();
    // Send the email ID to the server or perform any desired action
    console.log("Submitting email:", email);
    // You can reset the email field if needed
    setEmail("");
  };

  const handleEmailOverlayClick = () => {
    setShowEmailOverlay(false);
    const elementToFocus = document.getElementById("email-input");
    elementToFocus.style.filter = "";
  };

  const handleEmailSectionScroll = () => {
    const emailSection = document.getElementById("footer");
    if (emailSection) {
      const rect = emailSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
        setShowEmailOverlay(true);
      } else {
        setShowEmailOverlay(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleEmailSectionScroll);

    return () => {
      window.removeEventListener("scroll", handleEmailSectionScroll);
    };
  }, []);

  return (
    <>
      {showEmailOverlay && (
        <div className="email-overlay" onClick={handleEmailOverlayClick}>
          <div className="email-overlay-content">
            <h3>Want to learn more?</h3>
            <p>Please enter your email address to receive updates and contact me!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EmailOverlay;