import Underline from '@/components/gasp/UnderLine';
import React from 'react';

type Props = {
  projectName: string;
  content: string;
  listContents?: { title: string; details: string[] }[];
};

const listStyle = 'mt-4 list-disc';
const listIndentStyle = 'mt-1 list-disc !list-[circle] ml-6';

export default function ProjectIntroductArticle({
  projectName,
  content,
  listContents = [],
}: Props) {
  return (
    <article className="text-gray-800">
      <Underline delay={0.5} duration={2} color="rgb(248, 205, 7)" className="w-full block">
        <h1 className="text-4xl font-bold text-black">{projectName}</h1>
      </Underline>
      <p className="whitespace-pre-line mt-4 leading-relaxed">{content}</p>
      <ul className="pl-6">
        {listContents.map(({ title, details }, i) => (
          <li key={i} className={listStyle}>
            <ul>
              <li className="font-bold text-black">{title}</li>
              {details.length !== 0 &&
                details.map((detail, i) => (
                  <li key={i} className={listIndentStyle}>
                    {detail}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
