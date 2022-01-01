import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Button> = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'text-green h-fit relative px-4 py-2 bg-transparent border border-current rounded',
        `after:content-[''_!important] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-transparent after:opacity-0 after:transition-colors after:select-none`,
        'hover:after:bg-current hover:after:opacity-5',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
