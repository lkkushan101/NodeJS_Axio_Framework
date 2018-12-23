const axios = require('axios');
module.exports = {
postRequest : function(urlRequest, post_body) {
axios.post(urlRequest, { email: 'lkkushan@lk.lk', password:"wwww"})
  .then(response => {
    console.log(response.data.token);
   })
  .catch(error => {
    console.log(error);
  });
        }
}
