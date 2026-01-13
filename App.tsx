
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MarkdownViewer from './components/MarkdownViewer';
import ChatPanel from './components/ChatPanel';
import { HYPOTHESIS_DATA } from './constants';
import { ContentFile } from './types';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<ContentFile>(HYPOTHESIS_DATA[0].files[0]);
  const [showChat, setShowChat] = useState(true);

  return (
    <div className="flex h-screen w-full bg-zinc-950 text-zinc-300 overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        activePath={selectedFile.path} 
        onFileSelect={setSelectedFile} 
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-[#0c0c0c]">
        {/* Top Header */}
        <header className="h-14 border-b border-zinc-900 flex items-center justify-between px-6 bg-zinc-950/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <span className="mono text-[10px] text-zinc-600 tracking-widest uppercase">Location:</span>
            <span className="mono text-[10px] text-emerald-500">{selectedFile.path}</span>
          </div>
          <div className="flex items-center gap-4">
             <button 
              onClick={() => setShowChat(!showChat)}
              className={`p-2 rounded-lg transition-colors ${showChat ? 'text-emerald-500 bg-emerald-500/10' : 'text-zinc-600 hover:text-zinc-300'}`}
              title="Toggle AI Auditor"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </button>
          </div>
        </header>

        {/* Scrollable Document */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          <MarkdownViewer 
            title={selectedFile.name} 
            path={selectedFile.path} 
            content={selectedFile.content} 
          />
        </div>

        {/* Fixed Footer for context */}
        <footer className="h-10 bg-zinc-950 border-t border-zinc-900 px-6 flex items-center justify-between text-[10px] mono text-zinc-700">
           <div>HYPOTHESIS_VER: S01_BETA</div>
           <div className="flex gap-4">
             <span className="hover:text-zinc-500 cursor-pointer transition-colors">CC BY-SA 4.0</span>
             <span className="hover:text-zinc-500 cursor-pointer transition-colors">MASCARENE_RECON</span>
           </div>
        </footer>
      </main>

      {/* Interactive AI Sidepanel */}
      {showChat && (
        <div className="w-96 h-full flex-shrink-0 animate-in slide-in-from-right duration-300 border-l border-zinc-900">
          <ChatPanel currentContent={selectedFile.content} />
        </div>
      )}
    </div>
  );
};

export default App;
