import { Smartphone, Shield, Zap, Code2, BrainCircuit } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-400" />,
      titleKey: "features.items.multiplatform.title",
      descriptionKey: "features.items.multiplatform.description"
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-purple-400" />,
      titleKey: "features.items.automation.title",
      descriptionKey: "features.items.automation.description"
    },
    {
      icon: <Code2 className="h-8 w-8 text-emerald-400" />,
      titleKey: "features.items.cleanCode.title",
      descriptionKey: "features.items.cleanCode.description"
    },
    {
      icon: <Shield className="h-8 w-8 text-rose-400" />,
      titleKey: "features.items.security.title",
      descriptionKey: "features.items.security.description"
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-400" />,
      titleKey: "features.items.speed.title",
      descriptionKey: "features.items.speed.description"
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {t('features.title')}
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-700/30 p-8 rounded-2xl border border-slate-600/50 hover:border-slate-500 hover:bg-slate-700/50 transition-all duration-300 group"
            >
              <div className="mb-6 p-3 bg-slate-800 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {t(feature.titleKey)}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {t(feature.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;