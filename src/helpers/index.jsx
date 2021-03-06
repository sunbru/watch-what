import genresDictionary from '../constants/genres.json';

export const findGenre = (id) => {
  return genresDictionary.genres.find(genreType => {
    if (genreType.id === id) {
      return genreType.name
    };
  });
};


export const parsePathname = (pathname) => {
  let query = pathname.split('/')[2];
  return query;
};
