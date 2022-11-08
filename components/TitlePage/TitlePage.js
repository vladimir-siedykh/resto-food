import styles from './TitlePage.module.css'

const TitlePage = ({ title, text }) => {
  return (
    <section className={`section ${styles.bg}`}>
      <div className='container center'>
        <h1 className='heading-1-white'>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  );
};

export default TitlePage