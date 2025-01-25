/* eslint-disable react/prop-types */
import { useState } from "react";
import "./PersonCard.css"; // Import external CSS

const PersonCard = ({ person }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  const handleMouseEnter = () => {
    setIsVisible(true);
  }
  const handleMouseLeave = () => {
    setIsVisible(false);
  }

  return (
    <div className="card-container relative h-36 w-48 md:w-auto md:h-60 xl:h-[350px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`card-inner ${isVisible ? "flipped" : ""}`}
        onClick={handleToggle}
      >
        {/* Front Side */}
        <div className="card-front">
          <img
            onClick={handleToggle}
            src={person.img}
            alt="Chairperson"
            className="card-image rounded-md"
          />
        </div>

        {/* Back Side */}
        <div className="card-back">
          <div className="back-content">
            <p className="description">
              {person.description}
            </p>
            <div className="hidden social-links space-x-8">
              <a href={person.x} target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href={person.instagram} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={person.facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={person.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;