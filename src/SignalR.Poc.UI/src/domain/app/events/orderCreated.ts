import { createAction } from '@reduxjs/toolkit';
import { Order } from '../models/Order';
import type { SerializableOrder } from '../models/SerializableOrder';
import { serializeOrder } from '../models/SerializableOrder';

export type OrderCreated = {
  order: SerializableOrder,
};

export default createAction(
  'app/order-created',
  (action: { order: Order }) => ({
    payload: serializeOrder(action.order),
  }),
);
