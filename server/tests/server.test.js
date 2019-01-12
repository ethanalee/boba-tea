const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Boba} = require('./../models/boba');

beforeEach((done) => {
    Boba.remove({}).then(() => done());
});

describe('POST /boba', () => {
    it('should create a new boba', (done) => {
        var name = 'Pearl Milk Tea';
        var shop = 'Coco';

        request(app)
            .post('/boba')
            .send({name, shop})
            .expect(200)
            .expect((res) => {
                expect(res.body.name).toBe(name);
                expect(res.body.shop).toBe(shop);
            })
            .end((err, res) => {
                if (err) {
                    return done(err); //adding return here stops function execution
                }

                Boba.find().then((bobas) => {
                    expect(bobas.length).toBe(1);
                    expect(bobas[0].name).toBe(name);
                    expect(bobas[0].shop).toBe(shop);
                    done();
                }).catch((err) => done(err));
            });
    });
});