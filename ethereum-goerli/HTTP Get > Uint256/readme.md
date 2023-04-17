# OracleSpace HTTP Get > Uint256 on Ethereum Goerli

Perform HTTP Get request, parse JSON response and fill uint256.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
JobID: beb323d08e56408a8c85271b2db4f196

### Price

0.025 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `multiply` - int256
- `path` - comma-separated JSON path used to extract the value

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
- `multiply` - 100
- `path` - data,prices,LINK

## Supported hosts for REST requests

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Our Client Example Contract

Client Example Contract: [0x589C4637135B02C8F8e261C1C2b7D4619B0fB885](https://goerli.etherscan.io/address/0x589C4637135B02C8F8e261C1C2b7D4619B0fB885)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
