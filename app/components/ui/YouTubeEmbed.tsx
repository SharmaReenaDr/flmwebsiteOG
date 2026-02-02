'use client';

import { useState } from 'react';
import { PlayIcon } from '../icons';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
  thumbnail?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
}

/**
 * Lazy-loaded YouTube embed component
 * Displays a thumbnail with play button, loads iframe on click for better performance
 */
const YouTubeEmbed = ({
  videoId,
  title = 'YouTube Video',
  className = '',
  thumbnail,
  aspectRatio = '16:9',
}: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  };

  // Generate YouTube thumbnail URL if not provided
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative w-full ${aspectRatioClasses[aspectRatio]} bg-gray-900 rounded-xl overflow-hidden ${className}`}>
      {!isLoaded ? (
        // Thumbnail with play button
        <button
          onClick={handleLoad}
          className="w-full h-full relative group cursor-pointer"
          aria-label={`Play ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to lower quality thumbnail if maxresdefault doesn't exist
              (e.target as HTMLImageElement).src = fallbackThumbnail;
            }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
              <PlayIcon size={32} className="text-white ml-1" />
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
        // YouTube iframe
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YouTubeEmbed;

// Example video gallery component
export const YouTubeGallery = ({ 
  videos 
}: { 
  videos: { id: string; title: string }[] 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <YouTubeEmbed
          key={video.id}
          videoId={video.id}
          title={video.title}
        />
      ))}
    </div>
  );
};
