import { createReducer } from '@reduxjs/toolkit';
import orderCreated from '../events/orderCreated';
import orderCreatedReducer from './orderCreated';
import orderCanceled from '../events/orderCanceled';
import orderCanceledReducer from './orderCanceled';
import orderSelected from '../events/orderSelected';
import orderSelectedReducer from './orderSelected';
import initialState from './initialState';

export default createReducer(
  initialState,
  {
    [orderCreated.type]: orderCreatedReducer,
    [orderCanceled.type]: orderCanceledReducer,
    [orderSelected.type]: orderSelectedReducer,
  },
);
