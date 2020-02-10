const getRecordings = id => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`, {

  })
    .then(res => res.json())
    .then(({ recordings }) => {
      console.log(recordings);
      return recordings.map(({ title, id }) => ({
        title, id
      }));
    });
};

export default getRecordings;
