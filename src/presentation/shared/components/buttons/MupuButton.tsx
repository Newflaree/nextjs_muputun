import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import NextLink from 'next/link';
import clsx from 'clsx';

type MupuButtonVariant = 'accent' | 'glass' | 'darkGlass' | 'solid';
type MupuButtonSize = 'md' | 'lg';

type MupuButtonProps = {
  ariaLabel?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  external?: boolean;
  href?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  size?: MupuButtonSize;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  variant?: MupuButtonVariant;
};

const variantClasses: Record<MupuButtonVariant, string> = {
  accent: 'border-cyan-200/55 bg-cyan-400/78 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_42px_rgba(8,145,178,0.22)] hover:border-cyan-100/80 hover:bg-cyan-300/88 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_24px_60px_rgba(8,145,178,0.28)]',
  glass: 'border-transparent bg-white/48 text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_18px_42px_rgba(15,23,42,0.10)] hover:bg-white/68 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_24px_58px_rgba(15,23,42,0.13)]',
  darkGlass: 'border-transparent bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_18px_42px_rgba(0,0,0,0.22)] hover:bg-white/22 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.30),0_24px_58px_rgba(0,0,0,0.28)]',
  solid: 'border-slate-950/20 bg-slate-950/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_18px_42px_rgba(15,23,42,0.18)] hover:bg-slate-900 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.20),0_24px_58px_rgba(15,23,42,0.22)]',
};

const sizeClasses: Record<MupuButtonSize, string> = {
  md: 'min-h-12 px-6 text-sm',
  lg: 'min-h-14 px-7 text-[15px]',
};

export const MupuButton = ({
  ariaLabel,
  children,
  className = '',
  disabled = false,
  external = false,
  href,
  iconLeft,
  iconRight,
  onClick,
  size = 'lg',
  type = 'button',
  variant = 'glass',
}: MupuButtonProps) => {
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full border font-semibold leading-none backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/70 disabled:pointer-events-none disabled:opacity-55',
    sizeClasses[size],
    variantClasses[variant],
    className,
  );

  const content = (
    <>
      { iconLeft }
      <span>{ children }</span>
      { iconRight }
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          aria-label={ ariaLabel }
          className={ classes }
          href={ href }
          onClick={ onClick as MouseEventHandler<HTMLAnchorElement> }
          rel='noopener noreferrer'
          target='_blank'
        >
          { content }
        </a>
      );
    }

    return (
      <NextLink
        aria-label={ ariaLabel }
        className={ classes }
        href={ href }
        onClick={ onClick as MouseEventHandler<HTMLAnchorElement> }
      >
        { content }
      </NextLink>
    );
  }

  return (
    <button
      aria-label={ ariaLabel }
      className={ classes }
      disabled={ disabled }
      onClick={ onClick as MouseEventHandler<HTMLButtonElement> }
      type={ type }
    >
      { content }
    </button>
  );
};
