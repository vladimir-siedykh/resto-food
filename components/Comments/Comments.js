import CommentCard from './CommentCard';
import styles from './Comments.module.css'

const Comments = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className='container center'>
        <h2 className='heading-1-black center'>Comments</h2>
        <div className={styles.wrapper}>
          <CommentCard />
        </div>
      </div>
    </section>
  );
}

export default Comments