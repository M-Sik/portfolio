'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import Styles from './UnderLine.module.scss';

type Props = {
  children?: React.ReactNode;
  delay: number;
  color: string;
  className?: string;
  duration?: number;
};

const Underline = ({ delay, children, color, className, duration = 0.6 }: Props) => {
  const target = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(target.current, {
      scrollTrigger: {
        trigger: target.current,
        toggleActions: 'restart  none none reverse',
      },
      backgroundImage: `linear-gradient(transparent 80%, ${color} 20%)`,
      backgroundSize: '100% 100%',
      delay,
      duration: duration,
      ease: 'expo.out',
    });
  }, [delay, color, duration]);
  return (
    <span ref={target} className={`${className} ${Styles.container}`}>
      {children}
    </span>
  );
};

export default Underline;
