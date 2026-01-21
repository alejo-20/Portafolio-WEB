import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import { useTranslation } from 'react-i18next';

const Skills = () => {
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

  const categories = Array.from(new Set(skills.map(s => s.category))).sort();
  const skillsByCategory = categories.map(cat => ({
    name: cat,
    skills: skills.filter(s => s.category === cat)
  }));

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsByCategory.map((category, catIndex) => (
            <div
              key={category.name}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden p-6 h-full"
                style={{
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255,255,255,0.04)'
                }}
              >
                <h3 className="text-xl font-bold text-white mb-6 pb-4 border-b border-cyan-500/20">
                  {category.name}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 p-3 rounded-lg bg-slate-800/40 hover:bg-slate-700/60 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 transform transition-all ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${catIndex * 100 + skillIndex * 50}ms` }}
                      >
                        {IconComponent && (
                          <div className="flex-shrink-0">
                            <IconComponent
                              size={24}
                              style={{ color: skill.color || '#06B6D4' }}
                            />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-white truncate">
                            {skill.name}
                          </div>
                          <div className="mt-1 flex gap-1 items-center">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  i < Math.round(skill.level / 20)
                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 w-3'
                                    : 'bg-gray-700 w-2'
                                }`}
                              ></div>
                            ))}
                          </div>
                        </div>
                        <div className="text-xs text-cyan-400 font-medium flex-shrink-0">
                          {skill.level}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
