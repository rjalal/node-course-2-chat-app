var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate a message', () => {
    it('should create a message', () => {
        var from = 'Rami@gmail.com'
        var text = 'Testing a message created by Rami'

        var message = generateMessage(from,text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text});

    });
});