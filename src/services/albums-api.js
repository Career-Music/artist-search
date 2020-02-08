const getAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {

  })
    .then(res => res.json())
    .then(({ releases }) => {
      const mungedReleases = releases.map(({ title, date, id }) => ({
        title, date, id
      }));
      console.log(mungedReleases);
      return mungedReleases;
    });
};

export default getAlbums;
