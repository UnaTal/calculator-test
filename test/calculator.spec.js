global.window = global;
global.assert = require('assert');
require('../src/calculator');

describe('Suma', () => {}) { 
    it('Debería ser una función', () => {} {
        assert.equal(typeof calculator.suma, 'function')
    });
    it('Debería devolver 4 si se le dan los argumentos 2 , 2', function() {
        assert.equal(calculator.suma(2,2), 4);
    });
    it('Debería devolver 7 si le pasamos los argumentos 4,3', function() {
        assert. equal(calculator.suma(4,3), 7);
    });
}

describe('Resta', () => {} {})