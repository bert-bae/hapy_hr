const expect = require('chai').expect;
const sinon = require('sinon');
const establishmentController = require('../controllers/EstablishmentController');

const res = {
    send: sinon.spy()
}

describe('EstablishmentController', () => {
    describe('getAllEstablishments', () => {
        afterEach(() => {
            res.send.resetHistory();
        });

        it('should call res.send once', () => {
            return establishmentController.getAllEstablishments({}, res, {}).then(data => {
                expect(res.send.calledOnce).to.be.true;
            });
        });

        it('should call res.send once again', () => {
            return establishmentController.getAllEstablishments({}, res, {}).then(data => {
                expect(res.send.calledOnce).to.be.true;
            });
        });
    });
});