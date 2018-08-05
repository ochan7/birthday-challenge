const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const app = require('../server');
const birthdaysEndpoint = '/api/birthdays';

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
        .get(birthdaysEndpoint)
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

  describe('POST api/birthdays', () => {
    it('returns with a status code of 201', () => {
      const janeDoe = {
        name: 'Jane Doe',
        birthday: '1980-09-01',
      };
      return request(app)
        .post(birthdaysEndpoint)
        .send(janeDoe)
        .expect(201)
        .then(() => request(app).get(birthdaysEndpoint))
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
            janeDoe,
          ]);
        });
    });
    it('returns with a status code of 400 when missing birthday or name', () => {
      return request(app)
        .post(birthdaysEndpoint)
        .send({})
        .expect(400);
    });
  });

  describe('DELETE api/birthdays/:id', () => {
    it('returns with a status code of 204 for successful deletion', () => {
      return request(app)
        .delete(`${birthdaysEndpoint}/0`)
        .expect(204);
    });
    it('returns with a status code of 400 when given an id out of bounds', () => {
      return request(app)
        .delete(`${birthdaysEndpoint}/100`)
        .expect(400)
        .then(({ body }) => {
          expect(body).to.eql({
            message: 'BAD REQUEST',
          });
        });
    });
  });
});
