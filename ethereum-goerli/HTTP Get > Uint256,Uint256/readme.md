# OracleSpace HTTP Get > Uint256,Uint256 on Ethereum Goerli

Perform HTTP Get request, parse JSON response and fill double uint256.

## Use in Your Contract

Operator Contract: [0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a](https://goerli.etherscan.io/address/0x7ecFBD6CB2D3927Aa68B5F2f477737172F11190a)  
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

## Our Client Example Contract

Client Example Contract: [0xCa5B145d81AaE38da9714f90316bF1D8E17fa24B](https://goerli.etherscan.io/address/0xCa5B145d81AaE38da9714f90316bF1D8E17fa24B)

## Have some questions or problems?

[Contact Us!](https://github.com/oraclespace/chainlink-node-public-jobs#contact-us)
