const express = require('express')
const app = express();
const port = process.env.PORT;
const host = 'azure';

const routing = require('./api/routing');
routing(app);
app.listen(port, function() {
   console.log('Server started: ' + host + ':' + port);
});