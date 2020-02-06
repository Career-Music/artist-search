export const getAlbums = id => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`, {

  })
    .then(res => res.json());
};
