import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useHistory } from "react-router-dom";

import mapMarkerImg from '../../images/map-marker.svg';

import '../OrphanageMap/orphanages-map.css';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    });
    
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  const { goBack } = useHistory();

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Choose an orphanage on the map</h2>
          <p>Many children are waiting for your visit :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>SP</span>
          <br />
          <button className="button-back" type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>

      <Map 
        center={[position.latitude, position.longitude]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => {
          return (
            <Marker
            key={orphanage.id}
            icon={mapIcon} 
            position={[orphanage.latitude , orphanage.longitude]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF"/>
              </Link>
            </Popup>
          </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;