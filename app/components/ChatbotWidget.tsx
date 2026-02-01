"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Message = {
  id: string;
  text: string | JSX.Element;
  sender: "user" | "bot";
  timestamp: number;
};

type Intent = {
  keywords: string[];
  response: string | JSX.Element;
};

const INTENTS: Intent[] = [
  {
    keywords: ["register", "sign up", "enroll", "join"],
    response: (
      <div>
        <p className="mb-2">Great! To register for FLM:</p>
        <Link href="/register" className="text-cyan-400 hover:underline">→ Visit Registration Page</Link>
        <p className="mt-2">Or book a trial class first:</p>
        <Link href="/trial-class" className="text-cyan-400 hover:underline">→ Book Trial Class</Link>
      </div>
    )
  },
  {
    keywords: ["pricing", "cost", "fee", "payment", "price"],
    response: (
      <div>
        <p className="mb-2">Our pricing varies by location and program.</p>
        <Link href="/pricing" className="text-cyan-400 hover:underline">→ View Pricing & Payment Options</Link>
      </div>
    )
  },
  {
    keywords: ["trial", "free class", "try"],
    response: (
      <div>
        <p className="mb-2">Book a FREE trial class to experience FLM!</p>
        <Link href="/trial-class" className="text-cyan-400 hover:underline">→ Book Your Trial Class Now</Link>
      </div>
    )
  },
  {
    keywords: ["contact", "phone", "email", "reach", "talk"],
    response: (
      <div>
        <p className="mb-2">Get in touch with us:</p>
        <Link href="/contact" className="text-cyan-400 hover:underline">→ Contact Form</Link>
        <p className="mt-2">📧 info@fitnesslifemantra.com</p>
        <p>📞 +1 (919) 641-9799</p>
      </div>
    )
  },
  {
    keywords: ["dance", "styles", "bhangra", "bollywood", "hip hop"],
    response: (
      <div>
        <p className="mb-2">We offer dance styles including:</p>
        <p className="text-cyan-400">• Bhangra • Bollywood • Folk • Hip Hop • Contemporary</p>
        <Link href="/dance" className="text-cyan-400 hover:underline mt-2 block">→ Explore Dance Programs</Link>
      </div>
    )
  },
  {
    keywords: ["fitness", "workout", "strength"],
    response: (
      <div>
        <p className="mb-2">Our fitness programs include:</p>
        <p className="text-cyan-400">• Dance Fitness • Strength & Mobility • Wellness Fusion</p>
        <Link href="/fitness" className="text-cyan-400 hover:underline mt-2 block">→ Explore Fitness Programs</Link>
      </div>
    )
  },
  {
    keywords: ["spirituality", "meditation", "bhajan", "breathwork"],
    response: (
      <div>
        <p className="mb-2">Find inner peace through:</p>
        <p className="text-cyan-400">• Bhajans • Meditation • Breathwork</p>
        <Link href="/spirituality" className="text-cyan-400 hover:underline mt-2 block">→ Explore Spirituality Programs</Link>
      </div>
    )
  },
  {
    keywords: ["performing", "acting", "mime", "musical"],
    response: (
      <div>
        <p className="mb-2">Our performing arts programs:</p>
        <p className="text-cyan-400">• Mime • Mono Acting • Musical Dance • Musical Acting</p>
        <Link href="/performing-arts" className="text-cyan-400 hover:underline mt-2 block">→ Explore Performing Arts</Link>
      </div>
    )
  },
];

const QUICK_ACTIONS = [
  { label: "How to Register?", query: "register" },
  { label: "Pricing & Payment", query: "pricing" },
  { label: "Trial Class", query: "trial class" },
  { label: "Contact Us", query: "contact" },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load conversation from localStorage
    const saved = localStorage.getItem("flm_chat");
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      // Welcome message
      setMessages([
        {
          id: Date.now().toString(),
          text: "Hi! 👋 I'm here to help you with FLM. What would you like to know?",
          sender: "bot",
          timestamp: Date.now()
        }
      ]);
    }
  }, []);

  useEffect(() => {
    // Save conversation
    if (messages.length > 0) {
      localStorage.setItem("flm_chat", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findResponse = (query: string): string | JSX.Element => {
    const lowerQuery = query.toLowerCase();
    
    for (const intent of INTENTS) {
      if (intent.keywords.some(keyword => lowerQuery.includes(keyword))) {
        return intent.response;
      }
    }
    
    return (
      <div>
        <p className="mb-2">I'm not sure about that, but I can help with:</p>
        <p className="text-cyan-400 text-sm">• Registration • Pricing • Trial Class • Contact • Programs</p>
        <p className="mt-2 text-sm">Or try using the search (⌘K) for more options!</p>
      </div>
    );
  };

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: "user",
      timestamp: Date.now()
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: findResponse(textToSend),
      sender: "bot",
      timestamp: Date.now() + 1
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInput("");
  };

  const handleQuickAction = (query: string) => {
    handleSend(query);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="text-3xl">🤖</div>
        )}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black animate-pulse" />
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4 flex items-center gap-3">
            <div className="text-3xl">🤖</div>
            <div className="flex-1">
              <h3 className="text-white font-bold">FLM Assistant</h3>
              <p className="text-white/80 text-xs">Always here to help</p>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === "user"
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                      : "bg-white/10 text-white"
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 border-t border-white/10">
              <p className="text-white/60 text-xs mb-2">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {QUICK_ACTIONS.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.query)}
                    className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white text-xs transition-all"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white text-sm outline-none focus:border-cyan-500 transition-all"
              />
              <button
                onClick={() => handleSend()}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
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
