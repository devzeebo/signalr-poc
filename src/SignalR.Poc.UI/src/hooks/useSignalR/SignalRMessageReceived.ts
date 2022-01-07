export type MessageReceived<T = unknown> = {
  workstationId: string,
  type: string,
  payload: T,
};
