import { Avatar } from '@/design-system/Avatar';
import { FC, useEffect, useState } from 'react';
import { Button } from '@/design-system/Button';
import { Link } from '@/design-system/Link';
import throttle from 'lodash.throttle';
import clsx from 'clsx';
import { Menu, Tool } from 'react-feather';

let lastScrollTop = 0;
const IS_AT_TOP_PX = 100;

export const NavBar: FC = () => {
  const [isNavBarShown, setNavBarShown] = useState(true);
  const [isScrollAtTop, setScrollAtTop] = useState(true);

  useEffect(() => {
    const shouldShowNavBar = (currentScrollTop: number) => {
      if (currentScrollTop < IS_AT_TOP_PX) {
        return true;
      }

      const isScrollingDown = currentScrollTop < lastScrollTop;
      return isScrollingDown;
    };

    const handleScroll = throttle(() => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setNavBarShown(shouldShowNavBar(scrollTop));
      setScrollAtTop(scrollTop < IS_AT_TOP_PX);
      lastScrollTop = scrollTop;
    }, 250);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0  w-full text-sm',
        'px-6 sm:px-10 lg:px-10',
        'backdrop-blur bg-[rgba(10,25,47,0.85)] z-10 transition-all duration-500',
        isScrollAtTop ? 'py-8' : 'py-4',
        isNavBarShown && !isScrollAtTop && 'nav-shadow',
        !isNavBarShown && '-translate-y-full',
      )}
    >
      <nav className="flex items-center w-full font-mono text-slate-light">
        <div className="flex flex-grow space-x-3">
          <Avatar>
            <h1 className="text-navy-dark">J</h1>
          </Avatar>
          <Avatar
            role="button"
            className="bg-transparent"
            onClick={() => {
              alert('Site is still under construction');
            }}
          >
            <Tool />
          </Avatar>
        </div>
        <ol className="hidden sm:flex items-center justify-between counter-reset">
          {['About', 'Experience', 'Contact'].map((item) => (
            <li key={item} className="px-3 py-2 counter-increment">
              <Link
                href={`#${item.toLowerCase()}`}
                className="before-green-counter before:mr-1 text-slate text-xs"
              >
                {item}
              </Link>
            </li>
          ))}
        </ol>
        <Button className="hidden sm:block ml-4">Resume</Button>
        <Avatar
          role="button"
          className="flex sm:hidden bg-transparent"
          onClick={() => {
            alert('Site is still under construction');
          }}
        >
          <Menu />
        </Avatar>
      </nav>
    </header>
  );
};
