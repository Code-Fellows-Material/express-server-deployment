'use strict';

const { response } = require('express');
const { request } = require('express');
const express = require('express');

const messages = [];

class Message {
  constructor(text, author){
    this.text = text;
    this.author = author;
  }
}

// express -> singleton || a single object that can be modified, but there can be only one. 
const app = express();

app.get('/message', (req, res) => {
  console.log('request: ', + req.method);

  res.send(messages);
});

app.post('/message', (req, res,next) => {
  const messageText = req.query.text;
  const authorName = req.query.author;

  next('Ann error occured'); // Will pick up any erros and run 

  const message = new Message(messageText, authorName);
  messages.push(message);
  res.send(messages);
});

app.use((req, res)=> {
  res.status(404).send('******Request not found*********');
});

module.exports = {
  start: function (port){
    app.listen(port, () => console.log('Listening on: ', port ));
  }, app,
};