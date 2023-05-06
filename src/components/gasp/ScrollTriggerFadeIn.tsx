'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  delay: number;
  className?: string;
};

export default function ScrollTriggerFadeIn({ children, delay, className }: Props) {
  const target = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // console.log(target.current);

    gsap.from(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart none none reverse',
        // start: 'top 100%',
        // end: 'bottom 20%',
        // scrub: false,
      },
      opacity: 0,
      delay,
      duration: 1.5,
    });
  }, [delay]);
  return (
    <div ref={target} className={className}>
      {children}
    </div>
  );
}
