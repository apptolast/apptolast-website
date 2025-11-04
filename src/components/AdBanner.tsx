import { useEffect } from 'react';

const AdBanner = ({ slotId }) => {
  useEffect(() => {
    try {
      // Cada vez que el componente se monta, intenta cargar el anuncio
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('Error al cargar el anuncio:', err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6022710211253419"
      data-ad-slot={slotId}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdBanner;