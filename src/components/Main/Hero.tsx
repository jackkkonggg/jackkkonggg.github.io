import { Link } from '@/design-system/Link';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center mx-auto min-h-screen"
    >
      <p className="font-mono text-green">Hi, my name is</p>
      <h2 className="mt-6 text-slate-light text-lg-scalable">Jack Ong.</h2>
      <h3 className="mt-2 text-slate-dark text-lg-scalable leading-[1]">
        I build things for the web.
      </h3>
      <p className="mt-6 text-slate-dark max-w-lg text-lg">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{' '}
        <Link href="#" className="inline-block">
          EventX
        </Link>
        .
      </p>
    </section>
  );
};
