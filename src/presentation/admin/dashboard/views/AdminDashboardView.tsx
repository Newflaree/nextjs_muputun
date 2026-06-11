import NextLink from 'next/link';
import {
  IoArrowForwardOutline,
  IoCartOutline,
  IoCheckmarkCircleOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoPricetagsOutline,
  IoStorefrontOutline,
} from 'react-icons/io5';
import {
  AdminCard,
  AdminSectionHeader,
  AdminStatCard,
  AdminStatusBadge,
} from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';

const stats = [
  ['Productos', '21', 'Catálogo X5 cargado para revisión comercial.', IoPricetagsOutline],
  ['Cotizaciones', '8', 'Solicitudes mock pendientes de seguimiento.', IoCartOutline],
  ['Usuarios', '126', 'Clientes y equipo interno listos para segmentar.', IoPeopleOutline],
  ['Mailing', '3', 'Campañas preparadas para conectar proveedor.', IoMailOutline],
];

const activity = [
  ['X5 RT Multibanda', 'Ficha marcada como destacada', 'Hace 12 min'],
  ['Contacto comercial', 'Nueva solicitud desde formulario', 'Hace 36 min'],
  ['Blog técnico', 'Artículo GNSS listo para publicación', 'Ayer'],
  ['Footer', 'Datos corporativos revisados', 'Ayer'],
];

const modules = [
  ['Productos', '/admin/products', 'Tabla de catálogo, estados, SEO y visibilidad.', IoPricetagsOutline],
  ['Tienda', '/admin/shop', 'Configuración comercial, canales y checkout.', IoStorefrontOutline],
  ['Usuarios', '/admin/users', 'Roles, permisos y accesos administrativos.', IoPeopleOutline],
  ['Mailing', '/admin/mailing', 'Audiencias, campañas y plantillas transaccionales.', IoMailOutline],
];

const checklist = [
  ['Estructura admin', 'Listo'],
  ['Maquetación de rutas', 'En curso'],
  ['Formularios reales', 'Pendiente'],
  ['Conexión HTTP', 'Pendiente'],
];

export const AdminDashboardView = () => {
  return (
    <AdminLayout
      title='Control del store'
      description='Vista ejecutiva para revisar catálogo, cotizaciones, usuarios y comunicaciones antes de conectar datos reales.'
    >
      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(([label, value, description, Icon]) => {
          const StatIcon = Icon as typeof IoPricetagsOutline;

          return (
            <AdminStatCard
              key={ label as string }
              label={ label as string }
              value={ value as string }
              description={ description as string }
              icon={ <StatIcon size={ 21 } /> }
            />
          );
        })}
      </div>

      <div className='mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]'>
        <AdminCard>
          <AdminSectionHeader
            eyebrow='Módulos'
            title='Rutas administrativas'
            description='Estructura tomada del repo store: productos, tienda, usuarios y mailing.'
          />

          <div className='grid gap-4 md:grid-cols-2'>
            {modules.map(([title, href, description, Icon]) => {
              const ModuleIcon = Icon as typeof IoPricetagsOutline;

              return (
                <NextLink
                  key={ href as string }
                  href={ href as string }
                  className='group rounded-[1.6rem] bg-white/54 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition hover:-translate-y-0.5 hover:bg-white/82 hover:shadow-[0_18px_54px_rgba(15,23,42,0.10)]'
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/90 text-white'>
                      <ModuleIcon size={ 22 } />
                    </div>
                    <IoArrowForwardOutline className='text-slate-400 transition group-hover:text-cyan-700' size={ 20 } />
                  </div>
                  <h2 className='mt-5 text-lg font-semibold text-slate-950'>{ title as string }</h2>
                  <p className='mt-2 text-sm leading-6 text-slate-600'>{ description as string }</p>
                </NextLink>
              );
            })}
          </div>
        </AdminCard>

        <AdminCard>
          <AdminSectionHeader
            eyebrow='Actividad'
            title='Últimos movimientos'
            description='Eventos simulados para validar densidad visual y jerarquía del panel.'
          />

          <div className='space-y-3'>
            {activity.map(([title, description, time]) => (
              <div key={ `${ title }-${ time }` } className='flex gap-3 rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <div className='mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-100/80 text-cyan-800'>
                  <IoCheckmarkCircleOutline size={ 18 } />
                </div>
                <div className='min-w-0'>
                  <p className='truncate text-sm font-semibold text-slate-950'>{ title }</p>
                  <p className='mt-1 text-sm leading-5 text-slate-600'>{ description }</p>
                  <p className='mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400'>{ time }</p>
                </div>
              </div>
            ))}
          </div>
        </AdminCard>
      </div>

      <AdminCard className='mt-6'>
        <AdminSectionHeader
          eyebrow='Checklist'
          title='Lo que falta para pasar de maqueta a producto'
          description='La interfaz queda lista visualmente; la siguiente etapa es conectar datos, formularios y permisos reales.'
        />
        <div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
          {checklist.map(([title, status]) => (
            <div key={ title } className='rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
              <p className='text-sm font-semibold text-slate-950'>{ title }</p>
              <div className='mt-3'>
                <AdminStatusBadge tone={ status === 'Listo' ? 'green' : status === 'En curso' ? 'cyan' : 'amber' }>
                  { status }
                </AdminStatusBadge>
              </div>
            </div>
          ))}
        </div>
      </AdminCard>
    </AdminLayout>
  );
};
