"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type SearchResult = {
  title: string;
  description: string;
  href: string;
  category: string;
};

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SEARCH_INDEX: SearchResult[] = [
  // Pages
  { title: "Home", description: "Main homepage with ring hub", href: "/", category: "Pages" },
  { title: "Dance Programs", description: "Explore our dance styles", href: "/dance", category: "Pages" },
  { title: "Fitness Programs", description: "Strength and wellness", href: "/fitness", category: "Pages" },
  { title: "Spirituality", description: "Mind and soul practices", href: "/spirituality", category: "Pages" },
  { title: "Performing Arts", description: "Stage and expression", href: "/performing-arts", category: "Pages" },
  { title: "Pricing & Payment", description: "View our pricing options", href: "/pricing", category: "Pages" },
  { title: "Trial Class", description: "Book your trial class", href: "/trial-class", category: "Pages" },
  { title: "Contact Us", description: "Get in touch with us", href: "/contact", category: "Pages" },
  
  // Dance Styles
  { title: "Bhangra", description: "Energetic Punjabi dance", href: "/dance#bhangra", category: "Dance" },
  { title: "Bollywood", description: "Popular Indian film dance", href: "/dance#bollywood", category: "Dance" },
  { title: "Folk Dance", description: "Traditional cultural dance", href: "/dance#folk", category: "Dance" },
  { title: "Hip Hop", description: "Urban street dance", href: "/dance#hiphop", category: "Dance" },
  { title: "Contemporary", description: "Modern expressive dance", href: "/dance#contemporary", category: "Dance" },
  
  // Fitness
  { title: "Dance Fitness", description: "Fun cardio workout", href: "/fitness#dance-fitness", category: "Fitness" },
  { title: "Strength & Mobility", description: "Build strength and flexibility", href: "/fitness#strength", category: "Fitness" },
  { title: "Wellness Fusion", description: "Holistic wellness approach", href: "/fitness#wellness", category: "Fitness" },
  
  // Spirituality
  { title: "Bhajans", description: "Devotional music practice", href: "/spirituality#bhajans", category: "Spirituality" },
  { title: "Meditation", description: "Mindfulness and peace", href: "/spirituality#meditation", category: "Spirituality" },
  { title: "Breathwork", description: "Pranayama techniques", href: "/spirituality#breathwork", category: "Spirituality" },
  
  // Performing Arts
  { title: "Mime", description: "Silent expression art", href: "/performing-arts#mime", category: "Performing Arts" },
  { title: "Mono Acting", description: "Solo theatrical performance", href: "/performing-arts#mono-acting", category: "Performing Arts" },
  { title: "Musical Dance", description: "Dance with music", href: "/performing-arts#musical-dance", category: "Performing Arts" },
  { title: "Musical Acting", description: "Theatrical musical performance", href: "/performing-arts#musical-acting", category: "Performing Arts" },
  
  // Actions
  { title: "Register Now", description: "Start your journey", href: "/register", category: "Actions" },
  { title: "Book Trial Class", description: "Try a class for free", href: "/trial-class", category: "Actions" },
  { title: "View Pricing", description: "See pricing options", href: "/pricing", category: "Actions" },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Get personalization data from localStorage
  const getClickData = () => {
    if (typeof window === "undefined") return {};
    const stored = localStorage.getItem("flm_clicks");
    return stored ? JSON.parse(stored) : {};
  };

  const recordClick = (href: string) => {
    const clicks = getClickData();
    clicks[href] = (clicks[href] || 0) + 1;
    localStorage.setItem("flm_clicks", JSON.stringify(clicks));
    
    // Log for analytics
    const searches = JSON.parse(localStorage.getItem("flm_searches") || "[]");
    searches.push({ query, result: href, timestamp: Date.now() });
    localStorage.setItem("flm_searches", JSON.stringify(searches.slice(-100))); // Keep last 100
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      // Show popular/recent items when no query
      const clicks = getClickData();
      const sortedResults = [...SEARCH_INDEX]
        .sort((a, b) => (clicks[b.href] || 0) - (clicks[a.href] || 0))
        .slice(0, 6);
      setResults(sortedResults);
      return;
    }

    // Search and rank results
    const lowerQuery = query.toLowerCase();
    const clicks = getClickData();
    const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
    
    const matchedResults = SEARCH_INDEX
      .map(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descMatch = item.description.toLowerCase().includes(lowerQuery);
        const categoryMatch = item.category.toLowerCase().includes(lowerQuery);
        
        if (!titleMatch && !descMatch && !categoryMatch) return null;
        
        let score = 0;
        if (titleMatch) score += 10;
        if (descMatch) score += 5;
        if (categoryMatch) score += 3;
        
        // Boost by click history
        score += (clicks[item.href] || 0) * 2;
        
        // Context-aware boost
        if (currentPath.includes("dance") && item.category === "Dance") score += 5;
        if (currentPath.includes("fitness") && item.category === "Fitness") score += 5;
        if (currentPath.includes("spirituality") && item.category === "Spirituality") score += 5;
        if (currentPath.includes("performing") && item.category === "Performing Arts") score += 5;
        
        return { ...item, score };
      })
      .filter(Boolean)
      .sort((a, b) => (b?.score || 0) - (a?.score || 0))
      .slice(0, 6) as SearchResult[];

    setResults(matchedResults);
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      handleSelect(results[selectedIndex]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  const handleSelect = (result: SearchResult) => {
    recordClick(result.href);
    router.push(result.href);
    onClose();
    setQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Search Modal */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search FLM (dance, fitness, spirituality, pricing...)"
            className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-white/40"
          />
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-sm px-3 py-1 bg-white/5 rounded-lg"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(result)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    idx === selectedIndex
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30"
                      : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">
                      {result.category === "Dance" && "💃"}
                      {result.category === "Fitness" && "💪"}
                      {result.category === "Spirituality" && "🧘"}
                      {result.category === "Performing Arts" && "🎭"}
                      {result.category === "Pages" && "📄"}
                      {result.category === "Actions" && "✨"}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-white font-semibold">
                          {highlightMatch(result.title, query)}
                        </h4>
                        <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-white/60 text-sm mt-1">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center text-white/40">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>No results found for &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>

        {/* Footer Hints */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-white/10 text-xs text-white/40">
          <div className="flex gap-4">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-cyan-500/30 text-cyan-300 rounded px-1">
        {part}
      </mark>
    ) : (
      part
    )
  );
}
