import { Provider } from '@nestjs/common';
import { SaveMovieUseCase } from '../ports/in/save-movie.use-case';
import { SaveMovieService } from './save-movie.service';

export const Services: Provider[] = [
  {
    provide: SaveMovieUseCase,
    useClass: SaveMovieService,
  },
];
