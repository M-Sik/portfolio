import BackBtn from '@/components/buttons/BackBtn';
import Link from 'next/link';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" max-w-screen-md mx-auto py-[5vh] px-4">
      <div className="flex justify-between">
        <BackBtn
          btnText="Back"
          className="p-2 bg-neutral-900 rounded-xl font-bold text-yellow-400 text-xl"
        />

        <Link
          href={'/'}
          aria-label="메인 페이지로 이동"
          className="p-2 bg-neutral-900 rounded-xl font-bold text-yellow-400 text-xl"
        >
          Home
        </Link>
      </div>

      <article className=" py-12 w-full">{children}</article>
    </section>
  );
}
