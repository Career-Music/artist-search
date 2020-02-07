const getAlbumArt = id => {
  return fetch(`http://coverartarchive.org/release/${id}/front`, {

  })
    .then(res => res.json());
};

export default getAlbumArt;
