const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// var express = require('express');
// var app = express();

// var mysql = require('mysql');
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({type:'application/json'}));
// app.use(bodyParser.urlencoded({extended:true}));

// var con = mysql.createConnection({

//     host:'localhost',
//     user:'root',
//     database:'mydb'

// });

// var server = app.listen(4555, function(){
//     var host = server.address().address
//     var host = server.address().port
//     console.log("starting!");
// });

// con.connect(function(error){
//     if(error) console.log(error);
//     else console.log("connected to db");
// })

// app.get('/users', function(req, res){
//     con.query('select * from users', function (error, rows, fields){
//         if(error) console.log(error);

//         else{
//             console.log(rows);
//              res.send(rows);
//         }
//     });
// });