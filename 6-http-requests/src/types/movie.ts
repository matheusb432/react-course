export class MovieModel {
  id: string;
  title: string;
  releaseDate: string;
  openingText: string;

  constructor(
    id?: string,
    title?: string,
    releaseDate?: string,
    openingText?: string
  ) {
    this.id = id ?? '';
    this.title = title ?? '';
    this.releaseDate = releaseDate ?? '';
    this.openingText = openingText ?? '';
  }
}
