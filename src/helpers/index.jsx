import genresDictionary from '../constants/genres.json';

export const findGenre = (id) => {
  console.log(id)
  return genresDictionary.genres.find(genreType => {
    console.log(genreType)
    if (genreType.id === id) {
      return genreType.name
    };
  });
};
