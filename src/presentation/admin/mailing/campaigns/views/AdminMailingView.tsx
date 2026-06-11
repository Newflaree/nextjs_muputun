import {
  IoCreateOutline,
  IoMailOpenOutline,
  IoMailOutline,
  IoPeopleOutline,
  IoSendOutline,
} from 'react-icons/io5';
import { MupuButton } from '@/presentation/shared';
import {
  AdminCard,
  AdminSectionHeader,
  AdminStatCard,
  AdminStatusBadge,
} from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';

const mailingStats = [
  ['Audiencia', '126', 'Contactos segmentables del store.', IoPeopleOutline],
  ['Campañas', '3', 'Flujos preparados como maqueta.', IoMailOutline],
  ['Apertura', '42%', 'Indicador mock para validar reporting.', IoMailOpenOutline],
];

const campaigns = [
  ['Cotización GNSS X5', 'Clientes interesados en RTK/PPK', 'Borrador', 'Hoy'],
  ['Seguimiento accesorios', 'Compradores de receptores X5', 'Programada', '12 Jun'],
  ['Blog técnico GNSS', 'Audiencia técnica y topografía', 'Activa', 'Semanal'],
  ['Postventa CORS', 'Clientes con base o estación fija', 'Pausada', 'Mensual'],
];

const segments = [
  ['Leads RTK', 'Solicitudes desde productos X5 y contacto.'],
  ['Drones', 'Interesados en NTRIP Local, DJI, Autel, Wingtra y eBee.'],
  ['Accesorios', 'Clientes que requieren LoRa, antenas, jalones o trípodes.'],
  ['Postventa', 'Usuarios con equipos instalados y soporte activo.'],
];

const statusTone = (status: string) => {
  if (status === 'Activa') return 'green';
  if (status === 'Programada') return 'cyan';
  if (status === 'Pausada') return 'slate';
  return 'amber';
};

export const AdminMailingView = () => (
  <AdminLayout
    title='Campañas'
    description='Maquetación para audiencias, campañas comerciales, newsletters técnicas y comunicaciones transaccionales.'
  >
    <div className='grid gap-5 md:grid-cols-3'>
      {mailingStats.map(([label, value, description, Icon]) => {
        const StatIcon = Icon as typeof IoMailOutline;

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
          eyebrow='Campañas'
          title='Comunicaciones comerciales'
          description='Listado preparado para conectar proveedor de email y métricas reales.'
          action={ (
            <MupuButton size='md' variant='solid' iconLeft={ <IoCreateOutline size={ 18 } /> }>
              Nueva campaña
            </MupuButton>
          ) }
        />

        <div className='grid gap-4'>
          {campaigns.map(([name, audience, status, date]) => (
            <div key={ name } className='grid gap-4 rounded-[1.5rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] md:grid-cols-[1fr_auto_auto] md:items-center'>
              <div>
                <p className='font-semibold text-slate-950'>{ name }</p>
                <p className='mt-1 text-sm leading-6 text-slate-600'>{ audience }</p>
              </div>
              <AdminStatusBadge tone={ statusTone(status) }>
                { status }
              </AdminStatusBadge>
              <p className='text-sm font-semibold text-slate-500'>{ date }</p>
            </div>
          ))}
        </div>
      </AdminCard>

      <div className='grid gap-6'>
        <AdminCard>
          <AdminSectionHeader
            eyebrow='Audiencias'
            title='Segmentos'
            description='Grupos base para personalizar comunicación.'
          />
          <div className='space-y-3'>
            {segments.map(([name, description]) => (
              <div key={ name } className='rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <p className='text-sm font-semibold text-slate-950'>{ name }</p>
                <p className='mt-2 text-sm leading-6 text-slate-600'>{ description }</p>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard className='bg-slate-950/90 text-white'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-cyan-200'>
            <IoSendOutline size={ 22 } />
          </div>
          <h2 className='mt-5 text-2xl font-semibold'>Plantilla base</h2>
          <p className='mt-3 text-sm leading-6 text-slate-300'>
            Diseño preparado para avisos de cotización, seguimiento técnico, blog GNSS y campañas postventa.
          </p>
        </AdminCard>
      </div>
    </div>
  </AdminLayout>
);
