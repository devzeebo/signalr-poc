import { createAction } from '@reduxjs/toolkit';

export type OrderCanceled = {
  id: string,
};

export default createAction<OrderCanceled>('app/order-canceled');
