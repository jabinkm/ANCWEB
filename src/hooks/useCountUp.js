// import { useState, useEffect } from 'react';

// export const useCountUp = (end, duration = 3000) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTime = null;
//     const animateCount = (timestamp) => {
//       if (!startTime) startTime = timestamp;
//       const progress = timestamp - startTime;
//       const percentage = Math.min(progress / duration, 1);
//       setCount(Math.floor(percentage * end));
//       if (percentage < 1) {
//         requestAnimationFrame(animateCount);
//       }
//     };
//     requestAnimationFrame(animateCount);
//   }, [end, duration]);

//   return count;
// };

import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end, duration = 1000, threshold = 0.5) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(percentage * end));
      if (percentage < 1) {
        animationRef.current = requestAnimationFrame(animateCount);
      }
    };

    animationRef.current = requestAnimationFrame(animateCount);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, end, duration]);

  return { count, elementRef };
};

