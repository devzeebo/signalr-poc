import { createAction } from '@reduxjs/toolkit';

export type OrderSelected = string;

export default createAction<OrderSelected>('app/order-selected');
