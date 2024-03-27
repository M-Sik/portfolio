'use client';

import React, { useEffect } from 'react';

type Props = {
  children: React.ReactNode;
};

export default function ScrollTopSection({ children }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <section className="w-full">{children}</section>;
}
