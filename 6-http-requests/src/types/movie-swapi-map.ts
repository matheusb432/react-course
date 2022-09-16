import { AddMap } from 'mapper-ts/lib-esm';

export class MovieSwapiMap {
  @AddMap('episode_id')
  id: number;
  title: string;
  @AddMap('release_date')
  releaseDate: string;
  @AddMap('opening_crawl')
  openingText: string;

  constructor(
    id?: number,
    title?: string,
    releaseDate?: string,
    openingText?: string
  ) {
    this.id = id ?? 0;
    this.title = title ?? '';
    this.releaseDate = releaseDate ?? '';
    this.openingText = openingText ?? '';
  }
}
