import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, map, catchError, of } from 'rxjs';
import type { MovieDto, GenreDto } from '../shared/models/movie.dto';

export type DashboardState = {
  loading: boolean;
  error: string | null;
  trending: MovieDto[];
  rated: MovieDto[];
  playing: MovieDto[];
};

export type DiscoverState = {
  loading: boolean;
  error: string | null;
  movies: MovieDto[];
  genres: GenreDto[];
};

export type DiscoverMoviesResult = {
  loading: boolean;
  error: string | null;
  movies: MovieDto[];
};

@Injectable({ providedIn: 'root' })
export class MovieService {
  private readonly http = inject(HttpClient);

  getDashboardData(): Observable<DashboardState> {
    return forkJoin({
      trending: this.http.get<MovieDto[]>('/api/movies/trending'),
      rated: this.http.get<MovieDto[]>('/api/movies/rated'),
      playing: this.http.get<MovieDto[]>('/api/movies/playing'),
    }).pipe(
      map(({ trending, rated, playing }) => ({
        loading: false,
        error: null,
        trending,
        rated,
        playing,
      })),
      catchError((err) =>
        of({
          loading: false,
          error: err?.message ?? 'Request failed',
          trending: [],
          rated: [],
          playing: [],
        } as DashboardState),
      ),
    );
  }

  getGenres(): Observable<GenreDto[]> {
    return this.http.get<GenreDto[]>('/api/movies/genres').pipe(
      map((list) => (Array.isArray(list) ? list : [])),
      catchError(() => of([])),
    );
  }

  getDiscoverMovies(params?: {
    genreId?: string;
    query?: string;
  }): Observable<DiscoverMoviesResult> {
    let discoverParams = new HttpParams();
    if (params?.genreId) {
      discoverParams = discoverParams.set('genreId', params.genreId);
    }
    if (params?.query?.trim()) {
      discoverParams = discoverParams.set('query', params.query.trim());
    }
    return this.http.get<MovieDto[]>('/api/movies/discover', { params: discoverParams }).pipe(
      map((movies) => ({
        loading: false,
        error: null,
        movies: Array.isArray(movies) ? movies : [],
      })),
      catchError((err) =>
        of({
          loading: false,
          error: err?.message ?? 'Request failed',
          movies: [],
        } as DiscoverMoviesResult),
      ),
    );
  }

  getDiscoverData(params?: { genreId?: string; query?: string }): Observable<DiscoverState> {
    let discoverParams = new HttpParams();
    if (params?.genreId) {
      discoverParams = discoverParams.set('genreId', params.genreId);
    }
    if (params?.query?.trim()) {
      discoverParams = discoverParams.set('query', params.query.trim());
    }
    return forkJoin({
      genres: this.http.get<GenreDto[]>('/api/movies/genres'),
      movies: this.http.get<MovieDto[]>('/api/movies/discover', {
        params: discoverParams,
      }),
    }).pipe(
      map(({ genres, movies }) => ({
        loading: false,
        error: null,
        genres,
        movies: Array.isArray(movies) ? movies : [],
      })),
      catchError((err) =>
        of({
          loading: false,
          error: err?.message ?? 'Request failed',
          genres: [],
          movies: [],
        } as DiscoverState),
      ),
    );
  }
}
