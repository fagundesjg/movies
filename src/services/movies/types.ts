export interface IMeta {
  server_time: number;
  server_timezone: string;
  api_version: number;
  execution_time: string;
}

export interface IMovie {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: Language;
  mpa_rating: MovieMpaRating;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: MovieState;
  torrents: ITorrent[];
  date_uploaded: string;
  date_uploaded_unix: number;
}

export enum Language {
  English = 'English',
}

export enum MovieMpaRating {
  Empty = '',
  PG = 'PG',
  PG13 = 'PG-13',
  R = 'R',
}

export enum MovieState {
  Ok = 'ok',
}

export interface ITorrent {
  url: string;
  hash: string;
  quality: Quality;
  type: Type;
  seeds: number;
  peers: number;
  size: string;
  size_bytes: number;
  date_uploaded: string;
  date_uploaded_unix: number;
}

export enum Quality {
  The1080P = '1080p',
  The720P = '720p',
  The2160p = '2160p',
  The3D = '3D',
}

export enum Type {
  Bluray = 'bluray',
  Web = 'web',
}

export interface IExternalGetAllMoviesData {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: IMovie[];
}

export interface IExternalGetAllMovies {
  status: MovieState;
  status_message: string;
  data: IExternalGetAllMoviesData;
  '@meta': IMeta;
}

export interface IMovieGetAllProps {
  limit?: number;
  page?: number;
  quality?: Quality | 'all';
  minimum_rating?: number;
  query_term?: string;
  genre?: string;
  sort_by?:
    | 'title'
    | 'year'
    | 'rating'
    | 'peers'
    | 'seeds'
    | 'download_count'
    | 'like_count'
    | 'date_added';
  order_by?: 'desc' | 'asc';
  with_rt_ratings?: boolean;
}
