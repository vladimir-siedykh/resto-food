import Link from 'next/link';
import styles from './NavDesktop.module.css';

const NavDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/menu'>
            <a>
              Menu
            </a>
          </Link>
        </li>
        <li>
          <Link href='/news'>
            <a>
              News
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href='/reservation'>
            <a className={styles.btn}>Book a Table</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavDesktop;