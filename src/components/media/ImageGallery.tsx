import React, { useState } from 'react';
import { Eye, Layers, Filter } from 'lucide-react';
import { MediaItem, MEDIA_CONFIG } from '../../data/media';
import { ImageLightbox } from './ImageLightbox';

interface ImageGalleryProps {
  title?: string;
  subtitle?: string;
  items?: MediaItem[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  title = "Enterprise Deployments & Infrastructure Gallery",
  subtitle = "High-definition photographic documentation of real enterprise network backbones, server rooms, and campus installations.",
  items = MEDIA_CONFIG.gallery,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(items.map(i => i.category)))];

  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(i => i.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Visual Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 mt-3 tracking-tight">
              {title}
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-surface-alt text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-navy-950 border border-slate-200 hover:border-brand-blue/50 hover:shadow-card-hover transition-all duration-300 cursor-pointer h-72 sm:h-80"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-mono font-bold text-white bg-navy-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-navy-800">
                  {item.category}
                </span>
              </div>

              {/* Top Right Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Caption Container */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-base font-bold text-white group-hover:text-brand-electric transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageLightbox
          images={filteredItems}
          currentIndex={lightboxIndex}
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)}
        />
      )}
    </section>
  );
};

