import { Component, inject, input } from '@angular/core';
import { Button } from '../ui/button/button';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreDto } from '../../shared/models/movie.dto';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-genre-filter-buttons',
  imports: [Button],
  template: `
    <div class="grid grid-cols-3 gap-2 min-[500px]:grid-cols-[repeat(auto-fill,minmax(130px,1fr))]">
      @for (genre of genres(); track genre.id) {
        <app-button [customClass]="getButtonClass(genre.id)" (click)="onGenreClick(genre.id)">
          {{ genre.name }}
        </app-button>
      }
    </div>
  `,
})
export class GenreFilterButtons {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  readonly genres = input<GenreDto[]>();

  private readonly selectedId = toSignal(
    this.route.queryParams.pipe(map((p) => p['genreId'] ?? null)),
    { initialValue: null as string | null },
  );

  getButtonClass(genreId: number): string {
    const id = this.selectedId();
    const selected = id !== null && id !== undefined && String(genreId) === id;
    return `cursor-pointer w-full h-[42px] max-w-[150px] min-[500px]:flex-1 min-[500px]:min-w-0 text-xs ${selected ? '!bg-white !text-black' : ''}`;
  }

  onGenreClick(genreId: number): void {
    const current = this.selectedId();
    if (current === String(genreId)) {
      this.router.navigate(['/discover'], { queryParams: {} });
    } else {
      this.router.navigate(['/discover'], {
        queryParams: { genreId },
      });
    }
  }
}
