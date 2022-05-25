export interface IBoxOffice {
  id: string;
  rank: string;
  title: string;
  worldwideLifetimeGross: string;
  domesticLifetimeGross: string;
  domestic: string;
  foreignLifetimeGross: string;
  foreign: string;
  year: string;
}

export interface IapiBox {
  items: IBoxOffice[];
}
