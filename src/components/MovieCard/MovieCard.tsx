import React, { memo } from 'react';
import { FaStar } from 'react-icons/fa';

import { IMovieCard } from './types';
import * as S from './styles';

const MovieCardComponent = (props: IMovieCard) => {
  const { cover, title, rating, genres, year } = props;

  return (
    <S.Container>
      <S.Cover src={cover}>
        <S.Backdoor>
          <FaStar className="hide" size={25} />
          <S.Text className="rating hide">{`${rating} / 10`}</S.Text>
          {genres.map((genre, key) => (
            <S.Text key={key} className="genre hide">
              {genre}
            </S.Text>
          ))}
          <S.Button>View details</S.Button>
        </S.Backdoor>
      </S.Cover>
      <S.Title>{title}</S.Title>
      <S.Year>{year}</S.Year>
    </S.Container>
  );
};

const MovieCard = memo(MovieCardComponent);

export { MovieCard };
