const express = require('express');
const app = express();


const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js')

moviesApi(app);
// app.get('/', function(req, res) {
//     res.send(console.log(req));
// });

// app.get('/user/:year', function(req, res) {
//     let añoVisiesto =  (req.params.year % 4);
//     if(!añoVisiesto) {
//         res.send(``)
//     }
//     res.send(console.log(año)); 


// });

// app.get('/json', function(req, res) {
//     res.json({ hello: 'world' });

// });

app.listen(config.port, function () {
    console.log(`Listening http://localhost:${config.port}`);

});
