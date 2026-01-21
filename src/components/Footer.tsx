import { ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="relative bg-black border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ShieldCheck className="text-Cyan-400 fill-white-400" size={16} />
            <span>{t('footer.by')}</span>
          </div>

          <div className="text-gray-400 text-sm">
            <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          </div>

          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <button className="hover:text-cyan-400 transition-colors">{t('footer.privacy')}</button>
            <button className="hover:text-cyan-400 transition-colors">{t('footer.terms')}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
