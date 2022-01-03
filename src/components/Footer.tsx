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
        disableHoverEffects
        className="text-inherit hover:text-green"
        href="https://github.com/bchiang7/v4"
        target="_blank"
      >
        Designed by Brittany Chiang
      </Link>
      <p>Built by Jack Ong</p>
    </footer>
  );
};
