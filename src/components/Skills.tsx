import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-slate-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div
                  className="
                    w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                    rounded-2xl
                    bg-gradient-to-br from-slate-800 to-slate-900
                    shadow-[0_10px_0_#020617,0_25px_40px_rgba(0,0,0,0.6)]
                    flex items-center justify-center
                    transform transition-all duration-300
                    hover:-translate-y-2 hover:shadow-[0_6px_0_#020617,0_18px_35px_rgba(0,0,0,0.7)]
                    active:translate-y-1 active:shadow-[0_3px_0_#020617,0_10px_20px_rgba(0,0,0,0.6)]
                    cursor-pointer
                  "
                >
                  {Icon && (
                    <Icon
                      size={50}
                      style={{
                        color: skill.color,
                        fill: skill.color,
                        stroke: skill.color,
                      }}
                      className="transition-transform duration-300"
                    />
                  )}
                </div>
                <p className="mt-2 text-center text-xs text-gray-400 font-medium">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
