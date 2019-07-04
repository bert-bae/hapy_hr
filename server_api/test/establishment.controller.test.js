const expect = require('chai').expect;
const sinon = require('sinon');
const establishmentController = require('../controllers/EstablishmentController');
const establishmentModel = require('../models/establishment');

const res = {
    send: sinon.spy()
}

describe('EstablishmentController', () => {
    describe('getAllEstablishments', () => {
        afterEach(() => {
            sinon.restore();
            res.send.resetHistory();
        });

        it('should call res.send with successful result', () => {
            sinon.stub(establishmentModel, "getEstablishments").resolves([{id: 1}, {id: 2}])
            return establishmentController.getAllEstablishments({}, res, {}).then(data => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.true;
            });
        });

        it('should call res.send with unsuccessful result when getEstablishments throws an error', async () => {
            sinon.stub(establishmentModel, "getEstablishments").throws();
            return establishmentController.getAllEstablishments({}, res, {}).then(data => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
            });
        });
    });
});