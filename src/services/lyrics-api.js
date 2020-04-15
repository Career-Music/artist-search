const munge = str => str.split(' ').join('+');

const getLyrics = (artist, title) => {
  return fetch(`https://api.lyrics.ovh/v1/${munge(artist)}/${munge(title)}`, {

  })
    .then(res => res.json())
    .then(({ lyrics }) => lyrics);
};

export default getLyrics;
