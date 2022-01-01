import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        'w-8 h-8 overflow-hidden bg-green rounded-full',
        'flex justify-center items-center',
        className,
      )}
    >
      {children}
    </div>
  );
};
