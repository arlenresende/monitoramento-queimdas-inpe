import React from 'react'
import GoogleMapReact from 'google-map-react'

const Map = ({center,zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDEwCCnYT-5oOyUClhHX_nnQIVEgOIDdpA' }}
                defaultCenter={center}
                defaultZoom={zoom}
               
            >
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProsp = {
    center:{
        lat: -13.7047759,
        lgn: -69.6605997
    },
    zoom : 6
}
export default Map
