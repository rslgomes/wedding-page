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
  ID: string;
  name: string;
  keywords: string[];
  bundle: string;
  confirmed: boolean | undefined;
}

export interface RawGuest {
  _id: string;
  ID: string;
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
