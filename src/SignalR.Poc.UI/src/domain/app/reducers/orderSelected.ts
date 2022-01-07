import type { PayloadAction } from '@reduxjs/toolkit';
import type { OrderSelected } from '../events/orderSelected';
import type { State } from '../models/State';

export default (state: State, action: PayloadAction<OrderSelected>) => ({
  ...state,
  selectedOrder: action.payload,
});
