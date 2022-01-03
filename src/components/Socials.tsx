import { Avatar } from '@/design-system/Avatar';
import { Link } from '@/design-system/Link';
import { FC, Fragment } from 'react';
import { GitHub, Icon, Linkedin, PhoneOutgoing } from 'react-feather';
import { twMerge } from 'tailwind-merge';

const PERSONAL_EMAIL = 'jackkkonggg@icloud.com';

interface SocialIconLinkProps {
  href: string;
  Icon: Icon;
}

const SocialIconLink: FC<SocialIconLinkProps> = ({ href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group py-2 hover:cursor-pointer"
  >
    <Avatar
      className={twMerge(
        'bg-transparent',
        'transition-transform duration-300',
        'group-hover:-translate-y-1',
      )}
    >
      <Icon className="group-hover:stroke-green w-5 h-5" />
    </Avatar>
  </a>
);

export const Socials: FC = () => {
  return (
    <Fragment>
      <div
        className={twMerge(
          'fixed bottom-0 left-6 text-slate-dark',
          'flex flex-col items-center justify-center gap-1',
        )}
      >
        <SocialIconLink href="https://github.com/jackkkonggg" Icon={GitHub} />
        <SocialIconLink
          href="https://www.linkedin.com/in/jack-ong-912026196/"
          Icon={Linkedin}
        />
        <SocialIconLink href={`tel:+85256319195`} Icon={PhoneOutgoing} />
        <div className="w-px h-20 mt-5 bg-current" />
      </div>

      <div
        className={twMerge(
          'fixed bottom-0 right-8 rotate-90 origin-bottom-right text-slate-dark',
          'flex items-center gap-5',
        )}
      >
        <Link
          disableHoverUnderline
          href={`mailto:${PERSONAL_EMAIL}`}
          className={twMerge(
            'font-mono text-xs text-slate-dark',
            'transition-transform duration-300',
            'hover:-translate-x-1',
          )}
        >
          {PERSONAL_EMAIL}
        </Link>
        <div className="w-20 h-px bg-current transition-colors delay-150" />
      </div>
    </Fragment>
  );
};
