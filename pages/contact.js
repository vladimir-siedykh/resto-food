import Head from 'next/head';
import TitlePage from '../components/TitlePage/TitlePage';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Restofood - Contact Us</title>
      </Head>
      <TitlePage
        title='Contact Us'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
    </>
  );
};

export default ContactPage;
