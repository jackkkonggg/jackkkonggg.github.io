import { Link } from '@/design-system/Link';
import { NavBar } from '@/components/NavBar';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Socials } from '@/components/Socials';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavBar />
      <main className="container mx-auto selection:text-white selection:bg-slate-dark">
        <section
          id="hero"
          className="flex flex-col justify-center mx-auto min-h-screen prose"
        >
          <p className="font-mono text-green">Hi, my name is</p>
          <h1 className="text-slate-light">Jack Ong.</h1>
          <h2 className="text-slate-dark">I build things for the web.</h2>
          <p className="text-slate-dark">
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{' '}
            <Link href="#" className="inline-block">
              EventX
            </Link>
            .
          </p>
        </section>
      </main>
      <Socials />
    </Fragment>
  );
};

export default Home;
