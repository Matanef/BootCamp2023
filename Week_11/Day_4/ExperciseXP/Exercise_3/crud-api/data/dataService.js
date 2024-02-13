const axios = require('axios');

const fetchPost = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    } catch (error) {
      
      console.error(error);
    }
};
module.exports = fetchPost