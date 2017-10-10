'use strict';

const BigInteger = require('big-integer');
const crypto = require('crypto');

const RADIX = 16;
const CHIPER_TYPE = 'des-ede-cbc';
const AUTO_PADDING_CONTROL = false;

module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;

// PIN = Personal Identity Number
function pinBlock(pin) {
  const PIN_LENGTH = `${pin}`.length;
  const LENGTH_AVAILABLE = RADIX - PIN_LENGTH - 1;
  var pinBlockHex = `0${PIN_LENGTH}${pin}`;
  for (var cardNoIndex = 1; cardNoIndex < LENGTH_AVAILABLE; ++cardNoIndex) {
    pinBlockHex += 'F';
  }

  return pinBlockHex;
}

// PAN = Personal Account Number
function panBlock(pan) {
  const MAX_PAN_LENGTH = 12;
  const PAN_LENGTH = pan.toString().length;
  const panBlockHex = `0000${pan.substring(PAN_LENGTH - MAX_PAN_LENGTH - 1, PAN_LENGTH - 1)}`;

  return panBlockHex;
}

function pinAndPanToIso9564Format0(pin, pan) {
  const pinBlockHex = pinBlock(pin);
  const panBlockHex = panBlock(pan);
  const bigIntPin = BigInteger(pinBlockHex, RADIX);
  const bigIntPan = BigInteger(panBlockHex, RADIX);

  return `0${bigIntPin.xor(bigIntPan).toString(16)}`;
}

function encrypt(zpk, pin, pan) {
  const iso9564format0 = pinAndPanToIso9564Format0(pin, pan);

  const plaintext = Buffer.from(iso9564format0, 'hex').toString('binary');
  const key = Buffer.from(zpk, 'hex');
  const iv = Buffer.alloc(8, 0);

  const cipher = crypto.createCipheriv(CHIPER_TYPE, key, iv);
  cipher.setAutoPadding(AUTO_PADDING_CONTROL);

  var encrypted = cipher.update(plaintext, 'binary', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
}

function decrypt(zpk, message) {
  const encryptedMessage = Buffer.from(message, 'hex').toString('binary');
  const key = Buffer.from(zpk, 'hex');
  const iv = Buffer.alloc(8, 0);

  const decipher = crypto.createDecipheriv(CHIPER_TYPE, key, iv);
  decipher.setAutoPadding(AUTO_PADDING_CONTROL);

  var decrypted = decipher.update(encryptedMessage, 'binary', 'hex');
  decrypted += decipher.final('hex');

  return decrypted;
}
