'use client'

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group/tooltip">
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 text-xs 
        bg-gray-900/95 text-gray-200 rounded-lg whitespace-nowrap opacity-0 
        group-hover/tooltip:opacity-100 transition-all duration-200 pointer-events-none
        border border-gray-800/50 shadow-lg backdrop-blur-sm
        before:content-[''] before:absolute before:top-full before:left-1/2 before:-translate-x-1/2
        before:border-4 before:border-transparent before:border-t-gray-900/95">
        {text}
      </div>
    </div>
  )
} 