import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'wouter';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">AppToLast</span>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a href="#mission-vision" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.mission')}
            </a>
            <a href="#services" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.services')}
            </a>
            <a href="#clients" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.clients')}
            </a>
            <a href="#team" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.team')}
            </a>
            <a href="#contact" className="hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              {t('nav.getStarted')}
            </a>
          </div>
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#mission-vision"
              onClick={closeMenu}
              className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.mission')}
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.services')}
            </a>
            <a
              href="#team"
              onClick={closeMenu}
              className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.team')}
            </a>
            <a
              href="#clients"
              onClick={closeMenu}
              className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.clients')}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-blue-600 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;