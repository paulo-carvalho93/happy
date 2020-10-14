import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

// Controlar a posição de clique do ícone através do iconAnchor

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  // Tamanho do ícone
  iconSize: [58, 68],
  // Direção de onde é o local onde o ícone aponta
  // No meio do eixo x (58/2) e no ponto mais baixo do y
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
})

export default mapIcon;