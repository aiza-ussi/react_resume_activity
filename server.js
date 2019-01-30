var express =  require('express');

// Create app
var app = express();

app.use(express.static('public'));

app.listen(8081, function(){
  console.log('Express is up on port 8081');

});
