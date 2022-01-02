import { AnchorHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  disableHoverEffects?: boolean;
}

export const Link: FC<LinkProps> = ({
  children,
  className,
  disableHoverEffects = false,
  ...props
}) => {
  return (
    <a
      className={twMerge(
        'relative no-underline text-green transition-all',
        `after:content-[''_!important] after:h-0.5 after:absolute after:left-0 after:bottom-0 after:bg-current after:opacity-50 after:transition-all after:w-0 after:block`,
        !disableHoverEffects && 'hover:text-green hover:after:w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
