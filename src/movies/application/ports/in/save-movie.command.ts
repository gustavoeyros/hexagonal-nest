export class SaveMovieCommand {
  constructor(
    readonly name: string,
    readonly genre: string,
    readonly studio: string,
    readonly rate: number,
  ) {}
}
