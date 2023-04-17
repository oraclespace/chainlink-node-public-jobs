# OracleSpace HTTP Get > Bool on Polygon Mumbai

Perform HTTP Get request, parse JSON response and fill Bool.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)  
JobID: 380dc2f353f0463eb2371a4635adefd7

### Price

0.01 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/bool-values.json
- `path` - data,trueValue

## Supported hosts for REST requests

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0x0B587f767463Df9e678F55A4718f43eE5Fc571Bf](https://mumbai.polygonscan.com/address/0x0B587f767463Df9e678F55A4718f43eE5Fc571Bf)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
