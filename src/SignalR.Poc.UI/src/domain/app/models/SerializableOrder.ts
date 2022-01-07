import {
  formatISO,
  parseISO,
} from 'date-fns/fp';
import type { LineItem } from './LineItem';
import type { Order } from './Order';

export type SerializableOrder = {
  id: string,
  dateCreated: string,
  lineItems: LineItem[],
};

export const serializeOrder = (order: Order): SerializableOrder => ({
  ...order,
  dateCreated: formatISO(order.dateCreated),
});

export const parseOrder = (order: SerializableOrder): Order => ({
  ...order,
  dateCreated: parseISO(order.dateCreated),
});
