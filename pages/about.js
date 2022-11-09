import Head from 'next/head';
import React from 'react';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import MenuFavourite from '../components/Menu/MenuFavourite';
import Offers from '../components/Offers/Offers';
import Subscribtion from '../components/Subscribtion/Subscribtion';
import Team from '../components/Team/Team';
import TitlePage from '../components/TitlePage/TitlePage';

const about = () => {
  return (
    <>
      <Head>
        <title>Restofood - About Us</title>
      </Head>
      <TitlePage
        title='About Us'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <About />
      <Features />
      <Offers />
      <Team />
      <MenuFavourite />
      <Subscribtion />
    </>
  );
};

export default about;