

import React, { useRef, useEffect } from "react"

import mapboxgl from "mapbox-gl"

import "mapbox-gl/dist/mapbox-gl.css"


mapboxgl.accessToken = 'pk.eyJ1IjoieWFoaWFhYmJhcyIsImEiOiJjbDQ1eHg2eWcwMzdwM2tzMGxlcWVsczV0In0.PDZQgqqQCgIQWuEywmDCjw'

// @ts-ignore
    // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
    mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;// Load worker code separately with worker-loader

const MapView = (props) => {

    //const AddressLink = props
   
  const mapContainer = useRef()



  useEffect(() => {
    
  

   

    const map = new mapboxgl.Map({

      container: mapContainer.current,

      style: "mapbox://styles/mapbox/streets-v11",

      center: [31.700026,30.003982],
     
      zoom: 12,

    })
     new mapboxgl.Marker(<div style={{
        'background-size': 'cover',
        'width': '50px',
        'height': '50px',
        'border-radius': '50%',
        'cursor': 'pointer'}}></div>).setLngLat([31.700026,30.003982]).addTo(map);


    // map.on('click', (e) => {
    //   console.log(e.lngLat);
    //   //homeSelect.setLngLat(e.lngLat).addTo(map);
    //   localStorage.setItem('lng',e.lngLat.lng)
    //   localStorage.setItem('lat',e.lngLat.lat)

    // })
  
  

    return () => map.remove()

  }, [])
  
  


  return <div ref={mapContainer} style={{ width: "500px", height: "500px" }} />

}



export default MapView;