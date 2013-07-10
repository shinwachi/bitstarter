var express = require('express');

var app = express.createServer(express.logger());

var buf = fs.readFileSync('web.js');
//var content = buf.toString();

app.get('/', function(request, response) {
  response.send('Hello World 2!');
//    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
