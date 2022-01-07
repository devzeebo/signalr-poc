import axios from 'axios';

export default (id: string) => {
  axios.post(`/api/orders/${id}/cancel`)
    .then((res) => {
      console.log(res);
    });
};
