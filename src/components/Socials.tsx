import { Avatar } from '@/design-system/Avatar';
import { Link } from '@/design-system/Link';
import { FC, Fragment } from 'react';
import { GitHub, Linkedin, PhoneOutgoing } from 'react-feather';
import { twMerge } from 'tailwind-merge';

const PERSONAL_EMAIL = 'jackkkonggg@icloud.com';

interface SocialIconLinkProps {
  href: string;
  Icon: FC;
}

const SocialIconLink: FC<SocialIconLinkProps> = ({ href, Icon }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Avatar
      className={twMerge(
        'bg-transparent',
        'transition-transform duration-300',
        'hover:cursor-pointer hover:-translate-y-2',
      )}
    >
      <Icon />
    </Avatar>
  </a>
);

export const Socials: FC = () => {
  return (
    <Fragment>
      <div
        className={twMerge(
          'fixed bottom-0 left-5 text-slate-dark',
          'flex flex-col items-center justify-center gap-5',
        )}
      >
        <SocialIconLink href="https://github.com/jackkkonggg" Icon={GitHub} />
        <SocialIconLink
          href="https://www.linkedin.com/in/jack-ong-912026196/"
          Icon={Linkedin}
        />
        <SocialIconLink href={`tel:+85256319195`} Icon={PhoneOutgoing} />
        <div className="w-px h-20 bg-current" />
      </div>

      <div
        className={twMerge(
          'fixed bottom-0 right-10 rotate-90 origin-bottom-right text-slate-dark',
          'flex items-center gap-5',
        )}
      >
        <Link
          disableHoverEffects
          href={`mailto:${PERSONAL_EMAIL}`}
          className={twMerge(
            'font-mono text-xs text-slate-dark',
            'transition-transform duration-300',
            'hover:-translate-x-2',
          )}
        >
          {PERSONAL_EMAIL}
        </Link>
        <div className="h-px w-20 bg-current transition-colors delay-150" />
      </div>
    </Fragment>
  );
};