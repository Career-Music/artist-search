const getAlbums = (artistId, page) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=25&offset=${(page - 1) * 25}`, {

  })
    .then(res => res.json())
    .then((res) => {
      const mungedReleases = res.releases.map((release) => ({
        title: release.title, date: release.date, id: release.id, hasArt:release['cover-art-archive'].front
      }));
      return { albums:mungedReleases, count: res.releases['release-count'] };
    });
};

export default getAlbums;
