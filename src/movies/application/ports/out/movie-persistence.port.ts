import { Movie } from 'src/movies/domain/movie';

export abstract class MoviePersistencePort {
  abstract persistMovie(movie: Movie): Promise<void>;
}
