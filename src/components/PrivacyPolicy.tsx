import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-20 min-h-screen bg-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Lock className="w-12 h-12 text-blue-500 mr-4" />
            <h1 className="text-4xl font-bold">{t('privacy.title')}</h1>
          </div>

          <div className="space-y-12">
            {Object.keys(t('privacy.sections', { returnObjects: true })).map((sectionKey) => (
              <section key={sectionKey} className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                  {t(`privacy.sections.${sectionKey}.title`)}
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {t(`privacy.sections.${sectionKey}.content`)}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;