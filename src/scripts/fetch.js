const axios = require('axios');

const fetch = () => {
  const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/all';
  axios.get(url)
    .then(function (response) {
      console.log(response);
      return response.data.tasks;
    })
    .catch(function (error) {
      console.log(error);
    })
}

export default fetch;