# OracleSpace HTTP Get > Uint256,Uint256 on Arbitrum Goerli

Perform HTTP Get request, parse JSON response and fill double uint256.

## Use in Your Contract

Operator Contract: [0xB7a5181B507B3c7A70Bb633E118cd0f3d919143a](https://goerli.arbiscan.io/address/0xB7a5181B507B3c7A70Bb633E118cd0f3d919143a)  
JobID: 50ce6528f1db4b7d888caa3fac23b783

### Price

0.05 LINK

### Parameters

The job requires the following parameters to be specified:

- `get` - internet-facing URL from where the data is retrieved
- `path1` - path to first value
- `path2` - path to second value
- `multiply` - int256

### Test Parameters

- `get` - https://raw.githubusercontent.com/oraclespace/chainlink-node-public-jobs/master/example-data/numbers.json
- `path1` - data,prices,LINK
- `path2` - data,prices,ETH
- `multiply` - 100

## REST requests limitations

- HTTPS only
- SSL certificate must be valid
- Response size limited to 5MB
- Response timeout - 30s

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
