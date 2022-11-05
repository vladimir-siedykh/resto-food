import styles from './Subscribtion.module.css'

const Subscribtion = () => {
  return (
    <div className={styles.m_t}>
      <section className={`section`}>
        <div className={`container center ${styles.wrapper}`}>
          <h2 className='heading-1-white'>Subscribe Our Newsletter</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
          <form className={styles.form}>
            <input className={styles.input} type='text' placeholder='Enter Your Email Here' />
            <button className='btn' type='subbmit'>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Subscribtion