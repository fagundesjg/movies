import { IExternalGetAllMoviesData } from 'services/movies/types';

interface ICommon {}

export interface IWithHome extends ICommon {}

export interface IHome extends ICommon {
  moviesData?: IExternalGetAllMoviesData;
}
