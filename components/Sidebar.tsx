
import React from 'react';
import { HYPOTHESIS_DATA } from '../constants';
import { ContentFile } from '../types';

interface SidebarProps {
  activePath: string;
  onFileSelect: (file: ContentFile) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePath, onFileSelect }) => {
  return (
    <aside className="w-72 h-full bg-zinc-950 border-r border-zinc-800 flex flex-col">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-black shadow-lg shadow-emerald-500/20">
            M
          </div>
          <h1 className="font-bold text-white text-lg tracking-tight">Mascarene Refuge</h1>
        </div>
        <p className="mono text-[10px] text-zinc-500 uppercase tracking-widest">
          S01 Systems Architecture
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {HYPOTHESIS_DATA.map((category) => (
          <div key={category.id} className="mb-6 last:mb-0">
            <h3 className="mono text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-3 px-2">
              {category.name}
            </h3>
            <ul className="space-y-1">
              {category.files.map((file) => (
                <li key={file.path}>
                  <button
                    onClick={() => onFileSelect(file)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-3 ${
                      activePath === file.path
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 border border-transparent'
                    }`}
                  >
                    <svg 
                      className={`w-4 h-4 ${activePath === file.path ? 'text-emerald-400' : 'text-zinc-700'}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="truncate">{file.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 bg-zinc-900/50 border-t border-zinc-800">
        <div className="flex items-center gap-3 text-[10px] mono text-zinc-600 uppercase tracking-widest">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          System Status: Nominal
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
