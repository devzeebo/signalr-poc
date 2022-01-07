import {
  flow,
  get,
} from 'lodash/fp';
import { ApplicationState } from '#ApplicationState';
import { Order } from '../models/Order';
import { parseOrder } from '../models/SerializableOrder';

type Selector<T> = (state: ApplicationState) => T;

export default (id: string): Selector<Order> => (state: ApplicationState) => flow(
  get('app.orders.entities'),
  get(id),
  parseOrder,
)(state) as Order;
