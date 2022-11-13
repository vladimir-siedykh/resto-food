import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black'>Review Product</h2>
        <ReviewCard />
        <ReviewCard />
      </div>
    </section>
  );
}

export default Reviews