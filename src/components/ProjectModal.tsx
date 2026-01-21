import { X } from 'lucide-react';
import { Project } from '../types/portfolio';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-slate-800/80 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
        >
          <X size={20} />
        </button>

        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-4">
              {t(project.category)}
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">{t(project.title)}</h2>
            <p className="text-gray-300 leading-relaxed">{t(project.description)}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-3">{t('projectModal.techStack')}</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800 border border-cyan-500/20 rounded-lg text-cyan-400 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-center flex items-center justify-center"
            >
              {t('projectModal.viewLive')}
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 px-6 py-3 bg-slate-800 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-slate-700 transition-all duration-300 text-center flex items-center justify-center"
            >
              {t('projectModal.viewCode')}
            </a>
          )}
        </div>

        </div>
      </div>

      <style>{`
        @keyframes modal-in {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-in {
          animation: modal-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
