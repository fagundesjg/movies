import React, { useState, useEffect } from 'react';

import { IWithHome } from '../types';
import { IExternalGetAllMoviesData } from 'services/movies/types';
import { MoviesService } from 'services/movies';

const withHome = (WrappedComponent: React.ElementType) => {
  const WithHomeHOC = (props: IWithHome) => {
    const [moviesData, setMoviesData] = useState<IExternalGetAllMoviesData>();

    useEffect(() => {
      async function handleFetchMoviesData() {
        try {
          const m = await MoviesService.getAll({ limit: 10 });
          setMoviesData(m.data);
        } catch (err) {}
      }
      handleFetchMoviesData();
    }, []);

    return <WrappedComponent moviesData={moviesData} {...props} />;
  };

  return WithHomeHOC;
};

export { withHome };
