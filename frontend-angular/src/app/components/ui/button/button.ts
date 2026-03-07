import { Component, EventEmitter, input, computed } from '@angular/core';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'xs' | 'sm' | 'lg' | 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  destructive:
    'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
  outline:
    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeClasses: Record<ButtonSize, string> = {
  default: 'h-9 px-4 py-2 has-[>svg]:px-3',
  xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
  sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
  lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
  icon: 'size-9',
  'icon-xs': "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
  'icon-sm': 'size-8',
  'icon-lg': 'size-10',
};

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      type="button"
      [attr.data-slot]="'button'"
      [attr.data-variant]="variant()"
      [attr.data-size]="size()"
      [class]="buttonClass()"
      [disabled]="disabled()"
      (click)="click.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class Button {
  readonly variant = input<ButtonVariant>('default');
  readonly size = input<ButtonSize>('default');
  readonly disabled = input<boolean>(false);
  readonly customClass = input<string>('');
  readonly click = new EventEmitter<MouseEvent>();

  protected readonly buttonClass = computed(() => {
    const base =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl border border-white text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive";
    const v = variantClasses[this.variant()];
    const s = sizeClasses[this.size()];
    const custom = this.customClass() ?? '';
    return [base, v, s, custom].filter(Boolean).join(' ');
  });
}
