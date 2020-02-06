import React from 'react';
import PropTypes from 'prop-types';

const Artist = name => {
  return (
    <>
      <section>
        <div>
          <h3>{name}</h3>
        </div>
      </section>
    </>
  );
};
Artist.propTypes = {
  name: PropTypes.string.isRequired
};

export default Artist;
