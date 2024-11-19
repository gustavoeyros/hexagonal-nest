import { SaveMovieCommand } from './save-movie.command';

export abstract class SaveMovieUseCase {
  abstract saveMovie(command: SaveMovieCommand): Promise<void>;
}
