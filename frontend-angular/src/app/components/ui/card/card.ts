import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  template: `
    <div class="bg-card text-card-foreground rounded-xl border shadow-sm p-6 flex flex-col gap-6">
      <ng-content></ng-content>
    </div>
  `,
})
export class Card {}

@Component({
  selector: 'app-card-header',
  imports: [],
  template: `
    <div class="grid gap-2 px-6">
      <ng-content></ng-content>
    </div>
  `,
})
export class CardHeader {}

@Component({
  selector: 'app-card-title',
  imports: [],
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
    <div class="px-6">
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
