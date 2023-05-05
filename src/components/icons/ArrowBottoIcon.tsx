import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';

type Props = {
  animation?: boolean;
};

export default function ArrowBottoIcon({ animation = false }: Props) {
  return (
    <BsArrowDownCircle
      color="white"
      // mt-32 bottom-[10vh]
      className={`text-4xl ${
        animation && 'animate-c-bounce'
      } absolute bottom-[10vh] left-[50%] ml-[-1.125rem]`}
    >
      ArrowBottoIcon
    </BsArrowDownCircle>
  );
}
