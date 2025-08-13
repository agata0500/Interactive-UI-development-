import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";

export default function Introduction() {
  const navigate = useNavigate();

  
  useEffect(() => {
    const done = localStorage.getItem("onboarded") === "1";
    if (done) navigate("/home", { replace: true });
  }, [navigate]);

  const handleNext = () => {
    localStorage.setItem("onboarded", "1"); 
    navigate("/home", { replace: true });
  };

  return (
    <div className="intro">
      <div className="intro-content">
        <h1>Welcome to Dreamscape 2.0</h1>
        <p>
          Discover IKEA’s tips, calming playlists and products to create your
          perfect sleep space.
        </p>
        <button className="next-btn" onClick={handleNext}>
          Next →
        </button>
      </div>
    </div>
  );
}
