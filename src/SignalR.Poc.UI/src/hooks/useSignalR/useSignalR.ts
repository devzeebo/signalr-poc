import useHubConnection from './_useHubConnection';
import useProxyMessagesToRedux from './_useProxyMessagesToRedux';

export default () => {
  const hubConnection = useHubConnection();

  useProxyMessagesToRedux(hubConnection);

  return hubConnection;
};
