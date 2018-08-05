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
  describe('GET api/birthdays', () => {
    it('returns with a status code of 200 and an array of data', () => {
      return request(app)
        .get('/api/birthdays')
        .expect(200)
        .then(({ body }) => {
          expect(body).to.eql([
            {
              name: 'John Doe',
              birthday: '1981-08-02',
            },
            {
              name: 'Katie Smith',
              birthday: '1973-05-20',
            },
            {
              name: 'Anna Jackson',
              birthday: '1993-10-15',
            },
          ]);
        });
    });
  });
});
