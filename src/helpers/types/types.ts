type PriceType = {
  month: number;
  year: number;
};

type PlansAPIInfosType = {
  id: number;
  text: string;
  included: boolean;
};

type PlansAPIType = {
  id: number;
  type: string;
  description: string;
  price: PriceType;
  infos: PlansAPIInfosType[];
  observation: string;
};

export type { PlansAPIType }