import { point } from 'leaflet';
import React, {useState,useEffect} from 'react';
import L from 'leaflet'
import {  MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import marker from '../../assets/icon-fire.png'
import api from '../../services/api'

import {Header} from './styles';

const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [24,25],     
});

interface MapProps {
    properties : {
        latitude: number,
        longitude: number,
        municipio: string,
        satelite: string
    }
  
}


const Dashboard: React.FC= () => {

   const [points, setPoint] = useState<MapProps[]>([]);

   useEffect(() => {
       
      api.get(`api/focos?pais_id=33`,{
        params: {/* whatever data you want to send */ },
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials':'true',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
            }

      }
      ).then(response => {
        setPoint(response.data);
      },)
   }, [])

    return (
        <>
        <Header>
            <h1>Focos de queimada em tempo real - Dados INPE</h1>
        </Header>
        <MapContainer center={[-13.702797, -69.6865109]} zoom={6}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {points.map(point =>(
                 
                 <Marker icon={myIcon} position={[ point.properties.latitude, point.properties.longitude]}>
                 <Popup>
                    <p><strong>Nome do Satélite: </strong>  {point.properties.satelite}</p>
                    <p><strong>Nome do Município : </strong>  {point.properties.municipio}</p>
                 </Popup>
                 </Marker>

            ))}
           
        </MapContainer>
        
        </>
    )
}

export default Dashboard;