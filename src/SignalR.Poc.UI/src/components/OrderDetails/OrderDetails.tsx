import React from 'react';
import {
  map,
} from 'lodash/fp';
import { useSelector } from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { ApplicationState } from '#ApplicationState';

export type OrderDetailsProps = {
  id: string,
};

const OrderDetails = ({
  id,
}: OrderDetailsProps) => {
  const selectedOrder = useSelector((state: ApplicationState) => (
    state.app.orders.entities[id]
  ));

  return (
    <List>
      {map(
        (li) => (
          <ListItem key={li.id}>
            <ListItemText
              primary={li.sku}
              secondary={`x${li.quantity}`}
            />
          </ListItem>
        ),
        selectedOrder.lineItems,
      )}
    </List>
  );
};

export default OrderDetails;
