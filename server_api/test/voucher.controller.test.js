"use strict";

const expect = require('chai').expect;
const sinon = require('sinon');
const suppressConsole = require('./utils/suppressConsole');

const voucherController = require('../controllers/VoucherController');
const voucherModel = require('../models/voucher');

describe('VoucherController', () => {
    let req = {
        body: {
            userId: 1,
            expiresAt: true
        },
        params: {
            establishmentId: 1,
            voucherId: 1
        }
    }

    let res = {
        send: sinon.spy()
    }

    afterEach(() => {
        sinon.restore();
        res.send.resetHistory();
    });

    describe('setVoucher', () => {
        it('calls res.send with successful result and returns voucher when voucher is new', () => {
            sinon.stub(voucherModel, 'setVoucher').resolves(true);
            sinon.stub(voucherModel, 'getLastInsertFromUser').resolves(true);

            let result = suppressConsole(voucherController.setVoucher, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.true;
                expect(res.send.args[0][0].err).to.be.null;
                expect(res.send.args[0][0].voucher).not.to.be.null;
            });
        });

        it('calls res.send with unsuccessful result when setVoucher returns false', () => {
            sinon.stub(voucherModel, 'setVoucher').resolves(false);
            sinon.stub(voucherModel, 'getLastInsertFromUser').resolves(true);

            let result = suppressConsole(voucherController.setVoucher, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].prompt).to.be.true;
            });
        });

        it('calls res.send with unsuccessful result when userId is not a number', () => {
            req.body.userId = undefined;

            let result = suppressConsole(voucherController.setVoucher, [req, res, {}]);

            req.body.userId = 1;

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].voucher).to.be.null;
            });
        });

        it('calls res.send with unsuccessful result when setVoucher throws an error', () => {
            sinon.stub(voucherModel, 'setVoucher').throws();
            sinon.stub(voucherModel, 'getLastInsertFromUser').resolves(true);

            let result = suppressConsole(voucherController.setVoucher, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].prompt).to.be.false;
            });
        });

        it('calls res.send with unsuccessful result when getLastInsertFromUser throws an error', () => {
            sinon.stub(voucherModel, 'setVoucher').resolves(true);
            sinon.stub(voucherModel, 'getLastInsertFromUser').throws();

            let result = suppressConsole(voucherController.setVoucher, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].prompt).to.be.false;
            });
        });
    });

    describe('getVoucher', () => {
        it('calls res.send with successful result when getVoucher returns successfully', () => {
            sinon.stub(voucherModel, 'getVoucher').resolves(true);
            
            let result = suppressConsole(voucherController.getVoucher, [req, res, {}]);

            result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.true;
                expect(res.send.args[0][0].err).to.be.null;
                expect(res.send.args[0][0].voucher).not.to.be.null;
            });
        });

        it('calls res.send with unsuccessful result when getVoucher throws', () => {
            sinon.stub(voucherModel, 'getVoucher').throws();

            let result = suppressConsole(voucherController.getVoucher, [req, res, {}]);

            result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].voucher).to.be.null;
            });
        });
    });

    describe('redeemVoucher', () => {

    });

    describe('invalidateVoucher', () => {

    });

    describe('retrieveVoucher', () => {

    });
});