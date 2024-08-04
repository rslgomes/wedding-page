import { useEffect, useState, useRef } from 'react';

const ScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const TIME_VISIBLE_MS = 800;
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercentage((100 * window.scrollY) / maxScrollY);
      setIsScrolling(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(
        () => setIsScrolling(false),
        TIME_VISIBLE_MS
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full z-50">
      <span
        className={`absolute bg-primary-300 transition-opacity duration-800 ease-in-out w-2 h-screen/3 ${
          isScrolling ? 'opacity-80' : 'opacity-0'
        }`}
        style={{
          top: `${scrollPercentage}%`,
        }}
      ></span>
    </div>
  );
};

export default ScrollBar;
