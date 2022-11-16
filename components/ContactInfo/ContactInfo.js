import Image from 'next/image';
import styles from './ContactInfo.module.css'

const ContactInfo = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black text-center'>Contact Information</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <Image
              src='/images/contact-icon1.png'
              alt='email'
              width={100}
              height={100}
              layout='fixed'
            />
            <h3 className='heading-2'>Email Us</h3>
            <a className={styles.contact} href='mailto:info@resofood.com'>
              info@resofood.com
            </a>
          </div>
          <div className={styles.item}>
            <Image
              src='/images/contact-icon2.png'
              alt='email'
              width={100}
              height={100}
              layout='fixed'
            />
            <h3 className='heading-2'>Address</h3>
            <address className={styles.contact}>
              4517 Washington Ave. Manchester, Kentucky 39495
            </address>
          </div>
          <div className={styles.item}>
            <Image
              src='/images/contact-icon3.png'
              alt='email'
              width={100}
              height={100}
              layout='fixed'
            />
            <h3 className='heading-2'>Email Us</h3>
            <a className={styles.contact} href='mailto:info@resofood.com'>
              info@resofood.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo