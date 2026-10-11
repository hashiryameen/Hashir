import React, { useEffect } from 'react';
import { X, Info } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Top Floating Control Bar */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={onClose}
          className="p-2.5 bg-slate-900/90 hover:bg-black text-[#B8F228] rounded-xl border border-[#B8F228]/60 transition-colors cursor-pointer shadow-lg"
          title="Close (Esc)"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Container */}
      <div className="flex flex-col max-h-[92vh] max-w-5xl w-full bg-[#121820] rounded-2xl border border-slate-700/80 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-4 bg-[#0D1217] border-b border-slate-800 flex items-center gap-2 text-white">
          <Info className="w-4 h-4 text-[#B8F228]" />
          <span className="font-bold text-sm">{title}</span>
        </div>

        {/* Content Pane */}
        <div className="p-4 sm:p-6 overflow-auto max-h-[80vh]">
          {content}
        </div>
      </div>
    </div>
  );
};
