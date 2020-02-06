export const getAlbums = id => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {

  })
    .then(res => res.json())
    .then(({ releases }) => releases.map(({ title, date, id }) => ({
      title, name, id
    })));
};
