import { Provider } from 'react-redux';
import withProviders from './_withProviders';
import store from './redux';
import App from './App';

export default withProviders(
  [
    [Provider, { store }],
  ],
  App,
);
