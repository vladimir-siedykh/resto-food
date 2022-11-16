import React from 'react';

const Map = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.455574752554!2d3.379236314769235!3d6.524356995493409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8f7f0f4b0a5d%3A0x4f8b0a2b2b3b0c7!2sThe%20Ozone%20Restaurant!5e0!3m2!1sen!2sng!4v1625581000000!5m2!1sen!2sng'
          width='100%'
          height='450'
          allowFullScreen=''
          style={{ border: '1px solid grey', borderRadius: '2.4rem' }}
          loading='lazy'
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
