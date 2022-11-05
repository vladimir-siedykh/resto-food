import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Resto<span>food</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href='/'>
              <a className=''>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <a className=''>Our Services</a>
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
        <Link href='/reservation'>
          <a className={styles.btn}>Book a Table</a>
        </Link>
    </header>
  );
};

export default Header;
