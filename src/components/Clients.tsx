import { useTranslation } from 'react-i18next';

const Clients = () => {
  const { t } = useTranslation();

  const clients = [
    {
      titleKey: "clients.items.academia_alba.title",
      descriptionKey: "clients.items.academia_alba.description",
      image: "https://scontent.fbrs5-1.fna.fbcdn.net/v/t1.6435-1/204147201_264208628832707_7581721214844286923_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=44S2eRaC18oQ7kNvwHb89bd&_nc_oc=AdmKSPUK1IQzBuDCn0Ve_HwJ0zYneuogsWEVELdS2QVVltSV3iYh8RMhrmzS7N1QlanCBOMFd2Y2ihoukWPiPZ9f&_nc_zt=24&_nc_ht=scontent.fbrs5-1.fna&_nc_gid=cNNYka_HXg-vUj8yblBC5g&oh=00_AffCfjjyE4ZCLi3K9MMVaGujyhNrfXRX2OzCurZpnnN0hA&oe=692B61ED",
      link: "https://www.asociacionalba.org.uk/"
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
            <a 
              key={index} 
              href={client.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl max-w-sm"
            >
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
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;