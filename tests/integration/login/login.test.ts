import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import userMock from '../../mocks/user.mocks';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
    
  it('should return 400 when username is not send ', async function () {
    const requestBody = {
      username: "",
      password: "123456"
    };

    const response = await chai.request(app).post('/login').send(requestBody);

    expect(response.status).to.be.equal(400);
    expect(response.body).not.to.have.key('token');
})

it('should return 400 when password is not send ', async function () {
  const requestBody = {
    username: "xablau",
    password: ""
  };

  const response = await chai.request(app).post('/login').send(requestBody);

  expect(response.status).to.be.equal(400);
})

it('should return 401 when password is invalid ', async function () {
  const requestBody = {
    username: "Hagar",
    password: "123456"
  };

  const response = await chai.request(app).post('/login').send(requestBody);

  expect(response.status).to.be.equal(401);
})

it('should return 401 when username is invalid ', async function () {
  const requestBody = {
    username: "xablau",
    password: "terrível"
  };

  const response = await chai.request(app).post('/login').send(requestBody);

  expect(response.status).to.be.equal(401);
})

it('should return 200 when request is ok ', async function () {
  const requestBody = UserModel.build(userMock.validUser)
  sinon.stub(UserModel, 'findOne').resolves(requestBody);

  const response = await chai.request(app).post('/login').send(userMock.validLogin);

  expect(response.status).to.be.equal(200);
  expect(response.body).to.have.key('token');
})

});
