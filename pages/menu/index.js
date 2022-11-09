import Head from 'next/head';
import MenuAll from '../../components/Menu/MenuAll';
import Subscribtion from '../../components/Subscribtion/Subscribtion';
import TitlePage from '../../components/TitlePage/TitlePage';

const MenuPage = () => {
  return (
    <>
      <Head>
        <title>Restofood - Menu</title>
      </Head>
      <TitlePage
        title='Menu'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <MenuAll />
      <Subscribtion />
    </>
  );
};

export default MenuPage;
