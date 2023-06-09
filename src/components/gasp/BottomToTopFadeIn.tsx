'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  delay: number;
  className?: string;
};

export default function BottomToTopFadeIn({ children, delay, className = '' }: Props) {
  const target = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart none none reset',
        // start: 'top 100%',
        // end: 'bottom 0%',
        // scrub: true,
      },
      y: 100,
      opacity: 0,
      delay,
      duration: 2.0,
      ease: 'power3.out',
    });
  }, [delay]);
  return (
    <div ref={target} className={className}>
      {children}
    </div>
  );
}
