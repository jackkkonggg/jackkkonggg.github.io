import { Link } from '@/design-system/Link';
import { NavBar } from '@/components/NavBar';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Socials } from '@/components/Socials';
import { Main } from '@/components/Main';
import { Contact } from '@/components/Main/Contact';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Main />
      <Contact />
      <Socials />
    </Fragment>
  );
};

export default Home;
