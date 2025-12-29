
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatWithAssistant } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Welcome to Tong Digital. I am your strategic AI companion. How can I help you elevate your brand today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    const history = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const response = await chatWithAssistant(userMessage, history);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Chat Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-all shadow-2xl purple-glow ${isOpen ? 'rotate-90' : 'animate-float'}`}
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-black/95 border border-purple-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="p-4 bg-purple-600 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Tong Digital Assistant</h3>
              <p className="text-purple-200 text-xs">Always Active</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-purple-600 text-white rounded-br-none' 
                    : 'bg-white/5 text-gray-200 border border-white/10 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl rounded-bl-none border border-white/10">
                  <Loader2 className="w-4 h-4 text-purple-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/5 bg-white/5 flex gap-2">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our strategy..."
              className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button 
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-10 h-10 bg-purple-600 rounded-xl flex items-center justify-center hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default AIAssistant;
