export type CategoryType = {
  id: number;
  name: string;
};

export type HouseholdType = {
  id: number;
  amount: number;
  category: {
    id: number;
    name: string;
  };
};
