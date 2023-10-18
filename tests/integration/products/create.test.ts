import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('should return 201 when product is created', async function () {
    const requestBody = {
      name: "Martelo de Thor",
      price: "30 peças de ouro",
      orderId: 4
    };

    const response = await chai.request(app).post('/products').send(requestBody);

    expect(response.status).to.be.equal(201);
})
});
