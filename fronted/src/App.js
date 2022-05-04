import * as React from 'react';

import "./App.css";
import ReactMapGL from "react-map-gl";
import { useState } from "react";


function App() {
  const[viewport,setViewport] = useState({
    width:"100%",
    height:"100%",
    latitude: 37.5,
    longitude:-120.5,
    zoom:8
  });

  return (
    <div className='App'>
      <ReactMapGL
      {...viewport}
      mapboxAccessToken = {process.env.REACT_APP_MAPBOX}
      onViewportChange = {nextViewport => setViewport(nextViewport)}
      />

    </div>
  );
}

export default App;
