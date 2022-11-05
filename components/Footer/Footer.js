import styles from './Footer.module.css'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <section className='section'>
        <div className='container center'>
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
          <div className={styles.line}></div>
        </div>
      </section>
    </footer>
  );
}

export default Footer