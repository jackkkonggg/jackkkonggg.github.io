/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { Button } from '../design-system/Button';
import { Link } from '../design-system/Link';

export const NavBar: FC = () => {
  return (
    <header className="fixed top-0 py-8 px-12 w-full text-sm sm:px-6 lg:px-10">
      <nav className="flex items-center w-full font-mono text-slate-light">
        <a className="flex-grow">
          <img src="/vercel.svg" height="30px" alt="vercel-logo" />
        </a>
        <ol className="flex items-center justify-between [counter-reset:item_0]">
          {['About', 'Experience', 'Work', 'Contact'].map((item, index) => (
            <li key="item" className="px-6 py-4 [counter-increment:item_1]">
              <Link
                href="#"
                className="before:content-['0'_counter(item)_'.'] before:mr-1 before:text-green text-slate"
              >
                {item}
              </Link>
            </li>
          ))}
        </ol>
        <Button>Resume</Button>
      </nav>
    </header>
  );
};
