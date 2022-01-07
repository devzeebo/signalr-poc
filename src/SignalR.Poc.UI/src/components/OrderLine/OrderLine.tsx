import React, {
  useCallback,
  MouseEvent,
} from 'react';
import {
  useSelector,
} from 'react-redux';
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import {
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { format } from 'date-fns/fp';
import orderSelected from '#domain/app/events/orderSelected';
import orderById from '#domain/app/queries/orderById';
import useAction, {
  useCurry,
} from '#hooks/useAction';
import cancelOrder from '#api/cancelOrder';

export type OrderProps = {
  id: string,
};

const OrderLine = ({
  id,
}: OrderProps) => {
  const order = useSelector(orderById(id));

  const selectOrder = useAction(orderSelected, id);
  const deleteOrder = useCurry(cancelOrder, id);
  const deleteOrderAndStop = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      deleteOrder();
    },
    [deleteOrder],
  );

  return (
    <ListItem
      secondaryAction={(
        <IconButton
          edge="end"
          onClick={deleteOrderAndStop}
        >
          <DeleteIcon />
        </IconButton>
      )}
      onClick={selectOrder}
    >
      <ListItemAvatar>
        <Avatar>
          {order.id}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={format('MMMM d, yyyy \'@\' h:mm a', order.dateCreated)}
      />
    </ListItem>
  );
};

export default OrderLine;
