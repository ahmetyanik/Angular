import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  public populerFilmler: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Film 1',
        description: 'Film 1 Aciklama',
        imageUrl: '1.jpeg',
        isPopular: true,
      },
      {
        id: 2,
        title: 'Film 2',
        description: 'Film 2 Aciklama',
        imageUrl: '2.jpeg',
        isPopular: false,
      },
      {
        id: 3,
        title: 'Film 3',
        description: 'Film 3  Aciklama',
        imageUrl: '3.jpeg',
        isPopular: false,
      },
      {
        id: 4,
        title: 'Film 4',
        description: 'Film 4 Aciklama',
        imageUrl: '4.jpeg',
        isPopular: false,
      },
      {
        id: 5,
        title: 'Film 5',
        description: 'Film 5 Aciklama',
        imageUrl: '4.jpeg',
        isPopular: true,
      }
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find((i) => i.id === id);
  }

  getPopularMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopular === true);
  }
}
