const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(express('json')); 

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/', require('./router'));

app.listen(5000, ()=>{
	console.log('SERVER corriendo en http://localhost:5000');
   
})


