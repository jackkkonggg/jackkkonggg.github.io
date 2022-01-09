import { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}

export const Avatar: FC<AvatarProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge(
        'w-8 h-8 overflow-hidden bg-green rounded-full',
        'flex justify-center items-center',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
