import { MoviePersistencePort } from 'src/movies/application/ports/out/movie-persistence.port';
import { Movie } from 'src/movies/domain/movie';
import { MovieEntity } from './movie-entity';
import { MovieMapper } from './movie-mapper';

export class MoviePersistenceAdapter implements MoviePersistencePort {
  constructor(private movieMapper: MovieMapper) {}

  async persistMovie(movie: Movie): Promise<void> {
    const movieEntity: MovieEntity = this.movieMapper.toEntity(movie);
    movieEntity.save();
  }
}
