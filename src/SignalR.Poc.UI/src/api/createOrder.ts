import axios from 'axios';

export default () => {
  axios.post('/api/orders')
    .then((res) => {
      console.log(res);
    });
};
