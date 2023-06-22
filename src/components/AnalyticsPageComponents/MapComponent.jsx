import React from "react";
import mapSvgUrl from "../../assets/world.svg";

function MapComponent() {
  return (
    <div>
      <img
        src={mapSvgUrl}
        alt="Map"
        style={{ width: "100%", height: "279px" }}
        className="map"
      />
    </div>
  );
}

export default MapComponent;
