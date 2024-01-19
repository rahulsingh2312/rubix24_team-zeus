import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import flag from "/campusexpertr.png";
import pin from "/you.png";
import axios from 'axios';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  const greenIcon = new Icon({
    iconUrl: pin,
    iconSize: [40, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  return position === null ? null : (
    <Marker position={position} icon={greenIcon}>
      <Popup>You :3</Popup>
    </Marker>
  );
}

function MapComponent() {
  const [selectedCategory, setSelectedCategory] = useState('catering.restaurant');
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  const greenIcon = new Icon({
    iconUrl: flag,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const position = [40.7128, -74.0060];

  const categoryList = [
    'accommodation',
    
    'activity',

    'commercial',
    'commercial.supermarket',
    'commercial.marketplace',
    'commercial.shopping_mall',
    
    // ... More categories ...
    'catering',
    'catering.restaurant',
   
  
    'education',
    'education.school',
    'education.driving_school',
    'education.music_school',
    'education.language_school',
    'education.library',
    'education.college',
    'education.university',
    'childcare',
    // 'childcare.kindergarten',
    'entertainment',
    // 'entertainment.culture',
    // 'entertainment.culture.theatre',
    // ... More entertainment categories ...
    'healthcare',
    // 'healthcare.clinic_or_praxis',
    // 'healthcare.clinic_or_praxis.allergology',
    // ... More healthcare categories ...
    'healthcare.dentist',
    'healthcare.dentist.orthodontics',
    'healthcare.hospital',
    'healthcare.pharmacy',
    'heritage',
    'heritage.unesco',
    'leisure',
   
    // ... More leisure categories ...
    
    'natural',
    'natural.forest',
    'natural.water',
    // ... More natural categories ...
    'natural.sand',
    'natural.protected_area',
    'national_park',
    'office',
    'office.government',
    'office.company',
    // ... More office categories ...
    'parking',
    'parking.cars',
    'parking.cars.surface',
    'parking.cars.multistorey',
    // ... More parking categories ...
    'pet',
    // 'pet.shop',
    // 'pet.veterinary',
    'rental',

    // ... More rental categories ...
    'service',
    // 'service.financial',
    // 'service.cleaning',
    // 'service.travel_agency',
    // ... More service categories ...
    'tourism',
    // 'tourism.information',
    // 'tourism.information.office',
    // 'tourism.information.map',
    // ... More tourism categories ...
    'tourism.attraction',
    'tourism.attraction.artwork',
    'tourism.attraction.viewpoint',
    // ... More attraction categories ...
    'tourism.sights',
    'tourism.sights.place_of_worship',
    'tourism.sights.place_of_worship.church',
    // ... More sights categories ...
    'tourism.sights.memorial',
    'tourism.sights.memorial.aircraft',
    // ... More memorial categories ...
    'religion',
    'religion.place_of_worship',
    'religion.place_of_worship.buddhism',
    // ... More place_of_worship categories ...
    'camping',
    
    'amenity',
    'amenity.toilet',
    
    'beach',
    'beach.beach_resort',
    'adult',
    
    // 'airport',
    // 'airport.international',
    // 'building',
    // 'building.residential',
    // 'building.commercial',
    // ... More building categories ...
    // 'ski',
    // 'ski.lift',
    // 'ski.lift.cable_car',
    // ... More ski categories ...
    'sport',
    
    'public_transport',
    'public_transport.train',
    // 'public_transport.light_rail',
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.geoapify.com/v2/places?categories=${selectedCategory}&filter=rect:72.76605303479398,19.884858570650053,74.0826649447833,18.709926810313405&limit=20&apiKey=f2e26ce4ac8e4e0e99078e3d3623ca9e`
        );

        // Extract features array from the response data
        const placesArray = response.data.features;

        setPlaces(placesArray);
        console.log(response);
      } catch (error) {
        console.error('Error fetching places:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="map-container" style={{ position: 'relative', zIndex: 0 }}>
      <div>
        <label htmlFor="category">Select Category: </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {categoryList.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <MapContainer center={position} zoom={13} style={{ width: '100%', height: '80vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {places.map((place) => (
          <Marker
            key={place.properties.id}
            position={[place.geometry.coordinates[1], place.geometry.coordinates[0]]}
            icon={greenIcon}
          >
            <Popup>{place.properties.name}</Popup>
          </Marker>
        ))}

        {/* LocationMarker Component */}
        <LocationMarker />
        {/* LocationMarker Component End */}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
