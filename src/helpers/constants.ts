import { Gift, Guest, Photo, CostModalDataMap } from './types';
import pasteldeBelem from '../assets/img/pasteldebelem.webp';
import cervejinha from '../assets/img/cervejinha.webp';
import mirante from '../assets/img/mirante.webp';
import jantarzinho from '../assets/img/jantarzinho.webp';
import casando from '../assets/img/casando.webp';

export const TIME_OF_THE_EVENT = new Date('2024-10-25T19:00:00Z');

export const ONE_SECOND = 1000;
export const ONE_MINUTE = 60 * 1000;
export const ONE_HOUR = 60 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;
export const ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

export const GIFTS: Gift[] = [
  {
    name: 'Nosso primeiro pastel de Belém',
    imageUrl: pasteldeBelem,
    cost: 50,
  },
  {
    name: 'Uma cervejinha com tremossos em Portugal',
    imageUrl: cervejinha,
    cost: 100,
  },
  {
    name: 'Um passeio nos mirantes de Lisboa',
    imageUrl: mirante,
    cost: 300,
  },
  {
    name: 'Jantarzinho romântico em Braga',
    imageUrl: jantarzinho,
    cost: 500,
  },
  {
    name: 'Personalize o seu PIX',
    imageUrl: casando,
    cost: 'custom',
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

export const COST_MODAL_DATA_MAP: CostModalDataMap = {
  50: {
    pix_src: require('../assets/img/PIX/fifty_reais.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com520400005303986540550.005802BR5920Renata Elias Bicalho6009SAO PAULO62140510CbPjei7o4L6304CDD1',
  },
  100: {
    pix_src: require('../assets/img/PIX/one_hundred_reais.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com5204000053039865406100.005802BR5920Renata Elias Bicalho6009SAO PAULO621405109dMoCLqxSN6304775F',
  },
  300: {
    pix_src: require('../assets/img/PIX/three_hundred_reais.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com5204000053039865406300.005802BR5920Renata Elias Bicalho6009SAO PAULO62140510gPG5bqd5ik63047640',
  },
  500: {
    pix_src: require('../assets/img/PIX/five_hundred_reais.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com5204000053039865406500.005802BR5920Renata Elias Bicalho6009SAO PAULO62140510Dbfhy7nigy630403FD',
  },
  custom: {
    pix_src: require('../assets/img/PIX/custom.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com5204000053039865802BR5920Renata Elias Bicalho6009SAO PAULO62140510hdJsw7LU76630417F5',
  },
};
