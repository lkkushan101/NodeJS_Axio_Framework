const axios = require('axios');
var assert = require('chai').assert
module.exports = {
deleteRequest : function(urlRequest, post_body) {
axios.put(urlRequest, post_body)
  .then(response => {
    assert.equal(response.status, '200');
   })
  .catch(error => {
    console.log(error);
  });
}
}