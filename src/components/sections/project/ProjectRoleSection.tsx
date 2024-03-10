import React from 'react';

type Props = {
  roles: string[];
};

const listStyle = 'mt-4 list-disc pl-6';
const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';

export default function ProjectRoleSection({ roles }: Props) {
  return (
    <section>
      <h2 className={subTitleStyle}>🙋🏻‍♂️ 담당 역할</h2>
      <ul className={listStyle}>
        {roles.map((role, i) => (
          <li key={i}>{role}</li>
        ))}
      </ul>
    </section>
  );
}
