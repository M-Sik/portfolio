import React from 'react';
import MainSideBar from '@/components/bars/MainSideBar';
import MainContent from './MainContent';

export default function MainSection() {
  return (
    <section className="w-full h-screen flex mobile:flex-col">
      <MainSideBar />
      <MainContent />
    </section>
  );
}
