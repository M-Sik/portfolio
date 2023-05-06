import { StaticImageData } from 'next/image';

export type Project = {
  name: string;
  bgImg: StaticImageData;
  bgImgAlt: string;
  skills: string[];
  link: string;
};
