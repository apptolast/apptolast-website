import { useTranslation } from 'react-i18next';
import { GraduationCap, Smartphone, Brain, Building2, Code2 } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      titleKey: "services.items.educationalAutomation.title",
      descriptionKey: "services.items.educationalAutomation.description",
      icon: <GraduationCap className="h-12 w-12" />,
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      titleKey: "services.items.mobileApps.title",
      descriptionKey: "services.items.mobileApps.description",
      icon: <Smartphone className="h-12 w-12" />,
      gradient: "from-purple-500 to-pink-500",
      delay: "100"
    },
    {
      titleKey: "services.items.aiApis.title",
      descriptionKey: "services.items.aiApis.description",
      icon: <Brain className="h-12 w-12" />,
      gradient: "from-green-500 to-emerald-500",
      delay: "200"
    },
    {
      titleKey: "services.items.enterpriseSolutions.title",
      descriptionKey: "services.items.enterpriseSolutions.description",
      icon: <Building2 className="h-12 w-12" />,
      gradient: "from-orange-500 to-red-500",
      delay: "300"
    },
    {
      titleKey: "services.items.techFlexibility.title",
      descriptionKey: "services.items.techFlexibility.description",
      icon: <Code2 className="h-12 w-12" />,
      gradient: "from-indigo-500 to-blue-500",
      delay: "400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('services.title')}
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </div>
        
        {/* Grid adaptativo: 2 arriba, 3 abajo */}
        <div className="max-w-7xl mx-auto">
          {/* Primera fila - 2 columnas */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 2).map((service, index) => (
              <div
                key={index}
                className="service-card group"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white transform group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Segunda fila - 3 columnas */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(2).map((service, index) => (
              <div
                key={index + 2}
                className="service-card group"
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <div className={`relative mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white transform group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;