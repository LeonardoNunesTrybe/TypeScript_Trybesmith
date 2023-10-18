import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 200 OK', async function () { 
    const response = await chai.request(app).get('/products');
    expect(response.status).to.equal(200);
  });
});
