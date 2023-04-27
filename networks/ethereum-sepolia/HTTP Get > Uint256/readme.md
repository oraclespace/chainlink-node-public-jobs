# OracleSpace HTTP Get > Uint256 on Ethereum Sepolia

Perform HTTP Get request, parse JSON response and fill uint256.

## Use in Your Contract

Operator Contract: [0x0F9c6BCdE15dfFFD95Cfa8F9167b19B433af1abE](https://sepolia.etherscan.io/address/0x0F9c6BCdE15dfFFD95Cfa8F9167b19B433af1abE)  
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

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
