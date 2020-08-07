import React from 'react';

import { withHome } from './withHome';
import { MovieCard } from 'components';
import { IHome } from './types';
import * as S from './styles';

const HomeComponent = (props: IHome) => {
  const { moviesData } = props;
  return (
    <S.Container>
      <S.MoviesContainer>
        {moviesData
          ? moviesData.movies.map((movie, key) => (
              <MovieCard
                key={key}
                cover={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres.slice(2)}
                rating={movie.rating}
                year={movie.year}
              />
            ))
          : null}
      </S.MoviesContainer>
      <S.Button>See More</S.Button>
    </S.Container>
  );
};

const Home = withHome(HomeComponent);

export { Home };
