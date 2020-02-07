import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const Artist = ({ name, disambiguation }) => {
  return (
    <>
      <section>
        <div>
          <h3 styles={styles.name}>{name} -</h3>
          <p>{disambiguation}</p>
        </div>
      </section>
    </>
  );
};
Artist.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default Artist;
