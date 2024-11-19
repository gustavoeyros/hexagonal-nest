import { Injectable } from '@nestjs/common';
import { Movie } from 'src/movies/domain/movie';
import { MovieEntity } from './movie-entity';

@Injectable()
export class MovieMapper {
  toEntity(movie: Movie): MovieEntity {
    return MovieEntity.build({
      name: movie.name,
      genre: movie.genre,
      studio: movie.studio,
      rate: movie.rate,
    });
  }
}
