import { Link } from '@/design-system/Link';
import { NavBar } from '@/components/NavBar';
import { NextPage } from 'next';
import { Fragment } from 'react';
import { Socials } from '@/components/Socials';
import { Main } from '@/components/Main';

const Home: NextPage = () => {
  return (
    <Fragment>
      <NavBar />
      <Main />
      <Socials />
    </Fragment>
  );
};

export default Home;
