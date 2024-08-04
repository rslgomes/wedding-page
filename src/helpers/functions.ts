import {
  ONE_DAY,
  ONE_HOUR,
  ONE_MINUTE,
  ONE_MONTH,
  ONE_SECOND,
} from './constants';
import { Guest, RawGuest, TimeLeft } from './types';

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

export const treatGuestFromAPI = (rawGuest: RawGuest): Guest => {
  const { name, keywords, _id, bundle, confirmed } = rawGuest;
  return { name, ID: _id, bundle, keywords, confirmed };
};
