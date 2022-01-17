'use strict';

const express = require('express');
const app = express(); // express -> singleton || a single object that can be modified, but there can be only one. 

//---------------------------------- Messages ----------------------------------
const messages = [];

class Message {
  constructor(text, author){
    this.text = text;
    this.author = author;
  }
}

//---------------------------------- Routes ----------------------------------

app.use(logger);
// GET Route

app.get('/', (req, res) => {
  res.send('Home');
});


app.get('/message', (req, res) => {
  console.log('request: ', + req.method);
  res.send(messages);
});

//POST Route

app.post('/message',  createMessage, saveMessage, (req, res, next) => {
  res.send(messages);
});

// Use Routes

app.use(errorhandler);

app.use((req, res)=> {
  res.status(404).send('******Request not found*********');
});

//---------------------------------- Middle Wear ----------------------------------

function createMessage(req, res, next) {
  console.log('createMessage Called');

  const messageText = req.query.text;
  const authorName = req.query.author;

  if (!messageText || !authorName) {
    next('No text or author'); // Added Error as that is what I was finding in online examples.
  } else {
    const message = new Message(messageText, authorName);
    req.message = message;
    next();
  }
}

function saveMessage(req, res, next) {
  console.log('message added to req:', req.message);
  let message = req.message;
  messages.push(message);
  next();
}

function logger(req, res, next){
  console.log('logger');
  next();
}

function errorhandler(err, request, response, next) {
  console.log(err);
  response.send('Error handler hit!');
}

module.exports = {
  start: function (port){
    app.listen(port, () => console.log('Listening on: ', port ));
  }, app,
};