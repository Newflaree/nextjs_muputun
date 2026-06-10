import { AdminLayout } from '../layouts';

type AdminPlaceholderViewProps = {
  title: string;
};

export const AdminPlaceholderView = ({ title }: AdminPlaceholderViewProps) => {
  return (
    <AdminLayout title={ title }>
      <section className='rounded-[2.5rem] bg-white/42 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl'>
        <p className='text-sm font-semibold uppercase tracking-[0.28em] text-cyan-600'>
          Próximo módulo
        </p>
        <h2 className='mt-4 text-3xl font-semibold text-slate-950'>
          { title } del store
        </h2>
        <p className='mt-4 max-w-2xl text-base leading-8 text-slate-600'>
          Esta pantalla queda lista como punto de entrada visual y estructural. El siguiente paso es conectar formularios, tablas y casos de uso reales manteniendo este sistema glass.
        </p>
      </section>
    </AdminLayout>
  );
};
