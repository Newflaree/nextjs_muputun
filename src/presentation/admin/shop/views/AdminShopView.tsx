import {
  IoCardOutline,
  IoChatbubbleEllipsesOutline,
  IoGlobeOutline,
  IoHomeOutline,
  IoSearchOutline,
  IoStorefrontOutline,
  IoCubeOutline,
} from 'react-icons/io5';
import { AdminCard, AdminSectionHeader, AdminStatCard, AdminStatusBadge } from '@/presentation/admin/components';
import { AdminLayout } from '@/presentation/admin/layouts';

const shopStats = [
  ['Estado', 'Online', 'Maqueta pública navegable.', IoStorefrontOutline],
  ['Canales', '4', 'Web, WhatsApp, contacto y mailing.', IoChatbubbleEllipsesOutline],
  ['SEO base', 'Activo', 'Metadatos por layout y producto.', IoSearchOutline],
];

const settings = [
  ['Checkout', 'Cotización guiada', 'El botón de compra deriva a contacto mientras no exista pago conectado.', IoCardOutline, 'cyan'],
  ['WhatsApp', '+56 9 87754953', 'Canal rápido para ventas desde producto y contacto.', IoChatbubbleEllipsesOutline, 'green'],
  ['Despacho', 'Por coordinar', 'Entrega sujeta a stock, región y configuración del equipo.', IoCubeOutline, 'amber'],
  ['SEO', 'Catálogo GNSS', 'Títulos, descripciones y Open Graph preparados para indexación.', IoGlobeOutline, 'green'],
];

const modules = [
  ['Home', 'Slider, destacados, videos y grilla de productos.', 'Publicado'],
  ['Catálogo', 'GNSS X5, combos y accesorios.', 'Publicado'],
  ['Blog', 'Lecturas técnicas y artículos individuales.', 'Publicado'],
  ['Footer', 'Contacto, marcas y redes sociales.', 'Publicado'],
];

export const AdminShopView = () => (
  <AdminLayout
    title='Tienda'
    description='Configuración visual del store: canales comerciales, checkout temporal, SEO, módulos públicos y estado de publicación.'
  >
    <div className='grid gap-5 md:grid-cols-3'>
      {shopStats.map(([label, value, description, Icon]) => {
        const StatIcon = Icon as typeof IoStorefrontOutline;

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

    <div className='mt-6 grid gap-6 xl:grid-cols-[1fr_360px]'>
      <AdminCard>
        <AdminSectionHeader
          eyebrow='Configuración'
          title='Operación comercial'
          description='Paneles preparados para editar comportamiento público cuando exista backend.'
        />

        <div className='grid gap-4 md:grid-cols-2'>
          {settings.map(([title, value, description, Icon, tone]) => {
            const SettingIcon = Icon as typeof IoCardOutline;

            return (
              <div key={ title as string } className='rounded-[1.6rem] bg-white/54 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
                <div className='flex items-start justify-between gap-4'>
                  <div className='flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/90 text-white'>
                    <SettingIcon size={ 22 } />
                  </div>
                  <AdminStatusBadge tone={ tone as 'cyan' | 'green' | 'amber' }>
                    Activo
                  </AdminStatusBadge>
                </div>
                <h2 className='mt-5 text-lg font-semibold text-slate-950'>{ title as string }</h2>
                <p className='mt-1 text-sm font-semibold text-cyan-800'>{ value as string }</p>
                <p className='mt-3 text-sm leading-6 text-slate-600'>{ description as string }</p>
              </div>
            );
          })}
        </div>
      </AdminCard>

      <AdminCard>
        <AdminSectionHeader
          eyebrow='Publicación'
          title='Módulos del sitio'
          description='Resumen de bloques públicos que luego podrán activarse o editarse.'
        />
        <div className='space-y-3'>
          {modules.map(([title, description, status]) => (
            <div key={ title } className='rounded-[1.4rem] bg-white/54 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]'>
              <div className='flex items-start justify-between gap-3'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-100/80 text-cyan-800'>
                  <IoHomeOutline size={ 18 } />
                </div>
                <AdminStatusBadge tone='green'>{ status }</AdminStatusBadge>
              </div>
              <p className='mt-4 text-sm font-semibold text-slate-950'>{ title }</p>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{ description }</p>
            </div>
          ))}
        </div>
      </AdminCard>
    </div>
  </AdminLayout>
);
