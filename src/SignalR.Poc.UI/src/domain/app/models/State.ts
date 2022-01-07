import type { SerializableOrder } from './SerializableOrder';

export type State = {
  orders: {
    ids: string[],
    entities: {
      [id: string]: SerializableOrder
    }
  }
  selectedOrder: string | undefined
};
