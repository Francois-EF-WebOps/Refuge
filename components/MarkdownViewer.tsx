
import React from 'react';

interface MarkdownViewerProps {
  title: string;
  path: string;
  content: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ title, path, content }) => {
  // Simple markdown renderer for the purpose of this UI
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('# ')) {
        return <h1 key={i} className="text-3xl font-bold mb-6 text-white border-b border-zinc-800 pb-4">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-semibold mt-8 mb-4 text-zinc-200">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="ml-6 mb-2 text-zinc-400">{line.replace('- ', '')}</li>;
      }
      if (line.trim() === '') {
        return <div key={i} className="h-4" />;
      }
      return <p key={i} className="mb-4 text-zinc-300 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <span className="mono text-xs text-emerald-500 uppercase tracking-widest bg-emerald-500/10 px-2 py-1 rounded">
          {path}
        </span>
        <h1 className="text-4xl font-bold mt-4 text-white tracking-tight">{title}</h1>
      </div>
      
      <div className="research-content border-l border-zinc-800 pl-8 ml-1">
        {renderContent(content)}
      </div>

      <div className="mt-16 pt-8 border-t border-zinc-800 text-zinc-500 mono text-xs flex justify-between">
        <span>STAGE_01_HYPOTHESIS_CORE</span>
        <span>CONFIDENTIAL_DRAFT_NOT_FOR_POLICY</span>
      </div>
    </div>
  );
};

export default MarkdownViewer;
