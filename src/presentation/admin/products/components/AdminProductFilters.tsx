import { IoSearchOutline } from 'react-icons/io5';

type AdminProductFiltersProps = {
  filters: string[];
};

export const AdminProductFilters = ({ filters }: AdminProductFiltersProps) => (
  <div className='mb-5 grid gap-3 lg:grid-cols-[1fr_auto]'>
    <div className='flex h-12 items-center gap-3 rounded-full bg-white/62 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
      <IoSearchOutline className='text-slate-400' size={ 18 } />
      <span className='text-sm text-slate-500'>Buscar por nombre, slug o categoría</span>
    </div>
    <div className='flex flex-wrap gap-2'>
      {filters.map((filter) => (
        <span key={ filter } className='inline-flex h-12 items-center rounded-full bg-white/58 px-4 text-sm font-semibold text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
          { filter }
        </span>
      ))}
    </div>
  </div>
);

