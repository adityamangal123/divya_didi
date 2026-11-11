import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { MediaItem } from '../../data/media';

interface ImageLightboxProps {
  images: MediaItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
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
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/95 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Lightbox Container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between text-white pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-brand-electric bg-navy-900 px-2.5 py-1 rounded-md border border-navy-800">
              {current.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden bg-black/60 border border-navy-850 shadow-2xl">
          <img
            src={current.src}
            alt={current.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 hover:bg-brand-blue text-white backdrop-blur-sm transition-all shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-navy-900/80 hover:bg-brand-blue text-white backdrop-blur-sm transition-all shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Caption */}
        <div className="w-full pt-4 text-center sm:text-left text-white">
          <h4 className="text-base sm:text-lg font-bold text-white">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-3xl leading-relaxed">
            {current.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

