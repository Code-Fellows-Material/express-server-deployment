# express-server-deployment

## HTTP Express Server deployed on Heroku.

Deployed at: https://cf-express-server-deployment.herokuapp.com/

![Data Flow](/UML.png)

## Installation

to install run `git clone git@github.com:Kellen-Linse/express-server-deployment`

`cd` into express-server-deployment

run `npm install`

## Usage

To start server run : `npm start`

To test server run: `npm test`

## Routes

* GET `/message`: returns a list of Message objects
* POST `/message`: creates a message, saves it and returns the list of messages.

## Features

* Message:
  * Object 
  
        Message{
          text: string,
          author: string
        }

  * Messages can be saves
  * Full list of messages read.