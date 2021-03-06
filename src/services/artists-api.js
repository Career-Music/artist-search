const getArtists = (searchTerm, page) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query='${searchTerm}'&fmt=json&limit=25&offset=${(page - 1) * 25}`)
    .then(res => res.json())
    .then(({ artists }) => artists);
};

export default getArtists;
