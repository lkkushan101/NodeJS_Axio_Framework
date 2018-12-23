const axios = require('axios');
var assert = require('chai').assert
module.exports = {
getRequest : function(urlRequest) {
axios.get(urlRequest)
  .then(response => {
	assert.equal(response.data.City, 'Pune');
	assert.equal(response.data.WeatherDescription, 'clear sky');
  })
  .catch(error => {
    console.log(error);
  });
 }
}
