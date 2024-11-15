import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      titleKey: "services.items.ios.title",
      descriptionKey: "services.items.ios.description",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
    },
    {
      titleKey: "services.items.android.title",
      descriptionKey: "services.items.android.description",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80"
    },
    {
      titleKey: "services.items.enterprise.title",
      descriptionKey: "services.items.enterprise.description",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{t(service.titleKey)}</h3>
                <p className="text-gray-300">{t(service.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;