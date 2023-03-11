import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title='Restofood - First Restaurant in the World'
        description='Restofood is the first restaurant in the world that serves food that is made from the waste of other restaurants.'
        canonical='http://www.restofood.store'
        openGraph={{
          url: 'http://www.restofood.store',
          title: 'Restofood - First Restaurant in the World',
          description:
            'Restofood is the first restaurant in the world that serves food that is made from the waste of other restaurants.',
        }}
      />
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}