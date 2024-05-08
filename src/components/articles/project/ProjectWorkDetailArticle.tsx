import React from 'react';

type Props = {
  title: string;
  workDetails: { content: any; contentDetails: string[] }[];
};

const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';
const listStyle = 'mt-4 list-disc';
const listIndentStyle = 'mt-1 list-disc !list-[circle] ml-6';

export default function ProjectWorkDetailArticle({ title, workDetails }: Props) {
  return (
    <article>
      <h2 className={subTitleStyle}>{title}</h2>
      <ul className="pl-6">
        {workDetails.map(({ content, contentDetails }, i) => (
          <li key={i} className={listStyle}>
            <ul>
              <li>{content.text}</li>
              {contentDetails.length !== 0 &&
                contentDetails.map((detail, i) => (
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
