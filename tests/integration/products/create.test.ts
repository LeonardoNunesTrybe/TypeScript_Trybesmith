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

it('should return 400 when name is not send', async function () {
  const requestBody = {
    name: "",
    price: "30 peças de ouro",
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(400);
})

it('should return 400 when price is not send', async function () {
  const requestBody = {
    name: "Martelo de Thor",
    price: "",
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(400);
})

it('should return 422 when name is not a string', async function () {
  const requestBody = {
    name: 30,
    price: "30 peças de ouro",
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(422);
})

it('should return 422 when price is not a string', async function () {
  const requestBody = {
    name: "Martelo de Thor",
    price: 30,
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(422);
})

it('should return 422 when name not be 3 caracters', async function () {
  const requestBody = {
    name: 'xa',
    price: "30 peças de ouro",
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(422);
})

it('should return 422 when price not be 3 caracters', async function () {
  const requestBody = {
    name: "Martelo de Thor",
    price: 'xa',
    orderId: 4
  };

  const response = await chai.request(app).post('/products').send(requestBody);

  expect(response.status).to.be.equal(422);
})
});
