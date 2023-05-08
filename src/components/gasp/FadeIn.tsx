'use client';

import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

type Props = {
  children?: React.ReactNode;
  delay: number;
  className?: string;
};

export default function FadeIn({ children, delay, className }: Props) {
  const target = useRef(null);
  useEffect(() => {
    gsap.from(target.current, {
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
