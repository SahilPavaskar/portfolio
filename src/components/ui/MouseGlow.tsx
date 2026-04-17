import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.setProperty('--x', `${clientX}px`);
      glowRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
      style={{
        background: 'radial-gradient(600px circle at var(--x, 50vw) var(--y, 50vh), rgba(79, 70, 229, 0.08), transparent 80%)'
      }}
    />
  );
}
