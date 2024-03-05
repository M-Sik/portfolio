import React from 'react';

type Props = {
  links: { url: string; label: string; text: string }[];
};

const linkStyle = 'hover:text-yellow-400 hover:font-bold';
const subTitleStyle = 'mt-16 mobile:mt-8 text-2xl font-bold';

export default function ProjectServiceLinkSection({ links }: Props) {
  return (
    <>
      <h2 className={subTitleStyle}>🔗 서비스 링크</h2>
      <div className="flex mt-2">
        <ul className="flex flex-col bg-gray-100 rounded-xl p-4">
          {links.map(({ url, text, label }) => (
            <li key={url} className="py-1 flex">
              <a href={url} target="_blank" aria-label={label} className={linkStyle}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
