[![NPM](https://nodei.co/npm/hsm-pin-block.png)](https://nodei.co/npm/hsm-pin-block/)

[![Build Status](https://travis-ci.org/rhzs/hsm-pin-block.svg?branch=master)](https://travis-ci.org/rhzs/hsm-pin-block)
[![install size](https://packagephobia.now.sh/badge?p=hsm-pin-block)](https://packagephobia.now.sh/result?p=hsm-pin-block) [![dependencies](https://david-dm.org/rhzs/hsm-pin-block.svg)](https://david-dm.org/rhzs/hsm-pin-block.svg)
[![CodeFactor](https://www.codefactor.io/repository/github/rhzs/hsm-pin-block/badge)](https://www.codefactor.io/repository/github/rhzs/hsm-pin-block)

## HSM PIN Block

High Performance - HSM PIN Block module. Provide PCI Standard PIN Block Encryption with ZPK as key for banking, compliance with ISO-9564-format-0.

This library used at the one of the largest bank in Indonesia, made by ex-banker [https://jenius.com](https://jenius.com)

## Install

You need at least NodeJS v8.11.3. I have tested in NodeJS >=8.11.3, 10.X, and 13.X.

## Usages

```javascript
const hsm = require('hsm-pin-block');

const zpk = 'YOUR_ZPK';
const pin = '123456';
const pan = '1234-5678-1234-5678'

// To generate pin block
const atmPinBlock = hsm.encrypt(zpk, pin, pan);
console.log(atmPinBlock);
```

## Who's using it?

Let me know if you use my library. Put your product name here. 

## License

MIT (c) 2017-2020

## Need support?

Contact author: Rheza Satria
