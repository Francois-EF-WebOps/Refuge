import React from 'react';

const ChatPanel: React.FC = () => (
  <aside className="flex flex-col h-full bg-zinc-900 border-l border-zinc-800" role="complementary" aria-label="AI analysis status">
    <div className="p-4 border-b border-zinc-800 bg-zinc-900/50">
      <h3 className="mono text-[10px] font-bold text-amber-400 uppercase tracking-widest">AI analysis disabled</h3>
    </div>
    <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm text-zinc-300">
      <p>This browser-only build does not send analysis requests to an AI provider.</p>
      <p>No API key is embedded in the browser bundle. To re-enable AI analysis, implement an authenticated server-side proxy and keep the provider key exclusively on the server.</p>
      <p>Until that proxy exists, use the repository's source documents and review them directly. This notice is not an AI response.</p>
    </div>
  </aside>
);

export default ChatPanel;
