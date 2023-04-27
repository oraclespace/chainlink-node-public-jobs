# OracleSpace HTTP Get > Uint256 on Arbitrum Mainnet

Perform HTTP Get request, parse JSON response and fill uint256.

## Use in Your Contract

Operator Contract: [0x6861123fcE41d159c7E5f7A229160d8241A1BF5b](https://arbiscan.io/address/0x6861123fcE41d159c7E5f7A229160d8241A1BF5b)  
JobID: beb323d08e56408a8c85271b2db4f196

### Price

0.1 LINK

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

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
