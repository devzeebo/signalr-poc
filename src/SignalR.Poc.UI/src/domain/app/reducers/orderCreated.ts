import {
  concat,
  flow,
  get,
  uniq,
} from 'lodash/fp';
import { PayloadAction } from '@reduxjs/toolkit';
import type { State } from '../models/State';
import type { OrderCreated } from '../events/orderCreated';

export default (state: State, action: PayloadAction<OrderCreated>) => ({
  ...state,
  orders: {
    ids: flow(
      get('orders.ids'),
      concat(action.payload.order.id),
      uniq,
    )(state),
    entities: {
      ...state.orders.entities,
      [action.payload.order.id]: action.payload.order,
    },
  },
});
