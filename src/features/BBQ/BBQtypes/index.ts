export type Guest = {
  id: string;
  name: string;
  withBeer: boolean;
  amount: number;
  confirmed: boolean;
};

export interface BBQEvent {
  id: string;
  date: Date;
  title: string;
  observation?: string;
  amountWithBeer: number;
  amount: number;
  guests: Guest[];
}
