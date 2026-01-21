import { useState, useEffect } from 'react';
import { projects } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import { Code2, Terminal, Cpu } from 'lucide-react';

const Hero = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [currentCodeLine, setCurrentCodeLine] = useState(0);

  //Portatil imagen
  const codeSnippets = [
    "const developer = {",
    "  name: 'Doncan Alejandro Casquete ',",
    "  role: 'Junior Developer | QA Tester',",
    "  skills: ['React', 'Node.js', 'AWS'],",
    "  passion: 'Driven by continuous growth and learning',",
    "  availability: 'Open to opportunities'",
    "};",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCodeLine((prev) => (prev + 1) % codeSnippets.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Alejandro Casquete 
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4">Junior Developer | QA Tester </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Developing reliable software through code and quality testing
          </p>
        </div>

        <div
          className="relative w-full h-auto lg:h-[600px] desk-scene"
          style={{
            perspective: '1200px',
            perspectiveOrigin: 'center'
          }}
        >
          <div className="relative h-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 lg:px-8">
            <div
              className="w-full lg:w-[45%] relative screen laptop-screen transition-all duration-600"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-25deg) rotateX(8deg) translateZ(40px)'
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden"
                style={{
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255,255,255,0.04)'
                }}
              >
                <div className="bg-slate-800/80 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <Code2 size={14} />
                    <span className="text-xs font-mono">editor.tsx</span>
                  </div>
                </div>

                <div className="p-4 sm:p-6 min-h-80 sm:min-h-96 flex flex-col justify-between">
                  <div className="font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
                    {codeSnippets.map((line, index) => (
                      <div
                        key={index}
                        className={`transition-all duration-500 ${
                          index === currentCodeLine
                            ? 'text-cyan-400 translate-x-2'
                            : 'text-gray-500'
                        }`}
                      >
                        <span className="text-gray-700 mr-3">{String(index + 1).padStart(2, '0')}</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 sm:mt-6 space-y-3 pt-4 border-t border-cyan-500/20">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Terminal className="text-cyan-400 flex-shrink-0" size={16} />
                      <span className="text-gray-400">Programming Languages:</span>
                    </div>
                    <div className="text-cyan-400 font-mono text-xs sm:text-sm">
                      Python, JavaScript, Java
                    </div>

                    <div className="flex items-center space-x-2 text-xs sm:text-sm mt-3">
                      <Cpu className="text-cyan-400 flex-shrink-0" size={16} />
                      <span className="text-gray-400">Technologies:</span>
                    </div>
                    <div className="text-cyan-400 font-mono text-xs sm:text-sm">
                      React, Node.js, SQL, AWS
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full lg:w-[55%] relative screen monitor-screen transition-all duration-600"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(15deg) rotateX(4deg) translateZ(80px)'
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl border border-cyan-500/30 overflow-hidden"
                style={{
                  boxShadow: '0 40px 80px rgba(0, 0, 0, 0.55), inset 0 0 0 1px rgba(255,255,255,0.04)'
                }}
              >
                <div className="bg-slate-800/80 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">projects</span>
                </div>

                <div className="p-4 sm:p-6 min-h-80 sm:min-h-96">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 h-full">
                    {projects.slice(0, 4).map((project, index) => (
                      <button
                        key={project.id}
                        onClick={() => setSelectedProject(project.id)}
                        className="group/card relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-800/50 hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 p-2 sm:p-3 flex flex-col project-card"
                        style={{
                          animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                          transformStyle: 'preserve-3d',
                          transform: 'rotateY(-10deg) rotateX(4deg)',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = 'rotateY(0deg) rotateX(0deg) translateZ(20px)';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.transform = 'rotateY(-10deg) rotateX(4deg)';
                        }}
                      >
                        <div className="aspect-video mb-2 rounded overflow-hidden bg-slate-900 flex-shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-end">
                          <h3 className="text-xs sm:text-sm font-semibold text-gray-200 mb-1 truncate">
                            {project.title}
                          </h3>
                          <p className="text-xs text-cyan-400">{project.category}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce inline-block"
          >
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll"></div>
            </div>
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={projects.find(p => p.id === selectedProject)!}
          onClose={() => setSelectedProject(null)}
        />
      )}

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

        @keyframes gradient {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(8px);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .desk-scene {
          perspective: 1200px;
          perspective-origin: center;
        }

        .screen {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .laptop-screen {
          transform: rotateY(-25deg) rotateX(8deg) translateZ(40px);
        }

        .monitor-screen {
          transform: rotateY(15deg) rotateX(4deg) translateZ(80px);
        }

        .project-card {
          transform-style: preserve-3d;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .project-card:hover {
          transform: rotateY(0deg) rotateX(0deg) translateZ(20px) !important;
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2) !important;
        }

        @media (max-width: 768px) {
          .screen {
            transform: none !important;
          }

          .project-card {
            transform: none !important;
          }

          .project-card:hover {
            transform: none !important;
          }

          .desk-scene {
            perspective: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
