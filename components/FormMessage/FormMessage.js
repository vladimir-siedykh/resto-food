import styles from './FormMessage.module.css';

const FormMessage = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <h2 className='heading-1-black text-center'>Write us a Message</h2>
          <form
            className={styles.form}
            onSubmit={() => console.log('Message sent')}
          >
            <div className={styles.formControl}>
              <input
                type='text'
                name='firstName'
                className={styles.input}
                placeholder='First Name'
              />
              <input
                type='text'
                name='lastName'
                className={styles.input}
                placeholder='Last Name'
              />
              <input
                type='number'
                name='phone'
                className={styles.input}
                placeholder='Phone number'
              />
              <input
                type='email'
                name='email'
                className={styles.input}
                placeholder='Email'
              />
            </div>
            <textarea className={styles.textarea} name="message" cols="30" rows="5" placeholder='Message'></textarea>
            <button type='submit' className={`btn ${styles.btn}`}>Send a Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormMessage;
