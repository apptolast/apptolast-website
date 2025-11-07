import { Github, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'wouter';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-4/12 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">AppToLast</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.slogan')}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/apptolast" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://x.com/apptolast" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-400 hover:text-white">{t('services.items.mobileApps.title')}</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">{t('services.items.aiApis.title')}</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">{t('services.items.enterpriseSolutions.title')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-gray-400 hover:text-white">{t('nav.features')}</a></li>
                  <li><a href="#services" className="text-gray-400 hover:text-white">{t('nav.services')}</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white">{t('nav.contact')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.legal')}</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white">{t('footer.privacy')}</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white">{t('footer.terms')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AppToLast. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;