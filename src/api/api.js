const API_KEY = "ad582d7901f282e1ce64f9d924159440";

// export const getPopularMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//   ).then((response) => response.json());
// };
export const getPopularMovies = (page) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  ).then((response) => response.json());
};

export const getMovie = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};

export const getMovieByKeyword = (keyword) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keyword}`
  ).then((response) => response.json());
};

export const getMoviesByGenres = (selectedGenres) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenres}`
  ).then((response) => response.json());
};

export const getGenres = () => {
  return fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then((response) => response.json());
};
