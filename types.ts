
export interface ContentFile {
  path: string;
  name: string;
  content: string;
  description?: string;
}

export interface ContentCategory {
  id: string;
  name: string;
  files: ContentFile[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
