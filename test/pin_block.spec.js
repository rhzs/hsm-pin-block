const assert = require('assert');
const {encrypt, decrypt} = require('../lib/pin_block');

describe('PIN Block ISO-9564-Format-1', () => {
  const PIN = '111111';
  const PAN = '6035159900000027';
  const ZPK = 'ADD3B5C7B576D3AE38B90B7C0EB67A7C';

  it('should encrypt PIN using des-ede-cbc with no-padding', () => {
    const result = encrypt(ZPK, PIN, PAN);
    assert.equal(result, '6619054d96892845');
  });

  it('should be able to decrypt PIN block', () => {
    const pin = decrypt(ZPK, 'b069827e1b9a8de9');
    assert.equal(pin, 'ae3761af02fb4e2f');
  });
});
