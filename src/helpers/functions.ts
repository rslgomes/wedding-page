import {
  ONE_DAY,
  ONE_HOUR,
  ONE_MINUTE,
  ONE_MONTH,
  ONE_SECOND,
} from './constants';
import { TimeLeft } from './types';

export const wait = async (timeMS: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, timeMS));
};

export const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const now = new Date().getTime();
  let remainder = targetDate.getTime() - now;

  const timeBands = [ONE_MONTH, ONE_DAY, ONE_HOUR, ONE_MINUTE, ONE_SECOND];
  const [months, days, hours, minutes, seconds] = timeBands.map((band) => {
    const floor = Math.floor(remainder / band);
    remainder = remainder % band;
    return floor;
  });

  return { months, days, hours, minutes, seconds };
};

export const cleanName = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, '')
    .toLowerCase()
    .trim();
};
