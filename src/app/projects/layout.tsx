import BackBtn from '@/components/buttons/BackBtn';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" max-w-screen-md mx-auto py-[10vh] px-4">
      <BackBtn
        btnText="Back"
        className="p-2 bg-neutral-900 rounded-xl font-bold text-yellow-400 text-xl"
      />
      <article className=" py-12 w-full">{children}</article>
    </section>
  );
}
