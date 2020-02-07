const getRecordings = id => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {

  })
    .then(res => res.json())
    .then(({ recordings }) => recordings.map(({ title, id }) => ({
      title, id
    })));
};

export default getRecordings;
