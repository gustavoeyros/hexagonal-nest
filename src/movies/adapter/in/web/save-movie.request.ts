import { IsNotEmpty } from '@nestjs/class-validator';
import { SaveMovieCommand } from 'src/movies/application/ports/in/save-movie.command';

export class SaveMovieRequest {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly genre: string;

  @IsNotEmpty()
  readonly studio: string;

  @IsNotEmpty()
  readonly rate: number;

  toCommand() {
    return new SaveMovieCommand(this.name, this.genre, this.studio, this.rate);
  }
}
