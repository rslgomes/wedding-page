import { Gift, Guest, Photo } from './types';

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
    bundle: 'tiagoEFamilia',
    confirmed: undefined,
  },
  {
    id: '003',
    name: 'Cynara Quintão',
    keywords: ['cunhada', 'seguranca', 'trabalho', 'do'],
    bundle: 'tiagoEFamilia',
    confirmed: undefined,
  },
  {
    id: '004',
    name: 'Maurício Hamaji',
    keywords: ['hamaji', 'mau'],
    bundle: 'FamiliaHamaji',
    confirmed: undefined,
  },
  {
    id: '005',
    name: 'Lucia Aiko Hamaji',
    keywords: [],
    bundle: 'FamiliaHamaji',
    confirmed: undefined,
  },
  {
    id: '006',
    name: 'Ruy Oyama Homma',
    keywords: [],
    bundle: 'FamiliaHamaji',
    confirmed: undefined,
  },
  {
    id: '007',
    name: 'Clara Fonseca',
    keywords: [],
    bundle: 'FamiliaHamaji',
    confirmed: undefined,
  },
  {
    id: '008',
    name: 'Bernardo Villaça',
    keywords: ['mr. ham', 'presunto', 'pre pre', 'presuntinho'],
    bundle: 'PresuntoEFram',
    confirmed: undefined,
  },
  {
    id: '009',
    name: 'Marina Fram',
    keywords: ['Fram', 'mrs.ham'],
    bundle: 'PresuntoEFram',
    confirmed: undefined,
  },
  {
    id: '010',
    name: 'Maria Teresa',
    keywords: ['sobrinha'],
    bundle: 'tiagoEFamilia',
    confirmed: undefined,
  },
];

export const PHOTO_LIST: Photo[] = [
  { src: require('../assets/img/amorReiDoPastel.png'), alt: 'Chuchus no Rei' },
  {
    src: require('../assets/img/beijoLaicos.png'),
    alt: 'Aniversário da Babita',
  },
  {
    src: require('../assets/img/ChurrascoChromos.png'),
    alt: 'Churrasco do Chromos',
  },
];
