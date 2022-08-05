import React from 'react';
interface Props {
  text?: string | null;
  truncate?: boolean;
  charaterLimit?: number;
  ellipsisPostion?: 'head' | 'tail';
  className?: string;
}

export const Text = ({
  text = '',
  truncate = false,
  charaterLimit = 20,
  ellipsisPostion = 'tail',
  className,
}: Props) => {
  const getTruncatedText = (postion: Props['ellipsisPostion']) => {
    if (postion === 'tail') {
      return `${text && text.substring(0, charaterLimit)}...`;
    } else {
      return `...${text && text.substring(text.length - charaterLimit)}`;
    }
  };

  text =
    truncate && text && text.length > charaterLimit
      ? getTruncatedText(ellipsisPostion)
      : text;

  return <span className={className}>{text}</span>;
};
