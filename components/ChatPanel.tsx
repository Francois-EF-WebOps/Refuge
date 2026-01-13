
import React, { useState, useRef, useEffect } from 'react';
import { analyzeHypothesis } from '../services/gemini';
import { ChatMessage } from '../types';

interface ChatPanelProps {
  currentContent: string;
}

const ChatPanel: React.FC<ChatPanelProps> = ({ currentContent }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const result = await analyzeHypothesis(currentContent, input);
      const modelMsg: ChatMessage = {
        role: 'model',
        text: result,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'model',
        text: "CRITICAL SYSTEM ERROR: Engagement with the analysis engine failed. Verify API configuration.",
        timestamp: Date.now()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900 border-l border-zinc-800" role="complementary" aria-label="AI Auditor Panel">
      <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isTyping ? 'bg-amber-500 animate-pulse' : 'bg-emerald-500'}`}></div>
          <h3 className="mono text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
            {isTyping ? 'Auditor Reasoning...' : 'S01 Auditor Agent'}
          </h3>
        </div>
        <button 
          onClick={() => setMessages([])} 
          className="mono text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors uppercase"
          title="Clear session history"
        >
          Clear_Logs
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4 opacity-50">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-400 text-xs font-medium">Research Consultation Module</p>
              <p className="text-zinc-600 text-[10px] mono max-w-xs mx-auto uppercase leading-tight">
                Submit queries regarding systemic fragility or constraint validation for the active section.
              </p>
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} group`}>
            <div className={`max-w-[90%] px-4 py-3 rounded-xl transition-all duration-200 ${
              m.role === 'user' 
                ? 'bg-emerald-700/20 text-emerald-100 border border-emerald-500/30' 
                : 'bg-zinc-800/80 text-zinc-300 mono text-[11px] leading-relaxed border border-zinc-700 shadow-sm'
            }`}>
              {m.text}
            </div>
            <span className="text-[9px] text-zinc-600 mt-1 mono opacity-0 group-hover:opacity-100 transition-opacity">
              T+{Math.floor((Date.now() - m.timestamp)/1000)}s | {new Date(m.timestamp).toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex flex-col gap-2">
            <div className="bg-zinc-800/40 border border-zinc-700/50 rounded-xl px-4 py-3 w-fit animate-pulse">
              <div className="flex gap-1.5">
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
                <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
            <span className="text-[9px] mono text-amber-600 uppercase ml-1">Executing thinking budget (4000 tokens)</span>
          </div>
        )}
      </div>

      <div className="p-4 bg-zinc-950 border-t border-zinc-800">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Validate assumptions..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-zinc-700 text-zinc-200"
            aria-label="Hypothesis query input"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className={`absolute right-2 p-2 transition-colors rounded-md ${
              isTyping ? 'text-zinc-700' : 'text-zinc-500 hover:text-emerald-500 hover:bg-zinc-800'
            }`}
            aria-label="Send query"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-[8px] mono text-zinc-700 text-center uppercase tracking-tighter">
          Analysis remains purely conceptual. Not for policy guidance.
        </p>
      </div>
    </div>
  );
};

export default ChatPanel;
