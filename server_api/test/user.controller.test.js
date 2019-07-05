"use strict";

const expect = require('chai').expect;
const sinon = require('sinon');
const suppressConsole = require('./utils/suppressConsole');

const userController = require('../controllers/UserController');
const userModel = require('../models/user');

describe('UserController', () => {

    const req = {
        body: {
            user: {
                email: 'joe@example.com',
                username: 'joe'
            }
        }
    }

    const res = {
        send: sinon.spy()
    }

    afterEach(() => {
        sinon.restore();
        res.send.resetHistory();
    });

    describe('authenticateUser', () => {
        it('calls res.send with successful result when user exists', () => {
            sinon.stub(userModel, 'getUserByEmail').resolves(true);

            let result = suppressConsole(userController.authenticateUser, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.true;
                expect(res.send.args[0][0].err).to.be.null;
                expect(res.send.args[0][0].user).to.be.true;
            });
        });

        it('calls res.send with successful result when user does not exist', () => {
            sinon.stub(userModel, 'getUserByEmail').resolves(false);
            sinon.stub(userModel, 'createUser').resolves(true);

            let result = suppressConsole(userController.authenticateUser, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.true;
                expect(res.send.args[0][0].err).to.be.null;
                expect(res.send.args[0][0].message).to.equal('User entered into the database.');
            });
        });

        it('calls res.send with unsuccessful result when getUserByEmail throws error', () => {
            sinon.stub(userModel, 'getUserByEmail').throws();

            let result = suppressConsole(userController.authenticateUser, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].message).to.equal('Error retrieving or creating user in server.');
            });
        });

        it('calls res.send with unsuccessful result when createUser throws error', () => {
            sinon.stub(userModel, 'getUserByEmail').resolves(false);
            sinon.stub(userModel, 'createUser').throws();

            let result = suppressConsole(userController.authenticateUser, [req, res, {}]);

            return result.then(() => {
                expect(res.send.calledOnce).to.be.true;
                expect(res.send.args[0][0].success).to.be.false;
                expect(res.send.args[0][0].err).not.to.be.null;
                expect(res.send.args[0][0].message).to.equal('Error retrieving or creating user in server.');
            });
        });
    });
});