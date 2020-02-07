import { useState, useEffect } from 'react';
import getRecordings from '../services/recordings-api';

const useRecordings = (albumId) => {
  const [recordings, setRecordings] = useState([]);

  const fetchRecordings = (id) => {
    getRecordings(id)
      .then((res) => {
        setRecordings(res);
      });
  };

  useEffect(() => {
    fetchRecordings(albumId);
  }, []);
  return { recordings };
};

export default useRecordings;
