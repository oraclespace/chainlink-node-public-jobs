# OracleSpace HTTP Get > Uint256 on Polygon Mumbai

Perform HTTP Get request, parse JSON response and fill uint256.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)  
JobID: beb323d08e56408a8c85271b2db4f196

### Price

0.02 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `multiply` - int256
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
- `multiply` - 100
- `path` - data,prices,LINK

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0xEE7808F1c05080cCA309f04867Ad04F1550a69bC](https://mumbai.polygonscan.com/address/0xEE7808F1c05080cCA309f04867Ad04F1550a69bC)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
