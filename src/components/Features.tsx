import React from 'react';
import { Smartphone, Shield, Zap, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      titleKey: "features.items.native.title",
      descriptionKey: "features.items.native.description"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      titleKey: "features.items.security.title",
      descriptionKey: "features.items.security.description"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      titleKey: "features.items.speed.title",
      descriptionKey: "features.items.speed.description"
    },
    {
      icon: <Code2 className="h-8 w-8 text-blue-500" />,
      titleKey: "features.items.code.title",
      descriptionKey: "features.items.code.description"
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-gray-400">{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;