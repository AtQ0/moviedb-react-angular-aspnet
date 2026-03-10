import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [LucideAngularModule, FormsModule],
  template: `
    <form
      class="flex items-center rounded-full pl-0.5 relative sm:max-w-[385px] w-full py-1"
      (ngSubmit)="onSubmit()"
    >
      <lucide-icon
        name="search"
        class="absolute left-1 top-1.25 text-gray-600 pointer-events-none"
        size="22"
      >
      </lucide-icon>

      <input
        type="search"
        name="q"
        [(ngModel)]="query"
        class="rounded-full shadow-none border-0 bg-gray-50 pl-8 text-gray-600 w-full h-8"
        placeholder="Search movie titles"
      />
    </form>
  `,
})
export class SearchBar {
  query = '';

  private readonly router = inject(Router);

  onSubmit() {
    const q = this.query.trim();
    this.router.navigate(['/discover'], { queryParams: q ? { q } : {} });
    this.query = '';
  }
}
