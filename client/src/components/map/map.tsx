// components/map/map.tsx
import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CityOffer, OffersList } from '../../types/offer';

type MapProps = {
  city: CityOffer;
  offers: OffersList[];
  selectedOffer?: OffersList | null;
  className?: string;
};


const defaultCustomIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ city, offers, selectedOffer, className = '' }: MapProps): React.JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<leaflet.Map | null>(null);
  const markers = useRef<leaflet.Marker[]>([]);


  useEffect(() => {
    if (mapRef.current && !map.current) {
      map.current = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(map.current);
    }


    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [city]);

  useEffect(() => {
    if (map.current) {

      markers.current.forEach((marker) => marker.remove());
      markers.current = [];

      offers.forEach((offer) => {
        const marker = leaflet
          .marker(
            [offer.location.latitude, offer.location.longitude],
            {
              icon: selectedOffer && offer.id === selectedOffer.id 
                ? currentCustomIcon 
                : defaultCustomIcon,
            }
          )
          .addTo(map.current!);

        markers.current.push(marker);
      });


      map.current.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [offers, selectedOffer, city]);

  return (
    <section className={`${className} map`}>
      <div
        style={{ height: '100%' }}
        ref={mapRef}
      />
    </section>
  );
}

export default Map;