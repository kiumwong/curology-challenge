import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the order endpoints:', () => {
  it('It should create an order', (done) => {
    const order = {
      firstName: "John",
      lastName: "Smith",
      email: "johnsmith@gmail.com",
      phone: "4383833938",
      address: {
        street1: "444 John Street",
        street2: "",
        city: "Johnson",
        state: "NY",
        zip: "11355",
      },
      payment: {
        ccNum: "4538948593949585",
        exp: "02/2020",
      },
      quantity: 1,
      total: "140",
    });
    };
    chai.request(app)
      .post('/api/v1/magic')
      .set('Accept', 'application/json')
      .send(order)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.data).to.include({
          id: 1,
          firstName: order.firstName,
          lastName: order.lastName,
          email: order.email,
          phone: order.phone,
          street1: order.street1,
          street2: order.street2,
          city: order.city,
          state: order.state,
          zip: order.zip,
          ccNum: order.payment.ccNum,
          exp: order.payment.exp,
          quantity: order.quantity,
          total: order.total,
        });
        done();
      });
  });

  it('It should not create a order with incomplete parameters', (done) => {
    const order = {
      firstName: 'John'
    };
    chai.request(app)
      .post('/api/v1/magic')
      .set('Accept', 'application/json')
      .send(order)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all orders', (done) => {
    chai.request(app)
      .get('/api/v1/magic')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('firstName');
        res.body.data[0].should.have.property('lastName');
        res.body.data[0].should.have.property('email');
        res.body.data[0].should.have.property('phone');
        res.body.data[0].should.have.property('street1');
        res.body.data[0].should.have.property('street2');
        res.body.data[0].should.have.property('city');
        res.body.data[0].should.have.property('state');
        res.body.data[0].should.have.property('quantity');
        res.body.data[0].should.have.property('total');
        res.body.data[0].should.have.property('payment');
        res.body.data[0].should.have.property('ccNum');
        res.body.data[0].should.have.property('exp');
        res.body.data[0].should.have.property('fulfilled');
        done();
      });
  });

  it('It should get a particular order', (done) => {
    const orderId = 1;
    chai.request(app)
      .get(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('firstName');
        res.body.data.should.have.property('lastName');
        res.body.data.should.have.property('email');
        res.body.data.should.have.property('phone');
        res.body.data.should.have.property('street1');
        res.body.data.should.have.property('street2');
        res.body.data.should.have.property('city');
        res.body.data.should.have.property('state');
        res.body.data.should.have.property('quantity');
        res.body.data.should.have.property('total');
        res.body.data.should.have.property('payment');
        res.body.data.should.have.property('ccNum');
        res.body.data.should.have.property('exp');
        res.body.data.should.have.property('fulfilled');
        done();
      });
  });

  it('It should not get a particular order with invalid id', (done) => {
    const orderId = 8888;
    chai.request(app)
      .get(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find order with the id ${orderId}`);
        done();
      });
  });

  it('It should not get a particular order with non-numeric id', (done) => {
    const orderId = 'aaa';
    chai.request(app)
      .get(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });

  it('It should update a order', (done) => {
    const orderId = 1;
    const updatedorder = {
      id: orderId,
      total: '$10.99',
    };
    chai.request(app)
      .patch(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .send(updatedorder)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.id).equal(updatedorder.id);
        expect(res.body.data.total).equal(updatedorder.total);
        done();
      });
  });

  it('It should not update a order with invalid id', (done) => {
    const orderId = '9999';
    const updatedorder = {
      id: orderId,
      total: '$10.99',
    };
    chai.request(app)
      .patch(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .send(updatedorder)
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`Cannot find order with the id: ${orderId}`);
        done();
      });
  });

  it('It should not update a order with non-numeric id value', (done) => {
    const orderId = 'ggg';
    const updatedorder = {
      id: orderId,
      total: '$10.99',
    };
    chai.request(app)
      .patch(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .send(updatedorder)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
                            .eql('Please input a valid numeric value');
        done();
      });
  });


  it('It should delete a order', (done) => {
    const orderId = 1;
    chai.request(app)
      .delete(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a order with invalid id', (done) => {
    const orderId = 777;
    chai.request(app)
      .delete(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
                            .eql(`order with the id ${orderId} cannot be found`);
        done();
      });
  });

  it('It should not delete a order with non-numeric id', (done) => {
    const orderId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/magic/${orderId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});