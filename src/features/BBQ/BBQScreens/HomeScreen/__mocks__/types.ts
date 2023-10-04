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
