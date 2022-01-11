'use strict';

const supertest = require('supertest');
const server = require('../app.js');

const request = supertest(server.app);

describe('Testing my HTTP server', () => {

  it('should be able to respond to a POST request', async () => {
    let response = await request.post('message?text=test&autor=test');
    
    expect(response.status).toEqual(200);
    expect(response.body[0].text).toEqual('test');

  });
});