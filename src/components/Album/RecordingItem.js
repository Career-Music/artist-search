import React from 'react';

const RecordingItem = ({ title, artistName }) => {

  return (
    <>
      <Link to={ `/lyrics/${artistName}/${title}` }>
        <li>{ title }</li>
      </Link>
    </>
  );
};

export default RecordingItem;
