import { IconHome, IconUser, IconSettings, IconBrandGithub,IconMail,IconBriefcase } from '@tabler/icons-react';

export const dockItems = [
  { title: 'Inicio', icon: <IconHome />, href: '/' },
  { title: 'Perfil', icon: <IconUser />, href: '/profile' },
  { title: 'Servicios', icon: <IconBriefcase stroke={1.5} />, href: '/Servicios' },
  { title: 'Contacto', icon: <IconMail stroke={1.5} />, href: '/Contacto' },
  { title: 'Github', icon: <IconBrandGithub />, href: '/Proyectos' },
  
  // Añade más items según necesites
];