import React, { useState, useEffect } from "react";
import "../styles/section/hero.css";
import image1 from "../assets/image2.png";
import { FaGithub, FaLinkedin, FaShieldAlt, FaFacebook } from "react-icons/fa";

import TrailheadLogo from "../assets/trailhead.svg";
const TypingSwap = ({ texts, typingSpeed = 100, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), pause); // Wait before deleting
        }
      }, typingSpeed);
    } else {
      // Deleting
      timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length - 1));
        if (displayedText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length); // Next phrase
        }
      }, typingSpeed / 2);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex, texts, typingSpeed, pause]);

  return <h1>{displayedText}</h1>;
};

export default function Hero() {
  return (
    <div className="hero-wrapper">
      {/* Navigation */}
      <nav className="nav">
        <div className="logo"></div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <div className="btn-talk">
              {" "}
              <a href="#">Let's Talk</a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="bg-circle"></div>
        <div className="bg-circle2"></div>

        {/* Left Content */}
        <div className="hero-content">
          <h2>Hi I am Cath Cosette Q. Alsado</h2>
          <div className="typingSwap">
            <TypingSwap
              texts={["UI/UX Designer", "Tech Solutions Builder"]}
              typingSpeed={100}
              pause={1500}
            />
          </div>

          <p>
            Driven by a passion for creating intuitive and meaningful digital
            solutions—from smart robot cars and AI-powered classifiers to
            expense managers, CRM systems, and fashion-brand platforms. I craft
            experiences that blend clean design, usability, and real-world
            impact.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Contact Us</button>
            <button className="btn-secondary">Portfolio</button>
          </div>
        </div>

        {/* Right Content */}
        <div className="hero-image">
          <div className="image-container">
            <img src={image1} alt="Designer" className="main-image" />

            <div className="floating-card shield-card">
              <div className="shield-icon">
                <FaShieldAlt />
              </div>
            </div>

            <div className="floating-card social-card">
              <a
                href="https://www.facebook.com/share/16pm1f9HCd/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/fvwvbhavuqlvq30vt0"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon Trailhead"
              >
                <img src={TrailheadLogo} alt="Trailhead" />
              </a>
              <a
                href="https://www.linkedin.com/in/cosette-alsado-817b35251"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon Linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Cosette12"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon Github"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
