# OracleSpace HTTP Get > Uint256[] on Polygon Mumbai

Perform HTTP Get request, parse JSON response and fill array of uint256.

## Use in Your Contract

Operator Contract: [0x7ca7215c6B8013f249A195cc107F97c4e623e5F5](https://mumbai.polygonscan.com/address/0x7ca7215c6B8013f249A195cc107F97c4e623e5F5)  
JobID: 3fdf0c58b21f4b539588015ad5ab62a8

### Price

0.075 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
- `path` - data,prices,otherPrices

## Supported hosts for REST requests

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0x6De9471c21E4c63B0570a374114F98261DAdE300](https://mumbai.polygonscan.com/address/0x6De9471c21E4c63B0570a374114F98261DAdE300)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
