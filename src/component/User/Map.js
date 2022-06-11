// import  { useState, useEffect } from "react";
// import ReactMapGL, { Marker, Popup } from "react-map-gl";
// //import mapboxgl from 'mapbox-gl';
// import mapbox from 'mapbox-gl/dist/mapbox-gl.css';
//    // @ts-ignore
//     // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
//     mapbox.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;


   



// const Map = () => {
//     const [viewport, setViewport] = useState({
//         latitude: 45.4211,
//         longitude: -75.6903,
        
//         zoom: 10
//       });


    
//     return ( <div style={{'width':'500px','height':'500px' }}>
     
//         <ReactMapGL
//                   mapboxAccessToken={'pk.eyJ1IjoieWFoaWFhYmJhcyIsImEiOiJjbDQ1eHg2eWcwMzdwM2tzMGxlcWVsczV0In0.PDZQgqqQCgIQWuEywmDCjw'}
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//     //   mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//          </div>
//         );
// }
import React, { useRef, useEffect } from "react"

import mapboxgl from "mapbox-gl"

// import the mapbox styles

// alternatively can use a link tag in the head of public/index.html

// see https://docs.mapbox.com/mapbox-gl-js/api/

import "mapbox-gl/dist/mapbox-gl.css"


// Grab the access token from your Mapbox account

// I typically like to store sensitive things like this

// in a .env file

mapboxgl.accessToken = 'pk.eyJ1IjoieWFoaWFhYmJhcyIsImEiOiJjbDQ1eHg2eWcwMzdwM2tzMGxlcWVsczV0In0.PDZQgqqQCgIQWuEywmDCjw'


const Map = () => {

  const mapContainer = useRef()



  useEffect(() => {
    
  

    const homeSelect = new mapboxgl.Marker(<div style={{
      'background-size': 'cover',
      'width': '50px',
      'height': '50px',
      'border-radius': '50%',
      'cursor': 'pointer'}}></div>)
    const map = new mapboxgl.Map({

      container: mapContainer.current,

      style: "mapbox://styles/mapbox/streets-v11",

      center: [31.700026,30.003982],
     
      zoom: 12,

    })
    map.on('click', (e) => {
      console.log(e.lngLat);
      homeSelect.setLngLat(e.lngLat).addTo(map);
      localStorage.setItem('lng',e.lngLat.lng)
      localStorage.setItem('lat',e.lngLat.lat)

    })
  
  

    return () => map.remove()

  }, [])
  
  


  return <div ref={mapContainer} style={{ width: "500px", height: "500px" }} />

}



export default Map;
