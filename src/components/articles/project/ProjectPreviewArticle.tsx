import BottomToTopFadeIn from '@/components/gasp/BottomToTopFadeIn';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  previews: { title: string; gifSrc: StaticImageData[]; alt: string }[];
};

const previewTitleStyle = 'font-bold text-xl mt-5 animate-c-bounce';
const previewGifStyle = 'mt-3 mb-8';

export default function ProjectPreviewArticle({ previews }: Props) {
  return (
    <article>
      {previews.map(({ title, gifSrc, alt }) => (
        <BottomToTopFadeIn key={title} delay={0.3} className=" relative">
          <h3 className={previewTitleStyle}>{title}</h3>
          {gifSrc.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={alt}
              className={previewGifStyle}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8f5WhHgAHBAJV9F76jAAAAABJRU5ErkJggg=="
            />
          ))}
        </BottomToTopFadeIn>
      ))}
    </article>
  );
}
