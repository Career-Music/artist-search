const getAlbums = artistId => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {

  })
    .then(res => res.json())
    .then(({ releases }) => {
      const mungedReleases = releases.map((release) => ({
        title: release.title, date: release.date, id: release.id, hasArt:release['cover-art-archive'].front
      }));
      return mungedReleases;
    });
};

export default getAlbums;
