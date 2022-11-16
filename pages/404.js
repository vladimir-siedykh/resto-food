import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css';

const ContactPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Restofood - Page Not Found</title>
      </Head>
      <section className={`section ${styles.bg}`}>
        <div className='container center'>
          <div className={styles.wrapper}>
            <h1 className='heading-1-white text-center'>Page Not Found</h1>
            <div className={styles.buttons}>
              <button className={styles.btn} onClick={() => router.back()}>
                Previous
              </button>
              <Link href='/'>
                <a className={styles.btn}>Home</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
