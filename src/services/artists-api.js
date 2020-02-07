<<<<<<< HEAD
// export const getArtists = searchTerm => {
//   return fetch(
//     `http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25`
//   ).then(res => res.json());

// };

export const getArtists = searchTerm => {
  return fetch(
    `https://cors-anywhere.herokuapp.com/http://musicbrainz.org/ws/2/artist?query='${searchTerm}'&fmt=json&limit=25`,
    { headers: { origin: null } }
  )
    .then(res => res.json())
    .then(({ artists }) => artists);
};
=======
export const getArtists = searchTerm => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchTerm}&fmt=json&limit=25${searchTerm}`, {

  })
    .then(res => res.json())
    .then(artists => artists.map(({ name, id }) => ({
      name, id
    })));
  };
>>>>>>> d20b6baa5e99c1ce01bdb4e1c2a5282d41014bc6
