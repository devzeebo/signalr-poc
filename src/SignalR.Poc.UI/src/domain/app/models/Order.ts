import type { LineItem } from './LineItem';

export type Order = {
  id: string,
  dateCreated: Date,
  lineItems: LineItem[],
};
