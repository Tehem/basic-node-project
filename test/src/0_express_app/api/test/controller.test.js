'use strict';

const { expect } = require('chai');
const request = require('supertest');
const sinon = require('sinon');

const config = require('../../../../../src/0_express_app/config');
const { start, stop } = require('../../../../../src/0_express_app/app');

describe('TEST 0 / API / Test / Controller', () => {
  const sandbox = sinon.createSandbox();
  let app;
  before(async () => {
    sandbox.stub(config, 'port').value(8081);
    app = await start();
  });

  after(async () => {
    await stop();
  });

  afterEach(() => sandbox.restore());

  describe('GET /test', () => {
    it('returns 400 if no name provided', async () => {
      const { text, status } = await request(app).get('/api/test');

      expect({ text, status }).to.deep.equal({
        status: 400,
        text: 'Bad Request',
      });
    });

    it('returns an hello message', async () => {
      const { text, status } = await request(app)
        .get('/api/test')
        .query({ name: 'test' });

      expect({ text, status }).to.deep.equal({
        status: 200,
        text: 'Hello test !',
      });
    });
  });
});
