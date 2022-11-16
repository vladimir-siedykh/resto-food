import Head from 'next/head';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import FormReservation from '../components/FormReservation/FormReservation';
import Subscribtion from '../components/Subscribtion/Subscribtion';
import TitlePage from '../components/TitlePage/TitlePage';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Restofood - Contact Us</title>
      </Head>
      <TitlePage
        title='Reservation'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <FormReservation />
      <ContactInfo />
      <Subscribtion />
    </>
  );
};

export default ContactPage;
