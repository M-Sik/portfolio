import React from 'react';
import MainSideBar from '@/components/bars/MainSideBar';
import MainContent from './MainContent';

type Props = {
  id: string;
};

export default function MainSection({ id }: Props) {
  return (
    <section id={id} className="w-full h-screen flex mobile:flex-col ">
      <MainSideBar />
      <MainContent />
    </section>
  );
}
