

## HSM PIN Block

HSM PIN Block module. Provide PCI Standard PIN Block for banking, compliance with ISO-9564-format-0.


## Usages

```javascript
const HsmPb = require('hsm-pin-block');

const zpk = 'YOUR_ZPK';
const pin = '123456';
const pan = '1234-5678-1234-5678'

// To generate pin block
const atmPinBlock = HsmPb.encrypt(zpk, pin, pan);
console.log(atmPinBlock);
```


## License

MIT (c) 2017

## Need support?

Contact author: Rheza Satria via Github message
