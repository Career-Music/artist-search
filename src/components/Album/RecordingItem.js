import React from 'react';
import {Link} from 'react-router-dom';
const RecordingItem = ({ title, artistName }) => {

  return (
    <>
      <Link to={ `/lyrics/${artistName}/${title}` }>
        <li>{ title.title }</li>
      </Link>
    </>
  );
};

export default RecordingItem;
