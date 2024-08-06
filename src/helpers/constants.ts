import { Gift, Photo, CostModalDataMap } from './types';
import pasteldeBelem from '../assets/img/giftList/pasteldebelem.webp';
import cervejinha from '../assets/img/giftList/cervejinha.webp';
import mirante from '../assets/img/giftList/mirante.webp';
import jantarzinho from '../assets/img/giftList/jantarzinho.webp';
import casando from '../assets/img/giftList/casando.webp';
import furniture from '../assets/img/giftList/furniturePT.webp';

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
    name: 'Cervejinha com tremossos em Portugal',
    imageUrl: cervejinha,
    cost: 100,
  },
  {
    name: 'Passeando nos mirantes de Lisboa',
    imageUrl: mirante,
    cost: 300,
  },
  {
    name: 'Jantarzinho romântico em Braga',
    imageUrl: jantarzinho,
    cost: 500,
  },
  {
    name: 'Comprando móveis para a casa nova',
    imageUrl: furniture,
    cost: 1000,
  },
  {
    name: 'Personalize o seu PIX',
    imageUrl: casando,
    cost: 'custom',
  },
];

export const PHOTO_LIST: Photo[] = [
  {
    src: require('../assets/img/heroList/photoList01.JPG'),
    alt: 'chuchus em um casamento',
  },
  {
    src: require('../assets/img/heroList/photoList02.png'),
    alt: 'chuchus na lapinha da serra',
  },
  {
    src: require('../assets/img/heroList/photoList03.png'),
    alt: 'jantar de noivado',
  },
  {
    src: require('../assets/img/heroList/photoList04.png'),
    alt: 'foto super natural',
  },
  {
    src: require('../assets/img/heroList/photoList05.png'),
    alt: 'abracadinhos no cruzeiro',
  },
  {
    src: require('../assets/img/heroList/photoList06.png'),
    alt: 'rei do pastel',
  },
  {
    src: require('../assets/img/heroList/photoList07.png'),
    alt: 'niver da babita',
  },
  {
    src: require('../assets/img/heroList/photoList08.png'),
    alt: 'churrasco chromos',
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
  1000: {
    pix_src: require('../assets/img/PIX/oneThousandReais.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com52040000530398654071000.005802BR5920Renata Elias Bicalho6009SAO PAULO621405102S5IygPpZy6304EC40',
  },
  custom: {
    pix_src: require('../assets/img/PIX/custom.png'),
    code: '00020126510014BR.GOV.BCB.PIX0129casamentodoschuchus@gmail.com5204000053039865802BR5920Renata Elias Bicalho6009SAO PAULO62140510hdJsw7LU76630417F5',
  },
};
