import React from 'react';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const ArtistItem = ({ name, disambiguation }) => {
  return (
    <>
      <section>
        <div>
          <h3 styles={ styles.name }>{ name } -</h3>
          <p>{ disambiguation }</p>
        </div>
      </section>
    </>
  );
};
ArtistItem.propTypes = {
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default ArtistItem;
