import styles from './FormReservation.module.css';

const FormReservation = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <h2 className='heading-1-black text-center'>Book a Table</h2>
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
              <select name='person' className={styles.input}>
                <option value='0'>Select person</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
              </select>
              <input className={styles.input} type="date" name="date" placeholder='Select date'/>
              <input className={styles.input} type="datetime" name="datetime" id="" placeholder='Select time'/>
            </div>
            <textarea
              className={styles.textarea}
              name='message'
              cols='30'
              rows='5'
              placeholder='Message'
            ></textarea>
            <button type='submit' className={`btn ${styles.btn}`}>
              Send a Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormReservation;
