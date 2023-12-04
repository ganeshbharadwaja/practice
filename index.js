const express = require('express');
const app = express();
const request = require('request');
// const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const http = require('http');

// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const options = {
  accept : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7'
}

http.createServer((req, res) => {
  const id = Math.floor(Math.random() * 1000) + 1;
  const url = `http://picsum.photos/${id}`;
  const img = request({
    headers: {
      'User-Agent': 'PostmanRuntime/7.31.0'
    },
    uri: url,
    method: 'GET'
  },(error, response, body) => {
    console.log(error);
    console.log('response', response);
  });
  res.setHeader('Content-Type', 'image/jpeg');
  img.pipe(res);
}).listen(3000, () => {
  console.log(`Server running at 3000`);
});