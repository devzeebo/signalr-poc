import React from 'react';
import {
  map,
} from 'lodash/fp';
import {
  List,
} from '@mui/material';
import { useSelector } from 'react-redux';
import type { ApplicationState } from '#ApplicationState';
import OrderLine from '#components/OrderLine';

const OrderList = () => {
  const orderIds = useSelector((state: ApplicationState) => state.app.orders.ids);
  return (
    <List>
      {map(
        (id) => (
          <OrderLine
            key={id}
            id={id}
          />
        ),
        orderIds,
      )}
    </List>
  );
};

export default OrderList;
