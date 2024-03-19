import React from 'react';

type Props = {
  skills: string[];
};
const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';

export default function ProjectUseSkillArticle({ skills }: Props) {
  return (
    <article>
      <h2 className={subTitleStyle}>🛠️ 사용 기술</h2>
      <div className="w-full flex gap-2 flex-wrap mt-2">
        {skills.map((skill) => (
          <p key={skill} className="py-1 px-2 bg-gray-200 rounded-md text-purple-600 font-bold">
            {skill}
          </p>
        ))}
      </div>
    </article>
  );
}
