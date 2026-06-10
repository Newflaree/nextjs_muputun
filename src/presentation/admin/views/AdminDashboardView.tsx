import { AdminLayout } from '../layouts';

const stats = [
  ['Productos', 'Catálogo X5'],
  ['Tienda', 'Configuración base'],
  ['Usuarios', 'Accesos privados'],
  ['Mailing', 'Comunicaciones'],
];

export const AdminDashboardView = () => {
  return (
    <AdminLayout title='Control del store'>
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(([title, description]) => (
          <article
            key={ title }
            className='rounded-[2rem] bg-white/42 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.72),0_20px_64px_rgba(15,23,42,0.08)] backdrop-blur-2xl'
          >
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-cyan-600'>
              { title }
            </p>
            <p className='mt-4 text-2xl font-semibold text-slate-950'>
              { description }
            </p>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              Estructura preparada para conectar datos reales del backend del store.
            </p>
          </article>
        ))}
      </div>
    </AdminLayout>
  );
};
