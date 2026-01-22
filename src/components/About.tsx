import { useEffect, useRef, useState } from 'react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code2, labelKey: 'about.projectsCompleted', value: '4+' },
    { icon: Users, labelKey: 'about.happyClients', value: '2+' },
    { icon: Rocket, labelKey: 'about.yearsExperience', value: '1+' },
    { icon: Award, labelKey: 'about.certifications', value: '7+' }
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {t('about.paragraph1')}
              </p>
              <p>
                {t('about.paragraph2')}
              </p>
              <p>
                {t('about.paragraph3')}
              </p>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/pdfs/CV-Alejandro_Casquete2026.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                {t('about.downloadCv')}
              </a>
              <a href="#contact" 
                className="px-6 py-3 bg-slate-800 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-slate-700 transition-all duration-300"
              >
                {t('about.contactMe')}
              </a>
            </div>
          </div>

          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            
          > 
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.labelKey}
                    className="relative group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="mb-4">
                        <Icon className="text-cyan-400" size={32} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">
                        {t(stat.labelKey)}
                      </div>
                    </div>
                  </div>
                ); 
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
