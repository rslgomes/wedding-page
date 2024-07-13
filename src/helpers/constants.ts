import { Gift, Guest } from './types';

export const TIME_OF_THE_EVENT = new Date('2024-10-25T19:00:00Z');

export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * 1000;
export const ONE_HOUR = 60 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
export const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

export const GIFTS: Gift[] = [
  {
    name: 'Férias em Aruba',
    imageUrl:
      'https://jbanoticias.com.br/wp-content/uploads/2023/01/ferias-casal.jpg',
    cost: 3000,
  },
  {
    name: 'Liquidificador',
    imageUrl:
      'https://lojamultilaser.vtexassets.com/arquivos/ids/1220075-800-auto?v=638553177656700000&width=800&height=auto&aspect=true',
    cost: 300,
  },
];

export const GUEST_LIST: Guest[] = [
  {
    id: '001',
    name: 'Carlos Eduardo Gomes',
    keywords: ['dudu', 'irmao'],
    bundle: 'DuduEFamilia',
    confirmed: undefined,
  },
  {
    id: '002',
    name: 'Tiago Gomes',
    keywords: ['irmao'],
    bundle: 'tiagoECynara',
    confirmed: undefined,
  },
  {
    id: '003',
    name: 'Cynara Quintão',
    keywords: ['cunhada', 'seguranca', 'trabalho', 'do'],
    bundle: 'tiagoECynara',
    confirmed: undefined,
  },
];
