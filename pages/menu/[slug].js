import menu from '../../constants/menu';
import TitlePage from '../../components/TitlePage/TitlePage';
import MenuDetails from '../../components/Menu/MenuDetails';
import Head from 'next/head';
import Subscribtion from '../../components/Subscribtion/Subscribtion';
import Reviews from '../../components/Reviews/Reviews';

export const getStaticProps = async ({ params }) => {
  const menuList = menu.filter((x) => x.slug.toString() === params.slug);
  return {
    props: {
      menuDetail: menuList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = menu.map((service) => ({
    params: { slug: service.slug.toString() },
  }));

  return { paths, fallback: false };
};

const MenuDetailPage = ({ menuDetail }) => {
  return (
    <>
      <Head>
        <title>Restofood - Menu Details</title>
      </Head>
      <TitlePage
        title={menuDetail.title}
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <MenuDetails menuDetail={menuDetail} />
      <Reviews />
      <Subscribtion />
    </>
  );
};

export default MenuDetailPage;
