//import express from 'express';
//import path from 'path';
//import {fileURLToPath} from 'url';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false }); 

const  app = express();
const PORT = 3000;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

console.log(__dirname);
app.use(express.static(path.join(__dirname,'public'))); // this is added!
//app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
 const _retfile = path.join(__dirname, 'views', 'index.html');

 res.sendFile(_retfile);
});

app.post('/submit',urlencodedParser, (req, res) => {
	console.log(req.body);
	const{ length, unit_from, unit_to } =  req.body;
	res.send(`<h2>${length}${unit_from} to ${unit_to}</h2>`);
});
