import {
  flow,
  get,
  omit,
  without,
} from 'lodash/fp';
import { PayloadAction } from '@reduxjs/toolkit';
import type { State } from '../models/State';
import type { OrderCanceled } from '../events/orderCanceled';

export default (state: State, action: PayloadAction<OrderCanceled>) => ({
  ...state,
  orders: {
    ids: flow(
      get('orders.ids'),
      without([action.payload.id]),
    )(state),
    entities: omit(
      action.payload.id,
      state.orders.entities,
    ),
  },
});
