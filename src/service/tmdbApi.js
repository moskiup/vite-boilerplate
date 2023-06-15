import axiosClient from './axiosClient';

export const category = {
  movie: 'movie',
  tv: 'tv',
};

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
};

export const tvType = {
  upcoming: 'upcoming',
  on_the_air: 'on_the_air',
  top_rated: 'top_rated',
};

const tmdApi = {
  getMovieList: (type, params) => {
    const url = 'movie/' + movieType[type];
    return axiosClient.get(url, { params: params });
  },
};

export default tmdApi;
