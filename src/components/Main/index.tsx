import { FC } from 'react';
import { About } from './About';
import { Contact } from './Contact';
import { Experience } from './Experience';
import { Hero } from './Hero';

export const Main: FC = () => {
  return (
    <main className="container counter-reset mx-auto px-20 selection:text-white selection:bg-slate-dark">
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
};
