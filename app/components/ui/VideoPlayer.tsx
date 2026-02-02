'use client';

import { useState, useRef, useEffect } from 'react';
import { PlayIcon } from '../icons';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

/**
 * Optimized video player with lazy loading and poster image
 * Shows poster image until user clicks to play
 */
const VideoPlayer = ({
  src,
  poster,
  title = 'Video',
  className = '',
  autoPlay = false,
  muted = true,
  loop = true,
  controls = true,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isLoaded, setIsLoaded] = useState(autoPlay);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, show play button
        setIsPlaying(false);
      });
    }
  }, [autoPlay]);

  const handlePlay = () => {
    setIsLoaded(true);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Get video MIME type from extension
  const getMimeType = (src: string): string => {
    const ext = src.split('.').pop()?.toLowerCase();
    const mimeTypes: Record<string, string> = {
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'ogg': 'video/ogg',
      'mov': 'video/quicktime',
      'm4v': 'video/mp4',
    };
    return mimeTypes[ext || ''] || 'video/mp4';
  };

  return (
    <div className={`relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden ${className}`}>
      {!isLoaded && poster ? (
        // Poster image with play button
        <button
          onClick={handlePlay}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors shadow-lg">
              <PlayIcon size={32} className="text-gray-900 ml-1" />
            </div>
          </div>
          
          {/* Title overlay */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium text-sm md:text-base">{title}</p>
            </div>
          )}
        </button>
      ) : (
        // Video player
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          poster={poster}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          onClick={!controls ? handleVideoClick : undefined}
        >
          <source src={src} type={getMimeType(src)} />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;

// Hero video component for background videos
export const HeroVideo = ({
  src,
  fallbackImage,
  className = '',
}: {
  src: string;
  fallbackImage?: string;
  className?: string;
}) => {
  const [videoError, setVideoError] = useState(false);

  // Get video MIME type from extension
  const getMimeType = (src: string): string => {
    const ext = src.split('.').pop()?.toLowerCase();
    const mimeTypes: Record<string, string> = {
      'mp4': 'video/mp4',
      'webm': 'video/webm',
      'ogg': 'video/ogg',
      'mov': 'video/quicktime',
      'm4v': 'video/mp4',
    };
    return mimeTypes[ext || ''] || 'video/mp4';
  };

  if (videoError && fallbackImage) {
    return (
      <img
        src={fallbackImage}
        alt="Hero background"
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`w-full h-full object-cover ${className}`}
      onError={() => setVideoError(true)}
    >
      <source src={src} type={getMimeType(src)} />
    </video>
  );
};
