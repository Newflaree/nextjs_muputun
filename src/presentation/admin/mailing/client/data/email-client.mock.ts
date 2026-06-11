import {
  IoBriefcaseOutline,
  IoConstructOutline,
  IoDocumentTextOutline,
  IoMailOpenOutline,
  IoMailUnreadOutline,
  IoSendOutline,
} from 'react-icons/io5';
import type {
  EmailStat,
  MailFolderConfig,
  MailFolderKey,
  MailFolderNavItem,
  MailMessage,
} from '../types/email-client.types';

export const emailClientStats: EmailStat[] = [
  {
    description: 'Mensajes entrantes pendientes.',
    icon: IoMailUnreadOutline,
    label: 'No leídos',
    value: '14',
  },
  {
    description: 'Seguimientos comerciales cerrados.',
    icon: IoMailOpenOutline,
    label: 'Respondidos',
    value: '38',
  },
  {
    description: 'Correos mock desde SMTP.',
    icon: IoSendOutline,
    label: 'Enviados',
    value: '22',
  },
];

export const folderConfig: Record<MailFolderKey, MailFolderConfig> = {
  drafts: {
    count: '3',
    description: 'Correos en preparación antes de enviarse por SMTP.',
    eyebrow: 'Borradores',
    href: '/admin/mailing/client/drafts',
    title: 'Borradores',
  },
  inbox: {
    count: '14',
    description: 'Listado preparado para búsqueda, lectura, asignación y seguimiento.',
    eyebrow: 'Inbox',
    href: '/admin/mailing/client',
    title: 'Mensajes recibidos',
  },
  sales: {
    count: '8',
    description: 'Conversaciones comerciales asignadas al equipo de ventas.',
    eyebrow: 'Ventas',
    href: '/admin/mailing/client/sales',
    title: 'Asignados a ventas',
  },
  sent: {
    count: '22',
    description: 'Correos enviados desde cuentas corporativas y campañas manuales.',
    eyebrow: 'Enviados',
    href: '/admin/mailing/client/sent',
    title: 'Mensajes enviados',
  },
  support: {
    count: '6',
    description: 'Solicitudes técnicas, postventa y configuración de equipos GNSS.',
    eyebrow: 'Soporte',
    href: '/admin/mailing/client/support',
    title: 'Soporte técnico',
  },
};

const inboxMessages: MailMessage[] = [
  {
    account: 'ventas@muputun.cl',
    body: 'Hola, necesito cotizar una configuración X5 RT Multibanda para trabajar con base y rover en levantamientos topográficos. Nos interesa validar autonomía, accesorios incluidos y compatibilidad con SurPad antes de cerrar compra.',
    from: 'Felipe Andrade <felipe@geoandina.cl>',
    preview: 'Cliente solicita base + rover para topografía.',
    status: 'No leído',
    subject: 'Cotización X5 RT Multibanda',
    time: '09:42',
  },
  {
    account: 'info@muputun.cl',
    body: 'Estamos evaluando usar NTRIP Local con drones DJI Enterprise. Queremos confirmar si podemos operar sin depender de Internet en terreno y qué receptor recomiendan como base.',
    from: 'Camila Torres <operaciones@dronmap.cl>',
    preview: 'Preguntan compatibilidad con DJI Enterprise.',
    status: 'Prioridad',
    subject: 'Consulta NTRIP Local',
    time: 'Ayer',
  },
  {
    account: 'soporte@muputun.cl',
    body: 'Necesitamos ayuda para configurar SurPad con parámetros de proyección local y verificar el flujo base-rover. El equipo ya obtiene fix, pero queremos revisar la salida NMEA.',
    from: 'Rodrigo Silva <soporte@constructora-sur.cl>',
    preview: 'Requiere parámetros de proyección y base local.',
    status: 'Abierto',
    subject: 'Configuración SurPad',
    time: 'Ayer',
  },
  {
    account: 'postventa@muputun.cl',
    body: 'Favor enviar documentación actualizada del X5 CORS y recomendaciones para instalación permanente. El proyecto contempla monitoreo continuo y distribución de correcciones.',
    from: 'Natalia Rivas <natalia@catastro.cl>',
    preview: 'Solicitud de ficha técnica y manual de instalación.',
    status: 'Respondido',
    subject: 'Documentación X5 CORS',
    time: '10 Jun',
  },
];

export const folderMessages: Record<MailFolderKey, MailMessage[]> = {
  drafts: [
    {
      account: 'ventas@muputun.cl',
      body: 'Propuesta inicial para cliente interesado en X5 Mobile Series Pro. Falta sumar accesorios y condiciones de entrega antes de enviar.',
      from: 'Borrador interno',
      preview: 'Propuesta pendiente para X5 Mobile Series Pro.',
      status: 'Borrador',
      subject: 'Propuesta X5 Mobile Series Pro',
      time: 'Hoy',
    },
    {
      account: 'soporte@muputun.cl',
      body: 'Respuesta técnica sobre configuración LoRa 433/915 MHz. Pendiente validar distancia estimada y topografía del sector.',
      from: 'Borrador interno',
      preview: 'Respuesta técnica sobre configuración LoRa.',
      status: 'Borrador',
      subject: 'Configuración LoRa RTK',
      time: 'Ayer',
    },
  ],
  inbox: inboxMessages,
  sales: [
    {
      account: 'ventas@muputun.cl',
      body: 'Cliente solicita comparar X5 RT Multibanda versus X5R para operación con drone RTK y levantamiento terrestre. Requiere recomendación comercial.',
      from: 'Javiera Molina <compras@aerotop.cl>',
      preview: 'Comparativa comercial entre X5RT y X5R.',
      status: 'Prioridad',
      subject: 'Comparar X5RT y X5R',
      time: 'Hoy',
    },
    {
      account: 'ventas@muputun.cl',
      body: 'Municipalidad solicita cotización para CORS Lite y capacitación operativa. Interesa soporte local y documentación técnica.',
      from: 'Diego Fuentes <diego@municipalidad.cl>',
      preview: 'Cotización CORS Lite con capacitación.',
      status: 'Abierto',
      subject: 'Proyecto CORS municipal',
      time: 'Ayer',
    },
  ],
  sent: [
    {
      account: 'ventas@muputun.cl',
      body: 'Enviamos propuesta para X5 RT Multibanda con base, rover, accesorios y soporte de configuración SurPad. Quedamos atentos a comentarios.',
      from: 'Ventas Müpütun <ventas@muputun.cl>',
      preview: 'Propuesta enviada con base, rover y accesorios.',
      status: 'Enviado',
      subject: 'Propuesta X5 RT Multibanda',
      time: 'Hoy',
    },
    {
      account: 'soporte@muputun.cl',
      body: 'Se enviaron instrucciones para configurar NTRIP Local y validar correcciones con drone DJI Enterprise antes del vuelo operativo.',
      from: 'Soporte Müpütun <soporte@muputun.cl>',
      preview: 'Instrucciones NTRIP Local enviadas.',
      status: 'Enviado',
      subject: 'Guía NTRIP Local DJI',
      time: 'Ayer',
    },
  ],
  support: [
    {
      account: 'soporte@muputun.cl',
      body: 'Usuario reporta dudas al exportar RINEX desde X5 Stick para postproceso. Se debe solicitar versión de app y archivo de prueba.',
      from: 'Marcelo Arias <marcelo@geoinspeccion.cl>',
      preview: 'Dudas con exportación RINEX desde X5 Stick.',
      status: 'Abierto',
      subject: 'Exportación RINEX X5 Stick',
      time: '09 Jun',
    },
    {
      account: 'postventa@muputun.cl',
      body: 'Cliente solicita revisión de autonomía de batería en modo rover. Pendiente recopilar número de serie y condiciones de uso.',
      from: 'Antonia Vega <antonia@terramap.cl>',
      preview: 'Revisión de autonomía en modo rover.',
      status: 'No leído',
      subject: 'Autonomía X5R',
      time: '08 Jun',
    },
  ],
};

export const emailFolders: MailFolderNavItem[] = [
  { href: '/admin/mailing/client', icon: IoMailUnreadOutline, key: 'inbox', label: 'Inbox' },
  { href: '/admin/mailing/client/sent', icon: IoSendOutline, key: 'sent', label: 'Enviados' },
  { href: '/admin/mailing/client/drafts', icon: IoDocumentTextOutline, key: 'drafts', label: 'Borradores' },
  { href: '/admin/mailing/client/sales', icon: IoBriefcaseOutline, key: 'sales', label: 'Asignados a ventas' },
  { href: '/admin/mailing/client/support', icon: IoConstructOutline, key: 'support', label: 'Soporte técnico' },
];

export const getMailStatusTone = (status: string) => {
  if (status === 'No leído') return 'cyan';
  if (status === 'Prioridad') return 'red';
  if (status === 'Respondido' || status === 'Enviado') return 'green';
  return 'amber';
};

