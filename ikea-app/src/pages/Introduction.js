import React from "react";
import { useNavigate } from "react-router-dom";
import "./Introduction.css";

function Introduction() {
const navigate = useNavigate();

return (
<div className="intro">
<div className="intro-content">
<h1>Welcome to Dreamscape 2.0</h1>
<p>
Discover IKEA’s best tips, calming playlists, and products to help you
create a cozy bedroom and sleep better every night.
</p>
<button className="next-btn" onClick={() => navigate("/home")}>
Next →
</button>
</div>
</div>
);
}

export default Introduction; 