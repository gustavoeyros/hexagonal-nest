import { Injectable } from '@nestjs/common';
import { SaveMovieUseCase } from '../ports/in/save-movie.use-case';
import { MoviePersistencePort } from '../ports/out/movie-persistence.port';
import { SaveMovieCommand } from '../ports/in/save-movie.command';
import { Movie } from 'src/movies/domain/movie';

@Injectable()
export class SaveMovieService implements SaveMovieUseCase {
  constructor(private moviePersistencePort: MoviePersistencePort) {}

  async saveMovie(command: SaveMovieCommand): Promise<void> {
    const movie: Movie = {
      name: command.name,
      genre: command.genre,
      studio: command.studio,
      rate: command.rate,
    };

    await this.moviePersistencePort.persistMovie(movie);
  }
}
