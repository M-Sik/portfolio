import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

type Props = {
  animation?: boolean;
};

export default function ArrowBottoIcon({ animation = false }: Props) {
  return (
    <BsArrowDownCircle
      color="white"
      className={`text-4xl mt-32 ${animation && 'animate-c-bounce'}`}
    >
      ArrowBottoIcon
    </BsArrowDownCircle>
  );
}
