import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            Resto<span>food</span>
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href='/'>
              <a className=''>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className=''>About</a>
            </Link>
          </li>
          <li>
            <Link href='/menu'>
              <a className=''>Menu</a>
            </Link>
          </li>
          <li>
            <Link href='/news'>
              <a className=''>News</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className=''>Contact</a>
            </Link>
          </li>
          <li>
            <Link href='/reservation'>
              <a className={styles.btn}>Book a Table</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
