'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  links?: { text: string; href: string }[];
}

const quickResponses: Record<string, { response: string; links?: { text: string; href: string }[] }> = {
  'dance': {
    response: "We offer Bollywood, Bhangra, Hip Hop, and Dance Fitness classes! Our sessions are designed for all skill levels. Would you like to register for a class?",
    links: [
      { text: 'View Dance Classes', href: '/dance-fitness' },
      { text: 'Register Now', href: '/register' }
    ]
  },
  'fitness': {
    response: "Our fitness programs include dance cardio, functional training, and mindful movement. We offer group classes, private sessions, and corporate wellness programs.",
    links: [
      { text: 'Explore Fitness', href: '/dance-fitness' },
      { text: 'Book a Session', href: '/register' }
    ]
  },
  'spiritual': {
    response: "Discover inner peace through our Bhajan sessions, meditation circles, chanting practices, and breathwork. All backgrounds welcome!",
    links: [
      { text: 'Spirituality Programs', href: '/spirituality' },
      { text: 'Join a Session', href: '/register' }
    ]
  },
  'meditation': {
    response: "Our meditation sessions help calm the nervous system and build mental clarity. We offer guided meditation, breathwork, and mindfulness practices.",
    links: [
      { text: 'Explore Spirituality', href: '/spirituality' },
      { text: 'Register', href: '/register' }
    ]
  },
  'acting': {
    response: "We provide talent representation, performance coaching, and theatrical experiences. Perfect for aspiring actors and working professionals!",
    links: [
      { text: 'Acting & Theatre', href: '/acting-theatre' },
      { text: 'Inquire Now', href: '/register' }
    ]
  },
  'theatre': {
    response: "Our theatre programs include performance coaching, mime acting, voice training, and creative collaborations.",
    links: [
      { text: 'View Programs', href: '/acting-theatre' },
      { text: 'Contact Us', href: '/contact' }
    ]
  },
  'price': {
    response: "Drop-in classes are $25, monthly unlimited is $150/month, and private sessions are $75/session. We accept Venmo, Zelle, PayPal, and CashApp!",
    links: [
      { text: 'View Pricing', href: '/services' },
      { text: 'Register & Pay', href: '/register' }
    ]
  },
  'cost': {
    response: "Our pricing is flexible! Drop-in: $25, Monthly: $150, Private: $75/session. Payment via Venmo (@fitnesslifemantra), Zelle, PayPal, or CashApp.",
    links: [
      { text: 'Services & Pricing', href: '/services' },
      { text: 'Book Now', href: '/register' }
    ]
  },
  'pay': {
    response: "We accept: Venmo (@fitnesslifemantra), Zelle (fitnesslifemantra@gmail.com), PayPal, CashApp, and bank transfer. Easy and secure!",
    links: [
      { text: 'Register & Pay', href: '/register' },
      { text: 'Contact Us', href: '/contact' }
    ]
  },
  'book': {
    response: "Ready to book? Fill out our registration form or contact us directly. We'll confirm your spot within 24 hours!",
    links: [
      { text: 'Register Now', href: '/register' },
      { text: 'Contact Us', href: '/contact' }
    ]
  },
  'register': {
    response: "Registration is easy! Fill out our form, choose your program, and we'll send you payment details. Your spot is confirmed once payment is received.",
    links: [
      { text: 'Registration Form', href: '/register' },
      { text: 'View All Services', href: '/services' }
    ]
  },
  'contact': {
    response: "You can reach us at fitnesslifemantra@gmail.com or call +1 (865) 985-1650. We typically respond within 24 hours!",
    links: [
      { text: 'Contact Page', href: '/contact' },
      { text: 'Send Email', href: 'mailto:fitnesslifemantra@gmail.com' }
    ]
  },
  'about': {
    response: "Fitness Life Mantra is led by Dr. Reena Sharma, combining movement, spirituality, and performance arts for holistic wellness.",
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Meet Dr. Reena', href: '/about' }
    ]
  },
  'event': {
    response: "We offer custom choreography, corporate events, emcee services, and community celebrations. Let's create something amazing together!",
    links: [
      { text: 'Community & Events', href: '/community' },
      { text: 'Event Inquiry', href: '/register' }
    ]
  },
  'corporate': {
    response: "Our corporate programs include team wellness workshops, dance sessions, and mindfulness training. Perfect for team building!",
    links: [
      { text: 'Corporate Services', href: '/community' },
      { text: 'Get a Quote', href: '/contact' }
    ]
  },
  'kids': {
    response: "We have age-appropriate dance and fitness programs for kids! Fun, energetic, and confidence-building sessions.",
    links: [
      { text: 'Kids Programs', href: '/dance-fitness' },
      { text: 'Register Child', href: '/register' }
    ]
  },
  'schedule': {
    response: "Class schedules vary by season. Contact us for the current schedule or book a trial class to get started!",
    links: [
      { text: 'Book Trial Class', href: '/trial-class' },
      { text: 'Contact for Schedule', href: '/contact' }
    ]
  },
  'trial': {
    response: "Yes! We offer trial classes so you can experience FLM before committing. Book yours today!",
    links: [
      { text: 'Book Trial Class', href: '/trial-class' },
      { text: 'View Services', href: '/services' }
    ]
  },
  'location': {
    response: "FLM operates globally with sessions in the USA and India. We also offer online classes for worldwide access!",
    links: [
      { text: 'Contact Us', href: '/contact' },
      { text: 'Online Classes', href: '/services' }
    ]
  },
  'online': {
    response: "Yes! We offer online classes for dance, fitness, and spirituality. Join from anywhere in the world!",
    links: [
      { text: 'Online Programs', href: '/services' },
      { text: 'Register', href: '/register' }
    ]
  },
  'help': {
    response: "I can help you with: finding classes, booking sessions, pricing info, payment options, and connecting with Dr. Reena. What would you like to know?",
    links: [
      { text: 'All Services', href: '/services' },
      { text: 'Contact Us', href: '/contact' }
    ]
  },
  'hello': {
    response: "Hello! Welcome to Fitness Life Mantra! 🙏 I'm here to help you explore our dance, fitness, spirituality, and performance programs. What interests you?",
    links: [
      { text: 'Explore Services', href: '/services' },
      { text: 'About FLM', href: '/about' }
    ]
  },
  'hi': {
    response: "Hi there! Welcome to FLM! 🌟 I can help you find the right program, book classes, or answer any questions. What would you like to explore?",
    links: [
      { text: 'Dance & Fitness', href: '/dance-fitness' },
      { text: 'Spirituality', href: '/spirituality' },
      { text: 'Acting & Theatre', href: '/acting-theatre' }
    ]
  }
};

function getResponse(input: string): { response: string; links?: { text: string; href: string }[] } {
  const lowerInput = input.toLowerCase();
  
  for (const [keyword, data] of Object.entries(quickResponses)) {
    if (lowerInput.includes(keyword)) {
      return data;
    }
  }
  
  return {
    response: "I'd be happy to help! You can explore our programs or contact us directly. What are you interested in?",
    links: [
      { text: 'All Services', href: '/services' },
      { text: 'Contact Us', href: '/contact' },
      { text: 'Register', href: '/register' }
    ]
  };
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Welcome to Fitness Life Mantra! 🙏 I'm your virtual assistant. I can help you find classes, book sessions, or answer questions about our programs. How can I help you today?",
      links: [
        { text: 'View Services', href: '/services' },
        { text: 'Book a Class', href: '/register' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    const response = getResponse(input);
    const assistantMessage: Message = {
      role: 'assistant',
      content: response.response,
      links: response.links
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-10rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🧘</span>
              </div>
              <div>
                <h3 className="font-semibold">FLM Assistant</h3>
                <p className="text-xs text-white/80">Online • Here to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-br-md'
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  {message.links && message.links.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.links.map((link, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={link.href}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                            message.role === 'user'
                              ? 'bg-white/20 text-white hover:bg-white/30'
                              : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-2 bg-white border-t border-gray-100">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['Classes', 'Pricing', 'Book Now', 'Contact'].map((action) => (
                <button
                  key={action}
                  onClick={() => {
                    setInput(action);
                    setTimeout(handleSend, 100);
                  }}
                  className="flex-shrink-0 text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-amber-100 hover:text-amber-700 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
