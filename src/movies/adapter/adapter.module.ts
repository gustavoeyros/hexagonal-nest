import { forwardRef, Module } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MovieEntity } from './out/movie-entity';
import { ServicesOut } from './out';
import { SaveMovieController } from './in/web/save-movie.controller';

@Module({
  imports: [
    forwardRef(() => ApplicationModule),
    SequelizeModule.forFeature([MovieEntity]),
  ],
  providers: [...ServicesOut],
  exports: [...ServicesOut],
  controllers: [SaveMovieController],
})
export class AdapterModule {}
