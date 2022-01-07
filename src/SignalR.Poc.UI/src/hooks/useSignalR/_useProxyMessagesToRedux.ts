import { useEffect } from 'react';
// import { noop } from 'lodash/fp';
import {
  useDispatch,
  // useSelector,
} from 'react-redux';
import { HubConnection } from '@microsoft/signalr';
import type { MessageReceived } from './SignalRMessageReceived';
// import type { ApplicationState } from '#components/App/redux';

export default (hubConnection: HubConnection) => {
  const dispatch = useDispatch();
  // const workstationId = useSelector((root: ApplicationState) => root.app.workstation?.id);

  useEffect(
    () => {
      // if (!workstationId) {
      //   return noop;
      // }

      const listener = ({
        // workstationId: messageWorkstationId,
        type,
        payload,
      }: MessageReceived) => {
        // if (workstationId === messageWorkstationId) {
        dispatch({ type, payload });
        // }
      };

      hubConnection.on('messageReceived', listener);

      return () => {
        hubConnection.off('messageReceived', listener);
      };
    },
    [dispatch, hubConnection],
  );
};
