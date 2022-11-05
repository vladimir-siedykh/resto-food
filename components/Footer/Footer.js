import styles from './Footer.module.css'

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
              f i w
            </div>
          </div>
          <div className={styles.line}></div>
        </div>
      </section>
    </footer>
  );
}

export default Footer