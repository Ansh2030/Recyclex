import React from "react";
import { Marker } from "@react-google-maps/api";
import "./Map_marker.css"; // Import the CSS file

const MarkerF = ({ position, title, label }) => {
  return (
    <Marker position={position} title={title} label={label}>
      {/* Additional content for the marker, if needed */}
      <div className="marker">{label}</div>
    </Marker>
  );
};

export default MarkerF;