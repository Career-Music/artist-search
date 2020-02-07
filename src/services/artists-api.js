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
