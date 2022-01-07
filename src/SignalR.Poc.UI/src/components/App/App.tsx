import React from 'react';
import {
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { Add as AddIcon } from '@mui/icons-material';
import useSignalR from '#hooks/useSignalR';
import OrderList from '#components/OrderList';
import OrderDetails from '#components/OrderDetails';
import { ApplicationState } from '#ApplicationState';
import { useCurry } from '#hooks/useAction';
import createOrder from '#api/createOrder';

const App = () => {
  useSignalR();

  const selectedOrderId = useSelector((state: ApplicationState) => state.app.selectedOrder);

  const addOrder = useCurry(createOrder);

  return (
    <Container>
      <Grid container>
        <Grid container item xs={6} direction="column">
          <Grid container item justifyContent="space-between">
            <Typography variant="h3">
              Items
            </Typography>
            <IconButton onClick={addOrder}>
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <OrderList />
          </Grid>
        </Grid>
        <Grid container item xs={6} direction="column">
          <Typography variant="h3">
            Details
          </Typography>
          {
            selectedOrderId
              ? <OrderDetails id={selectedOrderId} />
              : null
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
