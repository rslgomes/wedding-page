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
  cost: number;
}

export interface PaymentModalState {
  open: boolean;
  qrcodeUrl: string;
  link: string;
}

export interface Guest {
  id: string;
  name: string;
  keywords: string[];
  bundle: string;
  confirmed: boolean | undefined;
}

export interface Photo {
  src: string;
  alt: string;
}
