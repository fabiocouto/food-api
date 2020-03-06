const port = 3000
const express = require('express')
const app = express()
const foodRoutes = require('../routes/food-route')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', foodRoutes);

app.listen(port, function(){
    console.log('Server is runing at port: ' + port);
});
