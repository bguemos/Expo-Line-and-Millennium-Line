import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({iconUrl: "/images/marker-icon.png"})




const multiPolyline:[number, number][][] = [
    [
        [49.18254419110539, -122.84353441686109],
        [49.18970690960877, -122.84795290336722],
        [49.19912060410034, -122.85063168802458],
        [49.203694509720215, -122.87367323220205],
        [49.2040702183317, -122.90650325918863],
        [49.20162020654083, -122.91257535918889],
        [49.20013181139319, -122.94906396103765],
        [49.212458545110195, -122.95919868987262],
        [49.220214223118525, -122.98843058802325],
        [49.225986200193574, -123.00379816482383],
        [49.229870670832966, -123.01262961685822],
        [49.23852027620162, -123.0317363456933],
        [49.24437737962222, -123.04536330336401],
        [49.24838322522753, -123.05588511685707],
        [49.262791008581985, -123.06919358802071],
        [49.273276972252425, -123.10036073219779],
        [49.27978445071081, -123.10969027267771],
        [49.28340384932419, -123.11613350336167],
        [49.285602137605764, -123.1201439187036],
        [49.28614093081256, -123.11155864569047]

    ],
    [
        [49.265988888863006, -123.07897627452716],
        [49.262756000881694, -123.06923650336289],
        [49.25907101915974, -123.04539073219867],
        [49.260990907452005, -123.03298776288293],
        [49.26505798851473, -123.013710376376],
        [49.266485685678795, -123.00162886103377],
        [49.26485729774575, -122.98216870336275],
        [49.25936101821352, -122.96395698802101],
        [49.254775038574394, -122.93914781685687],
        [49.25358022847838, -122.91808125918578],
        [49.24858382836917, -122.8969627321993],
        [49.233422002836306, -122.88281948802243],
        [49.2248882584241, -122.88944978987178],
        [49.20497197609424, -122.90616291870836],
        [49.20155711458598, -122.91262900336658],
        [49.20011779054376, -122.94902104569547],
        [49.21249358847898, -122.959166503366],
        [49.2202632761304, -122.9884949610365],
        [49.22598192710263, -123.00385127452964],
        [49.22954516530272, -123.01248686103601],
        [49.23852027620162, -123.03172561685777],



    ]
    
    
]
const redOptions = { color: 'blue'}
const orangeOptions = { color: 'orange'}
const fillBlueOptions = { color: 'blue '}

const center: [number, number] =  [49.18254419110539, -122.84353441686109];

const Map = () => {
    return(
    <MapContainer 
     style={{height: "100vh"}}
     center={[49.24966,-123.00934]} zoom={14} scrollWheelZoom={false}
    
    
    >
        <TileLayer
        attribution='&copy; <a href="https://github.com/bguemos/Expo-Line-and-Millennium-Line.git">By Bri-lynn Guemos</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <Marker position={[ 49.18254419110539, -122.84353441686109]} icon={icon}>
      <Popup>
        King George
      </Popup>
     </Marker>
     <Marker position={[ 49.18970690960877, -122.84795290336722]} icon={icon}>
      <Popup>
        Surrey Central
      </Popup>
     </Marker>
     <Marker position={[ 49.19912060410034, -122.85063168802458]} icon={icon}>
      <Popup>
        Gateway
      </Popup>
     </Marker>
     <Marker position={[ 49.203694509720215, -122.87367323220205]} icon={icon}>
      <Popup>
        Scott Road
      </Popup>
     </Marker>
     <Marker position={[ 49.2040702183317, -122.90650325918863]} icon={icon}>
      <Popup>
        Columbia
      </Popup>
     </Marker>
     <Marker position={[ 49.20162020654083, -122.91257535918889]} icon={icon}>
      <Popup>
        New Westminster
      </Popup>
     </Marker>
     <Marker position={[ 49.20013181139319, -122.94906396103765]} icon={icon}>
      <Popup>
        22nd Street 
      </Popup>
     </Marker>
     <Marker position={[ 49.212458545110195, -122.95919868987262]} icon={icon}>
      <Popup>
       Edmonds
      </Popup>
     </Marker>
     <Marker position={[49.220214223118525, -122.98843058802325]} icon={icon}>
      <Popup>
       Royal Oak
      </Popup>
     </Marker>
     <Marker position={[49.225986200193574, -123.00379816482383]} icon={icon}>
      <Popup>
       Metrotown
      </Popup>
     </Marker>
     <Marker position={[49.229870670832966, -123.01262961685822]} icon={icon}>
      <Popup>
        Patterson
      </Popup>
     </Marker>
     <Marker position={[49.23852027620162, -123.0317363456933]} icon={icon}>
      <Popup>
        Joyce-Collingwood
      </Popup>
     </Marker>
     <Marker position={[49.24437737962222, -123.04536330336401]} icon={icon}>
      <Popup>
        29th Ave Station
      </Popup>
     </Marker>
     <Marker position={[49.24838322522753, -123.05588511685707]} icon={icon}>
      <Popup>
      Nanaimo Station
      </Popup>
     </Marker>
     <Marker position={[49.262791008581985, -123.06919358802071]} icon={icon}>
      <Popup>
      Commercial-Broadway
      </Popup>
     </Marker>
     <Marker position={[49.273276972252425, -123.10036073219779]} icon={icon}>
      <Popup>
      Main Street-Science World
      </Popup>
     </Marker>
     <Marker position={[49.27978445071081, -123.10969027267771]} icon={icon}>
      <Popup>
      Stadium-Chinatown
      </Popup>
     </Marker>
     <Marker position={[49.28340384932419, -123.11613350336167]} icon={icon}>
      <Popup>
      Granville
      </Popup>
     </Marker>
     <Marker position={[49.285602137605764, -123.1201439187036]} icon={icon}>
      <Popup>
      Burrard
      </Popup>
     </Marker>
     <Marker position={[49.28614093081256, -123.11155864569047]} icon={icon}>
      <Popup>
      Waterfront
      </Popup>
     </Marker>
     <Marker position={[49.265988888863006, -123.07897627452716]} icon={icon}>
      <Popup>
      VCC-Clark
      </Popup>
     </Marker>
     <Marker position={[49.25907101915974, -123.04539073219867]} icon={icon}>
      <Popup>
       Renfrew
      </Popup>
     </Marker>
     <Marker position={[49.260990907452005, -123.03298776288293]} icon={icon}>
      <Popup>
       Rupert
      </Popup>
     </Marker>
     <Marker position={[49.26505798851473, -123.013710376376]} icon={icon}>
      <Popup>
      Gilmore
      </Popup>
     </Marker>
     <Marker position={[49.266485685678795, -123.00162886103377]} icon={icon}>
      <Popup>
      Brentwood Town Centre
      </Popup>
     </Marker>
     <Marker position={[49.26485729774575, -122.98216870336275]} icon={icon}>
      <Popup>
      Holdom
      </Popup>
     </Marker>
     <Marker position={[49.25936101821352, -122.96395698802101]} icon={icon}>
      <Popup>
      Sperling-Burnaby Lake
      </Popup>
     </Marker>
     <Marker position={[49.254775038574394, -122.93914781685687]} icon={icon}>
      <Popup>
      Lake City Way
      </Popup>
     </Marker>
     <Marker position={[49.25358022847838, -122.91808125918578]} icon={icon}>
      <Popup>
      Production Way-University
      </Popup>
     </Marker>
     
     
      
      <Polyline pathOptions={redOptions} positions={multiPolyline}/>

      <Circle center={center} pathOptions={fillBlueOptions} radius={200}/>
    </MapContainer>
    )
}

export default Map;