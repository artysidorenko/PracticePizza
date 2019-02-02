const request = require('supertest');

const app = require('../src/app');

const getRoutes = [
  {
    name: 'home',
    path: '/',
    mimeType: /html/,
    testString: /Welcome/,
  },
  {
    name: 'pizza list',
    path: '/pizza',
    mimeType: /html/,
    testString: /PracticePizza/,
  },
  {
    name: 'add pizza',
    path: '/addPizza/',
    mimeType: /html/,
    testString: /form/,
  },
];
/* eslint-disable */
describe('Contoller', () => {
  it('contains testing spec with an expectation', () => {
    expect(true).toBe(true);
  });
  getRoutes.forEach((route) => {
    it(`correctly routes ${route.name} endpoint`, (done) => {
      request(app)
        .get(route.path)
        .expect(200)
        .expect('Content-Type', route.mimeType)
        .expect(route.testString)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
});

// TODO: complete testing suite including sequelize
