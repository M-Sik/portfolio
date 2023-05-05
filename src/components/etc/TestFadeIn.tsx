// observer 이용
import { useRef, useEffect } from 'react';

import React from 'react';

export default function TestFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && ref.current) {
          // 교차 상태가 되면 opacity 값을 변경하여 페이드 인 효과를 줍니다.
          ref.current.style.opacity = '1';
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      // opacity 값을 0으로 초기화합니다.
      ref.current.style.opacity = '0';
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <div ref={ref}>Hello, World!</div>;
}
