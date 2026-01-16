import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import { BookOpen } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const categories = ['All', ...Array.from(new Set(skills.map(s => s.category)))];
  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

  const getBookColor = (index: number) => {
    const colors = [
      'from-cyan-600 to-cyan-700',
      'from-blue-600 to-blue-700',
      'from-slate-600 to-slate-700',
      'from-cyan-700 to-blue-800',
      'from-blue-500 to-cyan-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Library</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            My technical expertise organized like books in a digital library
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                    : 'bg-slate-800 border border-cyan-500/30 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-800/80 to-transparent rounded-b-2xl"></div>

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-8 md:p-12">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
              {filteredSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group relative transform transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`relative bg-gradient-to-b ${getBookColor(index)} rounded-t rounded-b-sm shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:-translate-y-2 h-32 md:h-40 flex flex-col justify-between p-3 md:p-4 border-l-2 border-r-2 border-white/10`}
                  >
                    <div className="flex justify-center mb-2">
                      <BookOpen className="text-white/80" size={20} />
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="text-white font-bold text-xs md:text-sm text-center leading-tight [writing-mode:vertical-rl] rotate-180">
                        {skill.name}
                      </div>
                    </div>

                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-cyan-500/30 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                    <div className="text-white text-xs font-semibold mb-1">{skill.name}</div>
                    <div className="text-cyan-400 text-xs">{skill.category}</div>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-1 rounded ${
                            i < skill.level / 20 ? 'bg-cyan-400' : 'bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-cyan-500/20 rounded-lg text-gray-400 text-sm">
              <BookOpen size={16} className="text-cyan-400" />
              <span>Hover over a book to see details</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
