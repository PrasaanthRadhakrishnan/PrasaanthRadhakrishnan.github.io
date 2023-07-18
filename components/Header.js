import React, { useState, useEffect } from "react";
import './Header.css'

function Header() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelectorAll(".nav__link");

    const handleNavToggle = () => {
      document.body.classList.toggle("nav-open");
    };

    const handleNavLinkClick = () => {
      document.body.classList.remove("nav-open");
    };

    navToggle.addEventListener("click", handleNavToggle);

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navToggle.removeEventListener("click", handleNavToggle);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, []);

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  return (
    <header>
      <button
        className="nav-toggle"
        onClick={handleOverlayClick}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
        {/* {showOverlay && (
          <div className="overlay" onClick={handleOverlayClick}>
            <div className="overlay-content">
              {<h3>Welcome!</h3>}
              <p>
                To access different sections of the website, please use the
                navigation button.
              </p>
              <button className="overlay-btn" onClick={handleOverlayClick}>
                Get Started
              </button>
            </div>
          </div>
        )} */}
      </button>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li className="nav__item">
            <a
              href="media/Resume.pdf"
              className="nav__link"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
