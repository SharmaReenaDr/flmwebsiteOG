import Link from 'next/link';
import { InstagramIcon, YouTubeIcon, FacebookIcon, EmailIcon, LocationIcon } from '../icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src="/icons/FLM logo.png" alt="FLM" className="h-10 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">FITNESS LIFE MANTRA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform your body, mind, and soul through movement, spirituality, and community.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <LocationIcon size={16} />
              <span>Global • USA & India</span>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/dance-fitness" className="text-gray-400 hover:text-white transition">
                  Dance & Fitness
                </Link>
              </li>
              <li>
                <Link href="/acting-theatre" className="text-gray-400 hover:text-white transition">
                  Acting & Theatre
                </Link>
              </li>
              <li>
                <Link href="/spirituality" className="text-gray-400 hover:text-white transition">
                  Spirituality
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition">
                  Community & Events
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cancellation" className="text-gray-400 hover:text-white transition">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Fitness Life Mantra by Dr. Reena Sharma. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://instagram.com/fitnesslifemantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a 
                href="https://youtube.com/@fitnesslifemantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="YouTube"
              >
                <YouTubeIcon size={20} />
              </a>
              <a 
                href="https://facebook.com/fitnesslifemantra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="mailto:hello@fitnesslifemantra.com"
                className="text-gray-400 hover:text-white transition"
                aria-label="Email"
              >
                <EmailIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
