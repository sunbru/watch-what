import {parsePathname} from '../helpers';

const API_KEY = process.env.REACT_APP_API_KEY;
const OMDB_API_KEY = process.env.REACT_APP_API_KEY_OMDB;


export const fetchOMDBMovie = async (query) => {
  let parsedQuery = parsePathname(query);
  const URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${parsedQuery}`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body;
};

export const fetchMovie = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
};

export const fetchPopular = async () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1&region=US`;
  const response = await fetch(URL);
  const body = await response.json();
  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.results;
};

export const fetchLatest = async () => {
  const URL = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
};

export const fetchUpcoming = async () => {
  const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
};

export const fetchTopRated = async () => {
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
}
