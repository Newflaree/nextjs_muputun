import {
  AdminCard,
  AdminSectionHeader,
} from '@/presentation/admin/components';

type AdminProductsBacklogProps = {
  items: string[];
};

export const AdminProductsBacklog = ({ items }: AdminProductsBacklogProps) => (
  <AdminCard>
    <AdminSectionHeader
      eyebrow='Pendiente'
      title='Backlog técnico'
      description='Tareas necesarias para que productos deje de ser maqueta.'
    />
    <div className='space-y-3'>
      {items.map((item) => (
        <div key={ item } className='rounded-[1.4rem] bg-white/54 p-4 text-sm leading-6 text-slate-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
          { item }
        </div>
      ))}
    </div>
  </AdminCard>
);

