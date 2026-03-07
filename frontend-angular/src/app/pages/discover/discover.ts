import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap, map, startWith } from 'rxjs/operators';
import { MovieService } from '../../services/movie.service';
import type { GenreDto, MovieDto } from '../../shared/models/movie.dto';
import { MoviesSection } from '../../components/movies-section/movies-section';
import { GenreFilterButtons } from '../../components/genre-filter-buttons/genre-filter-buttons';

const DISCOVER_GENRE_NAMES = [
  'Action',
  'Science Fiction',
  'Adventure',
  'Fantasy',
  'War',
  'Animation',
  'Drama',
  'Horror',
];

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [MoviesSection, GenreFilterButtons],
  template: `
    <div class="py-2 text-left flex flex-col gap-6 pt-15 sm:pt-6">
      @if ((filteredGenres()?.length ?? 0) > 0) {
        <app-genre-filter-buttons [genres]="filteredGenres()!" />
      }
      <div>
        <h1 class="text-2xl font-bold">Discover</h1>

        <app-movies-section
          title=""
          [movies]="moviesResult()?.movies ?? []"
          [moviesLoading]="moviesResult()?.loading ?? false"
          [moviesError]="moviesResult()?.error ?? null"
        />
      </div>
    </div>
  `,
})
export class Discover {
  private readonly route = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);

  readonly moviesResult = toSignal(
    this.route.queryParams.pipe(
      switchMap((params) => {
        const req$ = this.movieService.getDiscoverMovies({
          genreId: params['genreId'] ?? undefined,
          query: params['q'] ?? undefined,
        });
        return req$.pipe(
          map((result) => ({ ...result, loading: false })),
          startWith({
            loading: true,
            error: null,
            movies: [] as MovieDto[],
          }),
        );
      }),
    ),
    {
      initialValue: {
        loading: true,
        error: null as string | null,
        movies: [] as MovieDto[],
      },
    },
  );

  readonly filteredGenres = toSignal(
    this.movieService
      .getGenres()
      .pipe(map((genres) => genres.filter((g) => DISCOVER_GENRE_NAMES.includes(g.name)))),
    { initialValue: [] as GenreDto[] },
  );
}
