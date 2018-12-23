const axios = require('axios');
var assert = require('chai').assert
module.exports = {
deleteRequest : function(urlRequest) {
axios.delete(urlRequest)
  .then(response => {
    assert.equal(response.status, '204');
  })
  .catch(error => {
    console.log(error);
  });
          }
}
