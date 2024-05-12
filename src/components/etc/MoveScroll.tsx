'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function MoveScroll() {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (step === null) return window.scrollTo(0, 0);
    else if (step === 'troubleShootingStep')
      return document
        .getElementById('troubleShootingStep')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    else if (step === 'troubleShootingSection')
      return document
        .getElementById('troubleShootingSection')
        ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [step]);
  return <></>;
}
