import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

type Props = {
  animation?: boolean;
};

export default function ArrowBottoIcon({ animation = false }: Props) {
  return (
    <BsArrowDownCircle
      color="white"
      // mt-32
      className={`text-4xl ${animation && 'animate-c-bounce'} absolute bottom-[10vh]`}
    >
      ArrowBottoIcon
    </BsArrowDownCircle>
  );
}
