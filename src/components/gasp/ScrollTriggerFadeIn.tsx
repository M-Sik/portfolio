'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  delay: number;
};

export default function ScrollTriggerFadeIn({ children, delay }: Props) {
  const target = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart  none none reverse',
        // start: 'top bottom',
        // end: 'bottom 20%',
        scrub: false,
      },
      opacity: 0,
      delay,
      duration: 1.5,
    });
  }, [delay]);
  return (
    <div ref={target} className="h-full">
      {children}
    </div>
  );
}
