import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const current = i18n.language?.startsWith('es') ? 'ES' : 'EN';

  const change = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm"
        aria-expanded={open}
      >
        <Globe size={16} />
        <span className="font-medium">{current}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 overflow-hidden">
          <button
            onClick={() => change('es')}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3"
          >
            <span className="text-xl">🇪🇸</span>
            <span>Español</span>
          </button>
          <button
            onClick={() => change('en')}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-3"
          >
            <span className="text-xl">🇺🇸</span>
            <span>English</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
