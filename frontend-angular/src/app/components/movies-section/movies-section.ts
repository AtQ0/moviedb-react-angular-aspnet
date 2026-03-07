import { Component, computed, input } from '@angular/core';
import type { MovieDto } from '../../shared/models/movie.dto';
import type { GenreDto } from '../../shared/models/movie.dto';
import { Card, CardContent } from '../ui/card/card';
import { GenreFilterButtons } from '../genre-filter-buttons/genre-filter-buttons';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [Card, CardContent, GenreFilterButtons],
  template: `
    <div class="text-left">
      <h1 class="text-2xl font-bold">{{ title() }}</h1>

      @if (showGenreFilters() && (genres()?.length ?? 0) > 0) {
        <app-genre-filter-buttons [genres]="genres()!" />
      }

      @if (moviesLoading()) {
        <p class="mt-4 text-muted-foreground">Loading movies…</p>
      } @else if (moviesError()) {
        <p class="mt-4 text-red-500">{{ moviesError() }}</p>
      } @else {
        <ul [class]="isPoster() ? posterListClass : backdropListClass">
          @for (movie of list(); track movie.id) {
            <li [class.w-fit]="isPoster()">
              <app-card [type]="type()">
                @if (isPoster()) {
                  <app-card-content>
                    @if (movie.posterUrl) {
                      <img
                        [src]="movie.posterUrl"
                        [alt]="movie.title"
                        class="w-full rounded-md object-cover lg:w-52"
                      />
                    } @else {
                      <div
                        class="aspect-2/3 w-full min-w-32 rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground"
                      >
                        No poster
                      </div>
                    }
                    <div
                      class="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-black/50 p-2 text-center opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    >
                      <span class="font-bold text-white">{{ movie.title }}</span>
                      <span class="text-sm text-gray-300">
                        {{ movie.releaseDate ? movie.releaseDate.slice(0, 4) : '—' }}
                      </span>
                    </div>
                  </app-card-content>
                } @else if (isBackdrop()) {
                  <app-card-content>
                    <div class="relative">
                      @if (movie.backdropUrl) {
                        <img
                          [src]="movie.backdropUrl"
                          [alt]="movie.title"
                          class="rounded-md object-cover w-full"
                        />
                      } @else {
                        <div
                          class="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-xs text-muted-foreground"
                        >
                          No image
                        </div>
                      }
                      <div class="bg-black/50 absolute bottom-0 left-0 right-0 p-2">
                        <h2 class="text-lg font-bold">{{ movie.title }}</h2>
                        <p class="text-sm text-gray-500">
                          {{ movie.releaseDate ? movie.releaseDate.slice(0, 4) : '—' }}
                        </p>
                      </div>
                    </div>
                  </app-card-content>
                }
              </app-card>
            </li>
          }
        </ul>
      }
    </div>
  `,
})
export class MoviesSection {
  readonly title = input.required<string>();
  readonly movies = input.required<MovieDto[]>();
  readonly limit = input<number | undefined>(undefined);
  readonly type = input<'poster' | 'backdrop'>('poster');
  readonly showGenreFilters = input<boolean>(false);
  readonly genres = input<GenreDto[] | undefined>(undefined);
  readonly moviesLoading = input<boolean>(false);
  readonly moviesError = input<string | null>(null);

  readonly list = computed(() => {
    const movies = this.movies();
    const limit = this.limit();
    return limit !== undefined ? movies.slice(0, limit) : movies;
  });

  readonly posterListClass =
    'mt-4 grid grid-cols-2 gap-5 list-none p-0 lg:flex lg:flex-row lg:flex-wrap';
  readonly backdropListClass =
    'mt-4 flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:gap-4 list-none p-0';

  readonly isPoster = computed(() => this.type() === 'poster');
  readonly isBackdrop = computed(() => this.type() === 'backdrop');
}
