export interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface Gift {
  name: string;
  imageUrl: string;
  cost: number | 'custom';
}

export interface PaymentModalState {
  open: boolean;
  pix_src: string;
  code: string;
}

export interface Guest {
  _id: string;
  name: string;
  keywords: string[];
  bundle: string;
  confirmed: boolean | undefined;
}

export interface RawGuest {
  _id: string;
  name: string;
  keywords: string[];
  bundle: string;
  confirmed?: boolean | undefined;
  __v: number;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface CostModalData {
  pix_src: string;
  code: string;
}

export interface CostModalDataMap {
  [key: number]: CostModalData;
  custom: CostModalData;
}
