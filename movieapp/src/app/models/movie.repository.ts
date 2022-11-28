import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  public populerFilmler: Movie[];

  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'Film 1',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta qui aliquid eaque asperiores molestiae, accusantium, inventore repudiandae rerum facere ut libero officia dolor iure, sed obcaecati explicabo? Repellendus, asperiores.',
        imageUrl: '1.jpeg',
        isPopular: true,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 2,
        title: 'Film 2',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta qui aliquid eaque asperiores molestiae, accusantium, inventore repudiandae rerum facere ut libero officia dolor iure, sed obcaecati explicabo? Repellendus, asperiores.',
        imageUrl: '2.jpeg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 3,
        title: 'Film 3',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta qui aliquid eaque asperiores molestiae, accusantium, inventore repudiandae rerum facere ut libero officia dolor iure, sed obcaecati explicabo? Repellendus, asperiores.',
        imageUrl: '3.jpeg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 4,
        title: 'Film 4',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta qui aliquid eaque asperiores molestiae, accusantium, inventore repudiandae rerum facere ut libero officia dolor iure, sed obcaecati explicabo? Repellendus, asperiores.',
        imageUrl: '4.jpeg',
        isPopular: false,
        datePublished: new Date(1990, 10, 10),
      },
      {
        id: 5,
        title: 'Film 5',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta qui aliquid eaque asperiores molestiae, accusantium, inventore repudiandae rerum facere ut libero officia dolor iure, sed obcaecati explicabo? Repellendus, asperiores.',
        imageUrl: '4.jpeg',
        isPopular: true,
        datePublished: new Date(1990, 10, 10),
      },
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
