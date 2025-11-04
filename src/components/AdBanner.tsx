import { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsense error", e);
    }
  }, []);

  return (
    <>
      <div className="md:block fixed top-0 left-0 h-screen w-1/6 z-50">
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: '100%' }}
             data-ad-client="ca-pub-6022710211253419"
             data-ad-slot="9368929024"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
      <div className="md:block fixed top-0 right-0 h-screen w-1/6 z-50">
        <ins className="adsbygoogle"
             style={{ display: 'block', width: '100%', height: '100%' }}
             data-ad-client="ca-pub-6022710211253419"
             data-ad-slot="1958284813"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
      </div>
    </>
  );
};

export default AdBanner;