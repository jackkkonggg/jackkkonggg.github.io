import { AnchorHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disableHoverUnderline?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  disableHoverUnderline = false,
  ...props
}) => {
  return (
    <a
      className={twMerge(
        'relative no-underline text-green transition-all hover:text-green',
        `after:content-[''_!important] after:h-0.5 after:absolute after:left-0 after:bottom-0 after:bg-current after:opacity-50 after:transition-all after:w-0 after:block`,
        !disableHoverUnderline && 'hover:after:w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
