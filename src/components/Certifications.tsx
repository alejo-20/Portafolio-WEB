import { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/portfolio';
import { Award, Calendar, FileCheck } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section ref={sectionRef} id="certifications" className="relative py-20 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span> & Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl border border-cyan-500/20 p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <Award className="text-cyan-400" size={28} />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-cyan-400 mb-4">{cert.issuer}</p>

                {cert.credentialId && (
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-slate-800/50 rounded-lg px-3 py-2 border border-cyan-500/10">
                    <FileCheck size={16} className="text-cyan-400" />
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
            <Award className="text-cyan-400" size={32} />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">{certifications.length}+</div>
              <div className="text-sm text-gray-400">Professional Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
