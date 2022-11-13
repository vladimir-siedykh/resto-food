import styles from './Footer.module.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className='section'>
        <div className='container center'>
          <div className={styles.line}></div>

          <div className={styles.content}>
            <div className={styles.socials}>
              <div className={styles.logo}>
                Resto<span>food</span>
              </div>
              <div className={styles.social}>
                <FaFacebookF />
                <FaInstagram />
                <FaWhatsapp />
              </div>
            </div>
            <nav className={styles.nav}>
              <h3 className='heading-2'>Quicklink</h3>
              <ul className={styles.links}>
                <li>
                  <Link href='/services'>
                    <a className=''>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href='/projects'>
                    <a className=''>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href='/blog'>
                    <a className=''>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href='/about'>
                    <a className=''>About</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles.contacts}>
              <h3 className='heading-2'>Contact</h3>
              <a href='tel:+19098997865'>+19098997865</a>
              <a href='mailto:info@restofood.com'>info@restofood.com</a>
              <address>4517 Washington Ave. Manchester, Kentucky 39495</address>
            </div>
            <div className={styles.about}>
              <h3 className='heading-2'>About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita repudiandae neque illum
                <Link href='/about'>
                  <a style={{ color: 'black' }}>READ MORE LINK</a>
                </Link>
              </p>
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
      </section>
      <div className={styles.bg}>
        Copyright Restofood. 2022 All Right Reserved
      </div>
    </footer>
  );
}

export default Footer