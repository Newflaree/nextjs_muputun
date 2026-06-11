import type { ReactNode } from 'react';
import clsx from 'clsx';

type AdminCardProps = {
  children: ReactNode;
  className?: string;
};

type AdminSectionHeaderProps = {
  action?: ReactNode;
  description?: string;
  eyebrow?: string;
  title: string;
};

type AdminStatusBadgeProps = {
  children: ReactNode;
  tone?: 'slate' | 'cyan' | 'green' | 'amber' | 'red';
};

type AdminStatCardProps = {
  description: string;
  icon: ReactNode;
  label: string;
  value: string;
};

const badgeToneClasses: Record<NonNullable<AdminStatusBadgeProps['tone']>, string> = {
  amber: 'bg-amber-100/78 text-amber-800',
  cyan: 'bg-cyan-100/78 text-cyan-800',
  green: 'bg-emerald-100/78 text-emerald-800',
  red: 'bg-rose-100/78 text-rose-800',
  slate: 'bg-slate-100/78 text-slate-700',
};

export const AdminCard = ({ children, className = '' }: AdminCardProps) => (
  <section
    className={ clsx(
      'rounded-[2rem] bg-white/58 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.76),0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-6',
      className,
    ) }
  >
    { children }
  </section>
);

export const AdminSectionHeader = ({
  action,
  description,
  eyebrow,
  title,
}: AdminSectionHeaderProps) => (
  <div className='mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
    <div>
      {eyebrow && (
        <p className='text-xs font-semibold uppercase tracking-[0.24em] text-cyan-700'>
          { eyebrow }
        </p>
      )}
      <h2 className='mt-2 text-2xl font-semibold tracking-normal text-slate-950'>
        { title }
      </h2>
      {description && (
        <p className='mt-2 max-w-2xl text-sm leading-6 text-slate-600'>
          { description }
        </p>
      )}
    </div>
    { action }
  </div>
);

export const AdminStatusBadge = ({ children, tone = 'slate' }: AdminStatusBadgeProps) => (
  <span className={ clsx('inline-flex h-8 items-center rounded-full px-3 text-xs font-semibold', badgeToneClasses[tone]) }>
    { children }
  </span>
);

export const AdminStatCard = ({
  description,
  icon,
  label,
  value,
}: AdminStatCardProps) => (
  <AdminCard className='flex min-h-[168px] flex-col justify-between'>
    <div className='flex items-start justify-between gap-4'>
      <p className='text-xs font-semibold uppercase tracking-[0.22em] text-slate-500'>
        { label }
      </p>
      <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'>
        { icon }
      </div>
    </div>
    <div>
      <p className='text-3xl font-semibold tracking-normal text-slate-950'>
        { value }
      </p>
      <p className='mt-2 text-sm leading-6 text-slate-600'>
        { description }
      </p>
    </div>
  </AdminCard>
);
