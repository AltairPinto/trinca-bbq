export type User = {
  id: number;
  name: string;
};

export type Guest = {
  id: number;
  user: User;
  amount: number;
  confirmed: boolean;
};

export interface IBbq {
  id: number;
  title: string;
  date: Date;
  observation?: string;
  guests: Array<Guest>;
}
