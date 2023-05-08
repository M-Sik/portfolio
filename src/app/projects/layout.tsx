import BackBtn from '@/components/buttons/BackBtn';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" max-w-screen-lg mx-auto pt-[10vh] h-[calc(100vh-120px)]">
      <BackBtn
        btnText="Back"
        className="p-2 bg-neutral-900 rounded-xl font-bold text-yellow-400 text-xl"
      />
      <article className=" py-12">{children}</article>
    </section>
  );
}
