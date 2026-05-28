"use client";

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export function TopCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ m: number; s: number } | null>(null);

  useEffect(() => {
    // Inicializa com 15 minutos para criar urgência
    setTimeLeft({ m: 14, s: 59 });

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (!prev) return null;
        if (prev.m === 0 && prev.s === 0) return prev;
        if (prev.s === 0) {
          return { m: prev.m - 1, s: 59 };
        }
        return { ...prev, s: prev.s - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="bg-destructive text-destructive-foreground py-2.5 px-4 text-center font-bold text-[10px] md:text-sm sticky top-0 z-[100] shadow-xl flex items-center justify-center gap-2 md:gap-3 uppercase tracking-wider backdrop-blur-md bg-destructive/95">
      <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 animate-pulse shrink-0" />
      <span className="line-clamp-1">A oferta expira em:</span>
      <span className="bg-white text-destructive px-2 py-0.5 rounded font-mono text-xs md:text-sm shadow-inner tabular-nums">
        {String(timeLeft.m).padStart(2, '0')}:{String(timeLeft.s).padStart(2, '0')}
      </span>
    </div>
  );
}
