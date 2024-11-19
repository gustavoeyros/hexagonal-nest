import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SaveMovieCommand } from 'src/movies/application/ports/in/save-movie.command';
import { SaveMovieUseCase } from 'src/movies/application/ports/in/save-movie.use-case';
import { SaveMovieRequest } from './save-movie.request';

@Controller('save-movie')
export class SaveMovieController {
  constructor(private readonly saveMovieUseCase: SaveMovieUseCase) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  save(@Body() request: SaveMovieRequest) {
    const command: SaveMovieCommand = request.toCommand();
    return this.saveMovieUseCase.saveMovie(command);
  }
}
