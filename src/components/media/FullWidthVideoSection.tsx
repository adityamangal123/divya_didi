import React, { useState } from 'react';
import { Play, Volume2, VolumeX, ShieldCheck, ArrowRight } from 'lucide-react';
import { MEDIA_CONFIG } from '../../data/media';
import { VideoModal } from './VideoModal';

interface FullWidthVideoSectionProps {
  onContactClick?: () => void;
}

export const FullWidthVideoSection: React.FC<FullWidthVideoSectionProps> = ({ onContactClick }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const featuredVideo = MEDIA_CONFIG.videos[0];

  return (
    <section className="relative py-28 bg-navy-950 text-white overflow-hidden border-y border-navy-850">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          src={MEDIA_CONFIG.hero.videoSrc}
          poster={MEDIA_CONFIG.hero.posterImage}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-25 filter contrast-125"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/40 to-navy-950" />
        <div className="absolute inset-0 tech-grid-pattern-dark opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/20 border border-brand-electric/40 text-xs font-mono font-bold text-brand-electric">
            <span className="w-2 h-2 rounded-full bg-brand-electric animate-pulse"></span>
            <span>Cinematic Infrastructure Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
            The Pulse of Enterprise Connectivity &amp; Threat Defense.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Behind every uninterrupted transaction, seamless Zoom conference, and zero-day threat defense lies an engineered network backbone. Explore how Axel Networks integrates Tier-1 switching, high-density Wi-Fi 6, and Sophos synchronized firewalls.
          </p>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="px-6 py-3.5 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-lg hover:shadow-glow transition-all flex items-center gap-2 group text-sm"
            >
              <div className="w-6 h-6 rounded-full bg-white text-navy-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
              </div>
              <span>Watch Full Cinematic Presentation (01:45)</span>
            </button>

            {onContactClick && (
              <button
                onClick={onContactClick}
                className="px-6 py-3.5 bg-navy-900 hover:bg-navy-850 text-white font-semibold rounded-xl border border-navy-700 hover:border-brand-electric/40 transition-all text-sm flex items-center gap-2"
              >
                <span>Request On-Site Network Audit</span>
                <ArrowRight className="w-4 h-4 text-brand-electric" />
              </button>
            )}

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-3 bg-navy-900/80 hover:bg-navy-800 text-slate-300 hover:text-white rounded-xl border border-navy-800 transition-colors ml-auto hidden sm:flex items-center gap-2 text-xs"
              title={isMuted ? "Unmute background ambient audio" : "Mute audio"}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-electric" />}
              <span>{isMuted ? "Audio Muted" : "Audio On"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={featuredVideo}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

