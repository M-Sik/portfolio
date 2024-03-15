import React from 'react';

type Props = {
  content: string;
};

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6';

export default function ProjectNumberOfPeopleSection({ content }: Props) {
  return (
    <section>
      <h2 className={subTitleStyle}>👨‍👨‍👦 참가 인원</h2>
      <ul className={listStyle}>
        <li>{content}</li>
      </ul>
    </section>
  );
}
