import {
  IoLockClosedOutline,
  IoPeopleOutline,
  IoPersonAddOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import {
  AdminCard,
  AdminSectionHeader,
  AdminStatCard,
  AdminStatusBadge,
} from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';

const userStats = [
  ['Usuarios', '126', 'Clientes y equipo interno en maqueta.', IoPeopleOutline],
  ['Administradores', '4', 'Accesos internos con permisos altos.', IoShieldCheckmarkOutline],
  ['Pendientes', '9', 'Cuentas por validar al conectar backend.', IoLockClosedOutline],
];

const users = [
  ['Camilo Admin', 'admin@muputun.cl', 'Administrador', 'Activo', 'Catálogo, tienda, usuarios'],
  ['Ventas Müpütun', 'ventas@muputun.cl', 'Ventas', 'Activo', 'Cotizaciones, mailing'],
  ['Editor Técnico', 'editor@muputun.cl', 'Editor', 'Invitado', 'Productos, blog'],
  ['Soporte GNSS', 'soporte@muputun.cl', 'Soporte', 'Activo', 'Contacto, usuarios'],
  ['Cliente Demo', 'demo@muputun.cl', 'Cliente', 'Activo', 'Cuenta store'],
];

const roles = [
  ['Administrador', 'Acceso total al panel, usuarios y configuración comercial.'],
  ['Ventas', 'Gestiona solicitudes, mailing y seguimiento de cotizaciones.'],
  ['Editor', 'Actualiza fichas, assets, documentos y contenido técnico.'],
  ['Cliente', 'Acceso futuro a compra, historial y solicitudes del store.'],
];

const statusTone = (status: string) => {
  if (status === 'Activo') return 'green';
  if (status === 'Invitado') return 'cyan';
  return 'amber';
};

export const AdminUsersView = () => (
  <AdminLayout
    title='Usuarios'
    description='Maquetación para administrar clientes, equipo interno, roles y permisos antes de conectar autenticación real.'
  >
    <div className='grid gap-5 md:grid-cols-3'>
      {userStats.map(([label, value, description, Icon]) => {
        const StatIcon = Icon as typeof IoPeopleOutline;

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

    <div className='mt-6 grid gap-6 xl:grid-cols-[1fr_340px]'>
      <AdminCard>
        <AdminSectionHeader
          eyebrow='Accesos'
          title='Directorio de usuarios'
          description='Tabla preparada para búsqueda, edición de roles y cambio de estado.'
          action={ (
            <MupuButton size='md' variant='solid' iconLeft={ <IoPersonAddOutline size={ 18 } /> }>
              Invitar usuario
            </MupuButton>
          ) }
        />

        <div className='overflow-hidden rounded-[1.5rem] bg-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.76)]'>
          <div className='overflow-x-auto'>
            <table className='min-w-[820px] w-full text-left text-sm'>
              <thead className='bg-slate-950/90 text-xs uppercase tracking-[0.18em] text-white'>
                <tr>
                  <th className='px-5 py-4 font-semibold'>Usuario</th>
                  <th className='px-5 py-4 font-semibold'>Correo</th>
                  <th className='px-5 py-4 font-semibold'>Rol</th>
                  <th className='px-5 py-4 font-semibold'>Estado</th>
                  <th className='px-5 py-4 font-semibold'>Permisos</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200/70'>
                {users.map(([name, email, role, status, permissions]) => (
                  <tr key={ email } className='bg-white/44 transition hover:bg-white/74'>
                    <td className='px-5 py-4 font-semibold text-slate-950'>{ name }</td>
                    <td className='px-5 py-4 text-slate-600'>{ email }</td>
                    <td className='px-5 py-4 text-slate-600'>{ role }</td>
                    <td className='px-5 py-4'>
                      <AdminStatusBadge tone={ statusTone(status) }>
                        { status }
                      </AdminStatusBadge>
                    </td>
                    <td className='px-5 py-4 text-slate-600'>{ permissions }</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminCard>

      <AdminCard>
        <AdminSectionHeader
          eyebrow='Roles'
          title='Matriz de permisos'
          description='Base visual para conectar políticas reales de autorización.'
        />
        <div className='space-y-3'>
          {roles.map(([role, description]) => (
            <div key={ role } className='rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
              <p className='text-sm font-semibold text-slate-950'>{ role }</p>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{ description }</p>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  </AdminLayout>
);
