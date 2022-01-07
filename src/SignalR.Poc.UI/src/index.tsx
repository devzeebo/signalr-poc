import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const mount = document.getElementById('mount');

  ReactDOM.render(
    <App />,
    mount,
  );
});
