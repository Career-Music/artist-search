export const getAlbumArt = id => {
  return fetch(`http://coverartarchive.org/release/${id}/front`, {

  })
    .then(res => res.json())
    .then(({ releases }) => releases.map(({ title, date, id }) => ({
      title, name, id
    })));
};
