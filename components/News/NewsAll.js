import styles from './NewsAll.module.css'
import NewsCard from './NewsCard';
import news from '../../constants/news';

const NewsAll = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black text-center'>Welcome to Our Newsletter</h2>
        <div className={styles.wrapper}>
          {news.map(card => {
            return <NewsCard key={card.id} {...card} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default NewsAll