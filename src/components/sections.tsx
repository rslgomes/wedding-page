import GiftListDisplay from './GiftList/GiftList';
import OurStory from './OurStory/OurStory';
import RSVP from './RSVP/RSVP';
import TimeAndPlace from './TimeAndPlace/TimeAndPlace';

export interface Section {
  name: string;
  component: JSX.Element;
  order_index: number;
}

const sections: Section[] = [
  {
    name: 'Data/Local',
    component: <TimeAndPlace />,
    order_index: 1,
  },
  {
    name: 'Lista de Presentes',
    component: <GiftListDisplay />,
    order_index: 2,
  },
  // {
  // name: 'RSVP',
  // component: <RSVP />,
  // order_index: 3,
  // },
  {
    name: 'Nossa História',
    component: <OurStory />,
    order_index: 2,
  },
];

export default sections;
