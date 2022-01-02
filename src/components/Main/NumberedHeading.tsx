import clsx from 'clsx';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface AutoNumberedHeadingProps {
  heading: string;
}

export const AutoNumberedHeading: FC<AutoNumberedHeadingProps> = ({
  heading,
}) => {
  return (
    <div className="flex items-center gap-5 mb-10">
      <h2
        className={clsx(
          'counter-increment',
          'text-md-scalable text-slate-light',
          `before:content-['0'_counter(item)_'.'] before:relative before:font-mono before:text-green before:text-sm-scalable before:bottom-[2px] before:mr-2`,
        )}
      >
        {heading}
      </h2>
      <div className="w-48 h-px bg-slate-dark" />
    </div>
  );
};
