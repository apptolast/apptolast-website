import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();

  const clients = [
    {
      titleKey: "clients.items.academia_alba.title",
      descriptionKey: "clients.items.academia_alba.description",
      image: "src/imgs/alba-academy-logo.jpg"
    },
  ];

  return (
    <div id="clients" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('clients.title')}</h2>
          <p className="text-lg text-gray-400">{t('clients.subtitle')}</p>
        </div>
        <div className="grid md:grid-cols-1 justify-items-center gap-8">
          {clients.map((client, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl max-w-sm">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={client.image}
                  alt={t(client.titleKey)}
                  className="object-cover w-full h-64 transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold mb-2">{t(client.titleKey)}</h3>
                <p className="text-gray-300">{t(client.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
