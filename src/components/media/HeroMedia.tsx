import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  PhoneCall, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Activity,
  Layers,
  ChevronDown
} from 'lucide-react';
import { COMPANY } from '../../data/company';
import { MEDIA_CONFIG } from '../../data/media';
import { VideoModal } from './VideoModal';

interface HeroMediaProps {
  onExploreSolutions: () => void;
  onContactTeam: () => void;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({
  onExploreSolutions,
  onContactTeam,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden bg-navy-950 text-white">
      {/* Cinematic Video Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={MEDIA_CONFIG.hero.videoSrc}
          poster={MEDIA_CONFIG.hero.posterImage}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="w-full h-full object-cover opacity-35 filter contrast-125 scale-105 transition-transform duration-1000"
        />

        {/* Multi-layered Cinematic Gradients for Flawless Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/80" />
        <div className="absolute inset-0 tech-grid-pattern-dark opacity-40 pointer-events-none" />

        {/* Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-electric/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & High-Impact CTAs */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            {/* Enterprise Credentials Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy-900/90 border border-brand-electric/40 text-xs font-semibold text-brand-electric backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-brand-electric animate-ping" />
              <span>Enterprise IT Infrastructure, Managed Wi-Fi &amp; Cybersecurity • Since 2011</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Building Smarter, Secure &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-white to-blue-200">Connected Businesses.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Axel Networks designs, deploys, and manages high-throughput wireless infrastructure (WaaS), Next-Gen synchronized UTM firewalls, structured data center cabling, and Matrix biometric workforce security for growing enterprises.
            </p>

            {/* Checkpoints */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-200 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>Authorized Sophos &amp; Matrix</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0" />
                <span>Guaranteed SLA Helpdesk</span>
              </div>
            </div>

            {/* Magnetic CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreSolutions}
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-brand-blueDark text-white font-bold rounded-xl shadow-lg hover:shadow-glow transition-all duration-200 flex items-center justify-center gap-2 group text-base"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onContactTeam}
                className="w-full sm:w-auto px-8 py-4 bg-navy-900/90 hover:bg-navy-850 text-white font-bold rounded-xl border border-slate-700 hover:border-brand-electric/60 transition-all duration-200 flex items-center justify-center gap-2 text-base backdrop-blur-md"
              >
                <PhoneCall className="w-5 h-5 text-brand-electric" />
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* Immediate Direct Phone Assistance */}
            <p className="text-xs text-slate-400">
              Need immediate engineering consultation? Call our direct desk:{' '}
              <a href={`tel:${COMPANY.phone.primary}`} className="text-brand-electric hover:underline font-bold text-sm">
                {COMPANY.phone.displayPrimary}
              </a>
            </p>
          </div>

          {/* Right Column: Video Playback Trigger & Tech Card */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end space-y-4">
            {/* Interactive Video Playback Box */}
            <div 
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full max-w-sm bg-navy-900/80 backdrop-blur-xl border border-navy-800 rounded-2xl p-5 shadow-2xl hover:border-brand-electric/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-navy-800">
                <img
                  src={MEDIA_CONFIG.hero.posterImage}
                  alt="Axel Networks Infrastructure"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-navy-950/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-navy-950/90 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-navy-800">
                  PLAY REEL (01:45)
                </div>
              </div>

              <div className="space-y-1 text-left">
                <div className="text-[11px] font-mono text-brand-electric uppercase tracking-wider">
                  Corporate Video Presentation
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-brand-electric transition-colors">
                  Take an Inside Tour of Axel Networks
                </h3>
                <p className="text-xs text-slate-400">
                  Watch how our certified engineers deploy and safeguard enterprise networks since 2011.
                </p>
              </div>
            </div>

            {/* Video Controls Pill */}
            <div className="flex items-center gap-2 bg-navy-900/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-navy-800 text-xs text-slate-400">
              <button
                onClick={togglePlay}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title={isPlaying ? "Pause background video" : "Play background video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={toggleMute}
                className="hover:text-white flex items-center gap-1 transition-colors"
                title={isMuted ? "Unmute background audio" : "Mute background audio"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-brand-electric" />}
                <span>{isMuted ? "Muted" : "Sound"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <VideoModal
        video={MEDIA_CONFIG.videos[0]}
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
    </section>
  );
};

