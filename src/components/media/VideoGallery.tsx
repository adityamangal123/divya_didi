import React, { useState } from 'react';
import { Play, Clock, Video as VideoIcon } from 'lucide-react';
import { VideoItem, MEDIA_CONFIG } from '../../data/media';
import { VideoModal } from './VideoModal';

interface VideoGalleryProps {
  title?: string;
  subtitle?: string;
  videos?: VideoItem[];
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  title = "Technology In Action & Media Showcase",
  subtitle = "Watch our engineering overviews, deployment case studies, and partner architecture walkthroughs.",
  videos = MEDIA_CONFIG.videos,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 tech-grid-pattern-dark pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono text-brand-electric uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
            Cinematic Demonstrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-300 mt-3 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-navy-900 border border-navy-800 rounded-2xl overflow-hidden hover:border-brand-electric/50 hover:shadow-glow transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedVideo(vid)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden bg-navy-950">
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-brand-blue/90 group-hover:bg-brand-blue group-hover:scale-110 text-white flex items-center justify-center shadow-lg transition-all duration-300">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 bg-navy-950/80 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded border border-navy-800 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-brand-electric" />
                  <span>{vid.duration}</span>
                </div>

                {/* Category Badge */}
                {vid.badge && (
                  <div className="absolute top-3 left-3 bg-brand-blue/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded shadow">
                    {vid.badge}
                  </div>
                )}
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-brand-electric transition-colors leading-snug">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {vid.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-brand-electric flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Watch Demonstration</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
};

