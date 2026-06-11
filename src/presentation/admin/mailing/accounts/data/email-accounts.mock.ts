import {
  IoAtCircleOutline,
  IoCloudDoneOutline,
  IoLockClosedOutline,
} from 'react-icons/io5';
import type {
  EmailAccountBacklogItem,
  EmailAccountRow,
  EmailAccountStat,
} from '../types/email-accounts.types';

export const emailAccountStats: EmailAccountStat[] = [
  {
    description: 'Casillas corporativas configuradas.',
    icon: IoAtCircleOutline,
    label: 'Cuentas',
    value: '6',
  },
  {
    description: 'Ocupación estimada de buzones.',
    icon: IoCloudDoneOutline,
    label: 'Uso',
    value: '38%',
  },
  {
    description: 'Acceso administrativo protegido en backend.',
    icon: IoLockClosedOutline,
    label: 'Seguridad',
    value: '2FA',
  },
];

export const emailAccounts: EmailAccountRow[] = [
  { email: 'info@muputun.cl', protocol: 'IMAP/SMTP', quota: '2.1 GB / 5 GB', status: 'Activa', use: 'Contacto general' },
  { email: 'ventas@muputun.cl', protocol: 'IMAP/SMTP', quota: '1.4 GB / 5 GB', status: 'Activa', use: 'Equipo comercial' },
  { email: 'soporte@muputun.cl', protocol: 'IMAP/SMTP', quota: '940 MB / 5 GB', status: 'Activa', use: 'Soporte GNSS' },
  { email: 'admin@muputun.cl', protocol: 'Solo admin', quota: '320 MB / 2 GB', status: 'Restringida', use: 'Administración' },
  { email: 'postventa@muputun.cl', protocol: 'Por crear', quota: '0 MB / 5 GB', status: 'Pendiente', use: 'Seguimiento técnico' },
];

export const emailAccountBacklog: EmailAccountBacklogItem[] = [
  {
    description: 'Crear, listar, suspender y modificar cuotas de cuentas corporativas.',
    title: 'cPanel UAPI',
  },
  {
    description: 'Guardar token de cPanel y credenciales IMAP/SMTP solo en backend.',
    title: 'Vault de secretos',
  },
  {
    description: 'Registrar quién crea cuentas, cambia passwords o suspende buzones.',
    title: 'Auditoría',
  },
  {
    description: 'Definir permisos por rol para acceso a cuentas sensibles.',
    title: 'Políticas',
  },
];

export const getEmailAccountStatusTone = (status: string) => {
  if (status === 'Activa') return 'green';
  if (status === 'Restringida') return 'amber';
  return 'cyan';
};

