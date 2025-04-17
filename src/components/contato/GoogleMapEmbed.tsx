import React from 'react';

interface MapEmbedProps {
  address?: string;
  width?: string;
  height?: string;
  zoom?: number;
}

const GoogleMapEmbed: React.FC<MapEmbedProps> = ({
  address = 'Av. Aprígio Veloso 882, Campina Grande, PB, Brasil',
  width = '100%',
  height = '560px',
  zoom = 14,
}) => {
  const query = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <iframe
      title="Localização no Google Maps"
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    />
  );
};

export default GoogleMapEmbed;