
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MarkdownViewer from './components/MarkdownViewer';
import ChatPanel from './components/ChatPanel';
import { HYPOTHESIS_DATA } from './constants';
import { ContentFile } from './types';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<ContentFile>(HYPOTHESIS_DATA[0].files[0]);
  const [showChat, setShowChat] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-[#050505] text-zinc-300 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sidebar Navigation */}
      <div className={`${isSidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 overflow-hidden flex-shrink-0`}>
        <Sidebar 
          activePath={selectedFile.path} 
          onFileSelect={(file) => {
            setSelectedFile(file);
            // On mobile, close sidebar after selection
            if (window.innerWidth < 768) setIsSidebarOpen(false);
          }} 
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0c0c0c] border-x border-zinc-900/50">
        {/* Top Header */}
        <header className="h-14 border-b border-zinc-900 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-xl z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 text-zinc-500 hover:text-white transition-colors"
              aria-label="Toggle Sidebar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className="mono text-[10px] text-zinc-700 tracking-[0.2em] uppercase font-bold">Location:</span>
              <span className="mono text-[10px] text-emerald-500/80 font-medium">{selectedFile.path}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <button 
              onClick={() => setShowChat(!showChat)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] mono font-bold transition-all border uppercase tracking-widest ${
                showChat 
                  ? 'text-emerald-400 bg-emerald-500/5 border-emerald-500/30' 
                  : 'text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700'
              }`}
              title="Show or hide the AI analysis security notice"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>{showChat ? 'AI_Disabled' : 'Security_Notice'}</span>
            </button>
          </div>
        </header>

        {/* Scrollable Document */}
        <div className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
          <MarkdownViewer 
            title={selectedFile.name} 
            path={selectedFile.path} 
            content={selectedFile.content} 
          />
        </div>

        {/* Fixed Footer */}
        <footer className="h-10 bg-zinc-950 border-t border-zinc-900 px-6 flex items-center justify-between text-[9px] mono text-zinc-700 uppercase tracking-[0.2em]">
           <div className="flex items-center gap-3">
             <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
             <span>S01_V.1.2_SYNCED</span>
           </div>
           <div className="flex gap-6 items-center">
             <a href="#" className="hover:text-zinc-500 transition-colors">Data_Integrity: 100%</a>
             <a href="#" className="hover:text-zinc-500 transition-colors hidden sm:inline">CC BY-SA 4.0</a>
           </div>
        </footer>
      </main>

      {/* Interactive AI Sidepanel */}
      {showChat && (
        <div className="w-[22rem] lg:w-[26rem] h-full flex-shrink-0 animate-in slide-in-from-right duration-300 border-l border-zinc-900 shadow-2xl z-30">
          <ChatPanel />
        </div>
      )}
    </div>
  );
};

export default App;
