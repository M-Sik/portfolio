'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  btnText: string;
  className: string;
};

export default function BackBtn({ btnText, className }: Props) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className={className}>
      {btnText}
    </button>
  );
}
