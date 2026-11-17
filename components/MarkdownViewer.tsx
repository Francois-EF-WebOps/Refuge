
import React from 'react';

interface MarkdownViewerProps {
  title: string;
  path: string;
  content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ title, path, content }) => {
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold mb-6 text-white border-b border-zinc-800 pb-4 tracking-tight">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-semibold mt-10 mb-4 text-zinc-200 tracking-tight flex items-center gap-3">
          <span className="w-1 h-6 bg-emerald-500/50 rounded-full"></span>
          {line.replace('## ', '')}
        </h2>;
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="ml-6 mb-3 text-zinc-400 list-disc marker:text-emerald-500/50">
            <span className="pl-2">{line.replace('- ', '')}</span>
          </li>
        );
      }
      if (line.trim() === '') {
        return <div key={i} className="h-4" />;
      }
      return <p key={i} className="mb-5 text-zinc-300 leading-relaxed text-[15px]">{line}</p>;
    });
  };

  return (
    <article className="max-w-3xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 duration-500" role="main">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="mono text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] bg-emerald-500/5 border border-emerald-500/20 px-3 py-1 rounded-md">
            {path}
          </span>
          <span className="w-px h-4 bg-zinc-800"></span>
          <span className="mono text-[10px] text-zinc-600 uppercase tracking-widest">Stage 01 Protocol</span>
        </div>
        <h1 className="text-5xl font-extrabold text-white tracking-tighter leading-none mb-6">{title}</h1>
        
      </div>
      
      <div className="research-content space-y-2 border-l border-zinc-900 pl-10 -ml-1 py-2">
        {renderContent(content)}
      </div>

      <div className="mt-24 pt-12 border-t border-zinc-800 text-zinc-600 mono text-[10px] flex flex-col sm:flex-row justify-between gap-4 uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
          <span>Hash: 8f2a9c...0d1e</span>
        </div>
        <div className="flex items-center gap-2">
          <span>CLASSIFIED: INTERNAL_REVIEW_ONLY</span>
        </div>
      </div>
    </article>
  );
};

export default MarkdownViewer;
