import { Link } from '@/design-system/Link';
import clsx from 'clsx';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer
      className={clsx(
        'flex flex-col items-center justify-center',
        'w-full p-8',
        'text-slate-dark font-mono text-xs leading-6',
      )}
    >
      <Link
        disableHoverUnderline
        className="text-inherit"
        href="https://github.com/bchiang7/v4"
        target="_blank"
      >
        Designed by Brittany Chiang
      </Link>
      <Link
        disableHoverUnderline
        className="text-inherit"
        href="https://github.com/jackkkonggg/jackkkonggg.github.io"
        target="_blank"
      >
        Built by Jack Ong
      </Link>
    </footer>
  );
};
