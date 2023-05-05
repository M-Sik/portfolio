import React from 'react';
import Styles from './LinkText.module.scss';

type Props = {
  className?: string;
  url: string;
  label: string;
  children: React.ReactNode;
};

export default function LinkText({ className, url, label, children }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      aria-label={label}
      className={`${className} ${Styles.text_hover}`}
    >
      {children}
    </a>
  );
}
