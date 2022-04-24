import React from "react";
import "./Image.css";

function Image({ image }) {
	return <img className="image" src={image} alt="image" />;
}

export default Image;
