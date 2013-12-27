var express = require('express');
var app = express();
//var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(getMessage());
  console.log("message:" + getMessage);
});

app.configure(function(){
  app.use(express.static(__dirname));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs');
var getMessage = function(){
  var data = fs.readFileSync("messagebox.html");
  var message = data.toString('utf-8');
  return message; 
};
