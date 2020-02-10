import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Artist.css';

const ArtistItem = ({ id, name, disambiguation }) => {

  return (
    <section>
      <div>
        <Link to={`/artist/${name}/id/${id}`}>
          <h3 styles={ styles.name }>{ name } -</h3>
          <p>{ disambiguation }</p>
        </Link>
      </div>
    </section>
  );
};
ArtistItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disambiguation: PropTypes.string
};

export default ArtistItem;
