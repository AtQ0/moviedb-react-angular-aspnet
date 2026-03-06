import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <div [class]="type() === 'poster' ? posterWrapperClass : backdropWrapperClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class Card {
  readonly type = input<'poster' | 'backdrop'>('poster');

  readonly posterWrapperClass =
    'group relative w-fit rounded-md border border-transparent transition-[border-color,opacity] hover:border-white';
  readonly backdropWrapperClass = 'relative';
}

@Component({
  selector: 'app-card-header',
  standalone: true,
  template: `
    <div class="grid gap-2 px-6">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardHeader {}

@Component({
  selector: 'app-card-title',
  standalone: true,
  template: `
    <div class="font-semibold leading-none">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardTitle {}

@Component({
  selector: 'app-card-description',
  standalone: true,
  template: `
    <div class="text-muted-foreground text-sm">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardDescription {}

@Component({
  selector: 'app-card-action',
  standalone: true,
  template: `
    <div class="self-start justify-self-end">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardAction {}

@Component({
  selector: 'app-card-content',
  standalone: true,
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class CardContent {}

@Component({
  selector: 'app-card-footer',
  standalone: true,
  template: `
    <div class="flex items-center px-6 pt-6">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardFooter {}
