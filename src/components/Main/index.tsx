import clsx from 'clsx';
import { FC } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Experience } from './Experience';
import { Hero } from './Hero';

export const Main: FC = () => {
  return (
    <main
      className={clsx(
        'container counter-reset mx-auto selection:text-white selection:bg-slate-dark',
        'px-6 sm:px-20',
      )}
    >
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
};
