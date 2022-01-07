import { formatISO } from 'date-fns/fp';
import type { State } from '../models/State';

const initialState: State = {
  orders: {
    ids: ['123'],
    entities: {
      123: {
        id: '123',
        dateCreated: formatISO(new Date()),
        lineItems: [{
          id: 'i123',
          sku: 'abc-123',
          quantity: 3,
        }, {
          id: 'i234',
          sku: 'def-456',
          quantity: 6,
        }],
      },
    },
  },
  selectedOrder: undefined,
};

export default initialState;
