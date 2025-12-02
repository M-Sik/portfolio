import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
  bgImg: StaticImageData;
  bgImgAlt: string;
  skills: string[];
  link: string;
};

export type ProjectTroubleShooting = {
  title: string;
  contents: { subTitle: string; content: string; image?: StaticImageData }[];
};
