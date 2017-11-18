const express = require('express');
const app = express();
const bodyP = require('body-parser');

app.use(bodyP.json());
app.use(bodyP.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Methods", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/hello/:name', function (req, res) {
  console.log('get');
  res.send({
    hello: `Hello ${req.params.name}!`,
    status: 200
  });
});

app.post('/sum', function (req, res) {
  console.log('post');
  console.log(req.body);
  res.send({
    status: 200,
    sum: parseInt(req.body.a) + parseInt(req.body.b)
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});