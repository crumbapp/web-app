/**
 * Require Express
 */
var express = require('express');

/**
 * Create Express Server
 */
var app = express(); 

/**
 * Express Server Configuration
 */
app.use(require('morgan')('dev'));
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + '/../dist'));

app.listen(app.get("port"), function(){
  console.log("Listening on port %d", app.get("port"));
});