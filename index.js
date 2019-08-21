const express= require('express');
const port = 3000;
const path = require('path');
const app = express ();

app.get('/', function(request,response){
  response.sendfile(path.join(__dirname + '/index.html'))
});

app.get('/contact', function(request,response){
  response.sendfile(path.join(__dirname + '/contact.html'))
});

app.get('/about', function(request,response){
  response.sendfile(path.join(__dirname + '/about.html'))
});

app.listen(port, function(){
  console.log('server is running');
});
