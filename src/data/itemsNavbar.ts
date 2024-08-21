export interface NavbarItem {
  id: string;
  name: string;
  link: string;
}

export const itemsNavbar: NavbarItem[] = [
  {
    id: '01',
    name: 'inicio',
    link: 'home',
  },
  {
    id: '02',
    name: 'perfil',
    link: 'perfil',
  },
  {
    id: '03',
    name: 'descargar',
    link: 'descargar',
  },
  {
    id: '04',
    name: 'gastos',
    link: 'gastos',
  },
  {
    id: '05',
    name: 'ingresos',
    link: 'ingresos',
  },
  {
    id: '06',
    name: 'metas de ahorro',
    link: 'metasdeahorro',
  },
];