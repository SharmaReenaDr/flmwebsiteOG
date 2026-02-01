"use client";

import { useState } from "react";

type GalleryGridProps = {
  category: string;
  maxItems?: number;
};

export default function GalleryGrid({ category, maxItems = 6 }: GalleryGridProps) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload
    setTimeout(() => {
      setUploading(false);
      alert("Upload feature coming soon! This is a placeholder for admin uploads.");
    }, 500);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">Gallery</h3>
        <button
          onClick={handleUpload}
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
        >
          + Add Media
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(maxItems)].map((_, i) => (
          <div
            key={i}
            className="group relative aspect-square bg-gradient-to-br from-white/5 to-white/10 border-2 border-dashed border-white/20 rounded-xl hover:border-cyan-500/50 transition-all cursor-pointer overflow-hidden"
          >
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/40 group-hover:text-white/60 transition-all">
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm font-semibold">Photo / Video</p>
              <p className="text-xs mt-1">Click to upload</p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold text-sm">
                Upload
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-white/40 text-xs mt-4 text-center">
        {category} gallery • Photos and videos showcasing our {category.toLowerCase()} programs
      </p>
    </div>
  );
}
