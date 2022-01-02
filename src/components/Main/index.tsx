import { FC } from 'react';
import { Hero } from './Hero';

export const Main: FC = () => {
  return (
    <main className="container mx-auto px-20 selection:text-white selection:bg-slate-dark">
      <Hero />
    </main>
  );
};
