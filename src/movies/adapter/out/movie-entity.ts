import { IsNotEmpty } from '@nestjs/class-validator';
import { Model } from 'sequelize';
import { Column, DataType, Table } from 'sequelize-typescript';

@Table
export class MovieEntity extends Model<MovieEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  genre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @IsNotEmpty()
  studio: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  @IsNotEmpty()
  rate: number;
}
