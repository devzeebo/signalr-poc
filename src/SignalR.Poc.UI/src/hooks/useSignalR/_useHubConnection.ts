import {
  useMemo,
  useEffect,
} from 'react';
import {
  noop,
} from 'lodash/fp';
import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
  LogLevel,
} from '@microsoft/signalr';

export default () => {
  const hubConnection: HubConnection | undefined = useMemo(
    () => {
      const hub = new HubConnectionBuilder()
        .configureLogging(LogLevel.Trace)
        .withUrl('/api/hub', {
          transport: HttpTransportType.WebSockets,
        })
        .withAutomaticReconnect()
        .build();

      hub.serverTimeoutInMilliseconds = 60000;

      return hub;
    },
    [],
  );

  useEffect(
    () => {
      if (!hubConnection) {
        return noop;
      }

      hubConnection.start()
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.error(err);
        });

      return () => {
        hubConnection.stop().then(() => {
          // eslint-disable-next-line no-console
          console.log('hub stopped');
        });
      };
    },
    [hubConnection],
  );

  return hubConnection;
};
