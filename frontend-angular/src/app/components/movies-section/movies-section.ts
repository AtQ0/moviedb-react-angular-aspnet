import { Component, computed, input } from '@angular/core';
import { MovieDto } from '../../shared/models/movie.dto';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card/card';

@Component({
  selector: 'app-movies-section',
  imports: [Card, CardContent, CardHeader, CardTitle],
  template: `
    <div class="py-8 text-left">
      <h1 class="text-2xl font-bold">{{ title() }}</h1>
      <ul [class]="isPoster() ? posterListClass : backdropListClass">
        @for (movie of list(); track movie.id) {
          <li [class.w-fit]="isPoster()">
            <app-card class="py-4 overflow-hidden">
              @if (isPoster()) {
                <app-card-content class="p-0">
                  <div
                    class="group relative w-fit rounded-md border border-transparent transition-[border-color,opacity] hover:border-white"
                  >
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
                    >
                      <span class="font-bold text-white">{{ movie.title }}</span>
                      <span class="text-sm text-gray-300">
                        {{ movie.releaseDate ? movie.releaseDate.slice(0, 4) : '—' }}
                      </span>
                    </div>
                  </div>
                </app-card-content>
              } @else if (isBackdrop()) {
                <app-card-header>
                  <app-card-title>{{ movie.title }}</app-card-title>
                </app-card-header>
                <app-card-content class="p-0">
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
    </div>
  `,
})
export class MoviesSection {
  readonly title = input.required<string>();
  readonly movies = input.required<MovieDto[]>();
  readonly limit = input<number | undefined>(undefined);
  readonly type = input<'poster' | 'backdrop'>('poster');

  public readonly list = computed(() => {
    const movies = this.movies();
    const limit = this.limit();
    return limit !== undefined ? movies.slice(0, limit) : movies;
  });

  readonly posterListClass =
    'mt-4 grid grid-cols-2 gap-4 list-none p-0 lg:flex lg:flex-row lg:flex-wrap';
  readonly backdropListClass =
    'mt-4 flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:gap-4 list-none p-0';

  readonly isPoster = computed(() => this.type() === 'poster');
  readonly isBackdrop = computed(() => this.type() === 'backdrop');
}
