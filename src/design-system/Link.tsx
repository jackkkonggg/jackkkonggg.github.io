import { AnchorHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a
      className={twMerge(
        'no-underline text-green hover:text-green transition-all',
        `after:content-[''_!important] after:h-[2px] after:relative after:bottom-1 after:bg-current after:opacity-50 after:transition-all after:w-0 after:block`,
        'hover:after:w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
