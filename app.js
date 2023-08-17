const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3001
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  port:3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/hello',(req,res)=>{
  res.send({"message":"hello world!!"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})