var data = require('./Data.json');
var request_get = require('./GetRequest.js');
describe('Test Weather', function(){
  it('should return weather details', function() {
    request_get.getRequest(data.Request_Get);
  });
  });