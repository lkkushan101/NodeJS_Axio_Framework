var data = require('./Data.json');
var request_get = require('./GetRequest.js');
var request_post = require('./PostRequest.js');
var request_delete = require('./DeleteRequest.js');
request_get.getRequest(data.Request_Get);
request_post.postRequest(data.Request_Post,{ "email": data.email, "password": data.password });
request_delete.deleteRequest(data.Request_Delete);