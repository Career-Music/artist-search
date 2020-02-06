const munge = str => str.split(' ').join('+');

export const getArtists = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${munge(artist)}/${munge(title)}`, {

  })
    .then(res => res.json())
    .then(({lyrics}) => lyrics);
  };