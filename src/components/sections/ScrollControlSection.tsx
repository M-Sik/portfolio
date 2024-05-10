'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ScrollControlSection({ children }: Props) {
  const searchParams = useSearchParams();
  const step = searchParams.get('step');

  useEffect(() => {
    if (step === null) return window.scrollTo(0, 0);

    document
      .getElementById('troubleShootingStep')
      ?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [step]);

  return <section className="w-full">{children}</section>;
}
