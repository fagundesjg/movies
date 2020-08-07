import { apis } from 'services/api';
import { IExternalGetAllMovies, IMovieGetAllProps } from './types';

const { yts } = apis;

const MoviesService = {
  getAll: async (props?: IMovieGetAllProps): Promise<IExternalGetAllMovies> => {
    const params = Object.entries(props ?? {})
      .map(
        ([key, value]) =>
          encodeURIComponent(key) + '=' + encodeURIComponent(value)
      )
      .join('&');

    const { data } = await yts.get(`/list_movies.json?${params}`);
    return data;
  },
};

export { MoviesService };
