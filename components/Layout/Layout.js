import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Restofood - Italian Restaurant</title>
        <meta name='description' content='Italian Restaurant' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}