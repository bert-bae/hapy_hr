const sinon = require('sinon');

// Helper function that prevents output to console during tests
module.exports = function suppressConsole (cb, args) {
    sinon.stub(console, 'log');
    let result = cb(...args);
    console.log.restore();
    return result;
}