import GuestList from './GuestList/GuestList';

export interface Section {
  name: string;
  component: JSX.Element;
  order_index: number;
}

const sections: Section[] = [
  {
    name: 'Lista de Convidados',
    component: <GuestList />,
    order_index: 1,
  },
];

export default sections;
