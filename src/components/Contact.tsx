import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY 
      );

      alert(t('contact.form.success'));
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert(t('contact.form.error'));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-gray-400">{t('contact.subtitle')}</p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  disabled={sending}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  disabled={sending}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder={t('contact.form.messagePlaceholder')}
                required
                disabled={sending}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center disabled:opacity-50"
                disabled={sending}
              >
                {sending ? t('contact.form.sending') : t('contact.form.send')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;