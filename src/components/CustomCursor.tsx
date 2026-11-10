import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports hover/fine pointer
    if (typeof window !== 'undefined') {
      const finePointer = window.matchMedia('(pointer: fine)').matches;
      setIsTouchDevice(!finePointer);
      if (!finePointer) return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = target.closest('button, a, input, textarea, select, [role="button"], .project-card, .service-card, .toolkit-chip');
        setIsHovering(Boolean(isInteractive));
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (isTouchDevice || !isVisible || pos.x < 0 || pos.y < 0) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out will-change-transform"
      style={{
        left: 0,
        top: 0,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <div
        className={`rounded-full bg-[#FFC900] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isHovering
            ? 'w-[48px] h-[48px] mix-blend-difference opacity-90'
            : 'w-[12px] h-[12px] opacity-100'
        }`}
      />
    </div>
  );
};
