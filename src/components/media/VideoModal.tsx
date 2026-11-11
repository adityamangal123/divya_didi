import React, { useEffect } from 'react';
import { X, Play, ShieldAlert } from 'lucide-react';
import { VideoItem } from '../../data/media';

interface VideoModalProps {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-navy-900 border border-navy-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-navy-800 flex items-center justify-between bg-navy-950">
          <div>
            <span className="text-[10px] font-mono font-bold text-brand-electric uppercase tracking-widest block">
              {video.badge || "Axel Media"} • {video.duration}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
              {video.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-900 text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            src={video.src}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support HTML5 video playback.
          </video>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-navy-950/80 border-t border-navy-850 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="leading-relaxed text-slate-400">
            {video.description}
          </p>
          <span className="text-brand-electric font-mono text-[11px] shrink-0">
            Axel Networks • Official Media Stream
          </span>
        </div>
      </div>
    </div>
  );
};

