const axios = require('axios');

const fetch = () => {
  const url = 'https://cors-anywhere.herokuapp.com/zsktasks-api.herokuapp.com/all';
  let ret;
  axios.get(url)
    .then(function (response) {
      // console.log(response.data.tasks);
      ret = response.data.tasks;
    })
    .catch(function (error) {
      console.log(error);
    })

    return ret;
}

export default fetch;