// SVG Icon Components - Replace emojis with professional icons
// Using Heroicons-inspired design for consistency

import { ReactNode } from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// Dance/Movement Icon
export const DanceIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v4" />
    <path d="M9 14l3-4 3 4" />
    <path d="M7 20l2-6" />
    <path d="M17 20l-2-6" />
    <path d="M9 10l-3 4" />
    <path d="M15 10l3 4" />
  </svg>
);

// Fitness Icon
export const FitnessIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
    <path d="M14 9h4" />
    <path d="M14 9l-3 12" />
    <path d="M6 21l3-12" />
    <path d="M18 9v12" />
    <path d="M6 9v12" />
    <rect x="2" y="9" width="4" height="3" rx="1" />
    <rect x="18" y="9" width="4" height="3" rx="1" />
  </svg>
);

// Spirituality/Meditation Icon
export const SpiritualityIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="6" r="2" />
    <path d="M12 8v2" />
    <path d="M8 14c0-2 1.5-4 4-4s4 2 4 4" />
    <path d="M6 18c0-1 .5-2 2-3" />
    <path d="M18 18c0-1-.5-2-2-3" />
    <path d="M12 14v6" />
    <circle cx="12" cy="12" r="10" strokeDasharray="4 4" opacity="0.3" />
  </svg>
);

// Theatre/Acting Icon
export const TheatreIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="9" r="7" />
    <circle cx="15" cy="15" r="7" />
    <path d="M6 6.5c.5 1 2 2 3 2s2.5-1 3-2" />
    <circle cx="7" cy="7" r="0.5" fill="currentColor" />
    <circle cx="11" cy="7" r="0.5" fill="currentColor" />
    <path d="M15 18.5c-.5-1-2-2-3-2s-2.5 1-3 2" />
    <circle cx="13" cy="17" r="0.5" fill="currentColor" />
    <circle cx="17" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

// Community Icon
export const CommunityIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="3" />
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="12" r="2.5" />
    <path d="M12 11v5" />
    <path d="M8 14.5l4 1.5" />
    <path d="M16 14.5l-4 1.5" />
    <path d="M6 14.5v3.5c0 1 1.5 2 6 2s6-1 6-2v-3.5" />
  </svg>
);

// Products/Shopping Icon
export const ProductsIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// Calendar/Events Icon
export const EventsIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="12" cy="16" r="2" />
  </svg>
);

// Check/Verified Icon
export const CheckIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Arrow Right Icon
export const ArrowRightIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Play Video Icon
export const PlayIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Lotus/Wellness Icon
export const LotusIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4-4-8-6-8-10 0-2.5 1.5-5 4-5 1.5 0 3 1 4 2.5" />
    <path d="M12 21c4-4 8-6 8-10 0-2.5-1.5-5-4-5-1.5 0-3 1-4 2.5" />
    <path d="M12 3v5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Quote Icon
export const QuoteIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
  </svg>
);

// Email Icon
export const EmailIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Phone Icon
export const PhoneIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Location Icon
export const LocationIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Social Media Icons
export const InstagramIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const YouTubeIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const FacebookIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Star Icon
export const StarIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

// User/Profile Icon
export const UserIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Heart Icon
export const HeartIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Menu Icon
export const MenuIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Close Icon
export const CloseIcon = ({ className = '', size = 24 }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Wrapper for icon with background
interface IconBadgeProps {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const IconBadge = ({ icon, variant = 'primary', size = 'md' }: IconBadgeProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg',
    secondary: 'bg-gray-100 text-gray-700',
    outline: 'border-2 border-teal-500 text-teal-600 bg-white',
  };

  return (
    <div className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-2xl flex items-center justify-center`}>
      {icon}
    </div>
  );
};

export default {
  DanceIcon,
  FitnessIcon,
  SpiritualityIcon,
  TheatreIcon,
  CommunityIcon,
  ProductsIcon,
  EventsIcon,
  CheckIcon,
  ArrowRightIcon,
  PlayIcon,
  LotusIcon,
  QuoteIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  StarIcon,
  UserIcon,
  HeartIcon,
  MenuIcon,
  CloseIcon,
  IconBadge,
};
