const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');

describe('API', () => {
  describe('GET api/', () => {
    it('returns with a status code of 200 and status of OK', () => {
      return request(app)
        .get('/api')
        .expect(200)
        .then(({ body }) => {
          expect(body).to.eql({
            status: 'OK',
          });
        });
    });
  });
});
