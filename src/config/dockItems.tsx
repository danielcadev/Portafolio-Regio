import { IconHome, IconUser, IconSettings, IconBrandGithub,IconMail,IconBriefcase } from '@tabler/icons-react';

export const dockItems = [
  { title: 'Inicio', icon: <IconHome />, href: '/' },
  { title: 'Perfil', icon: <IconUser />, href: '/profile' },
  { title: 'Proyectos', icon: <IconBriefcase stroke={1.5} />, href: '/projects' },
  { title: 'Contacto', icon: <IconMail stroke={1.5} />, href: '/contact' },
  { title: 'Github', icon: <IconBrandGithub />, href: '/proyectos' },
  
  // Añade más items según necesites
];