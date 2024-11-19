import { Provider } from '@nestjs/common';
import { MoviePersistencePort } from 'src/movies/application/ports/out/movie-persistence.port';
import { MoviePersistenceAdapter } from './movie-persistence.adapter';
import { MovieMapper } from './movie-mapper';

export const ServicesOut: Provider[] = [
  {
    provide: MoviePersistencePort,
    useClass: MoviePersistenceAdapter,
  },
  MovieMapper,
];
