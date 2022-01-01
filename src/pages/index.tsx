import { Link } from '@/design-system/Link';
import { NavBar } from '@/components/NavBar';
import { NextPage } from 'next';
import { Fragment } from 'react';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavBar />
      <main className="container mx-auto selection:text-white selection:bg-slate-500">
        <section
          id="hero"
          className="flex flex-col justify-center mx-auto min-h-screen prose"
        >
          <p className="font-mono text-green-300">Hi, my name is</p>
          <h1 className="text-slate-100">Jack Ong.</h1>
          <h1 className="text-slate-300">I build things for the web.</h1>
          <p className="text-slate-300">
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
    </Fragment>
  );
};

export default Home;
