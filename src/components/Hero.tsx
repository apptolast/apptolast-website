import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <span className="w-full h-full absolute opacity-75 bg-slate-900"></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-12">
              {t('hero.title').split(' ').map((word, index, array) => 
                index === array.length - 1 ? (
                  <span key={index} className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {' ' + word}
                  </span>
                ) : (
                  <span key={index}>{(index ? ' ' : '') + word}</span>
                )
              )}
            </h1>
            <div className="flex gap-4 justify-center">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-flex items-center">
                {t('hero.startProject')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="bg-transparent hover:bg-white/10 border border-white text-white font-bold py-3 px-6 rounded-lg">
                {t('hero.learnMore')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;