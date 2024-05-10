import React from 'react';

type Props = {
  troubleShootings: { title: string; contents: { subTitle: string; content: string }[] }[];
};

const subTitleStyle = 'text-2xl font-bold';
const listStyle = 'mt-4 list-disc pl-6 flex flex-col gap-4';
const listIndentStyle = 'mt-1';

export default function ProjectTroubleShootingArticle({ troubleShootings }: Props) {
  return (
    <article id="troubleShootingStep" className="pt-16 mobile:pt-8">
      <h2 className={subTitleStyle}>🧨 트러블 슈팅</h2>
      <ul className={listStyle}>
        {troubleShootings.map(({ title, contents }, i) => (
          <li key={i}>
            <ul>
              <li className="font-bold">{title}</li>
              {contents.length !== 0 &&
                contents.map(({ subTitle, content }, i) => (
                  <li key={i} className={listIndentStyle}>
                    <p>
                      <strong className="mr-2">{subTitle}</strong>
                      {content}
                    </p>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}
